// database.js — Conexión y todas las consultas SQL Server
const sql = require('mssql');

// ─── CONFIGURACIÓN ───────────────────────────────────────
const config = {
  user:         'logistica',
  password:     'M4RG4R3T75',
  server:       'localhost',
  database:     'LogisticaDB',
  instanceName: 'SQLEXPRESS',
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true
  },
  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 }
};

let pool = null;
async function getPool() {
  if (!pool) {
    pool = await sql.connect(config);
    console.log('✅ Conectado a SQL Server — LogisticaDB');
  }
  return pool;
}

// ═══════════════════════════════════════════════════════════
// USUARIOS
// ═══════════════════════════════════════════════════════════
async function loginUsuario(usuario, pass) {
  const p = await getPool();
  const r = await p.request()
    .input('usuario', sql.NVarChar, usuario)
    .input('pass',    sql.NVarChar, pass)
    .query(`SELECT id, usuario, nombre, rol
            FROM usuarios
            WHERE LOWER(usuario)=LOWER(@usuario) AND pass=@pass AND activo=1`);
  return r.recordset[0] || null;
}

async function getUsuarios() {
  const p = await getPool();
  const r = await p.request().query('SELECT id, usuario, nombre, rol, email FROM usuarios WHERE activo=1');
  return r.recordset;
}

async function crearUsuario(usuario, pass, nombre, rol, email) {
  const p = await getPool();
  const dup = await p.request()
    .input('usuario', sql.NVarChar, usuario)
    .query('SELECT id FROM usuarios WHERE LOWER(usuario)=LOWER(@usuario)');
  if (dup.recordset.length) throw new Error('Usuario ya existe');
  await p.request()
    .input('usuario', sql.NVarChar, usuario)
    .input('pass',    sql.NVarChar, pass)
    .input('nombre',  sql.NVarChar, nombre || usuario)
    .input('rol',     sql.NVarChar, rol || 'operativo')
    .input('email',   sql.NVarChar, email || '')
    .query('INSERT INTO usuarios (usuario, pass, nombre, rol, email) VALUES (@usuario, @pass, @nombre, @rol, @email)');
}

async function eliminarUsuario(id) {
  const p = await getPool();
  await p.request().input('id', sql.Int, id)
    .query('UPDATE usuarios SET activo=0 WHERE id=@id');
}

// ═══════════════════════════════════════════════════════════
// ASESORES
// ═══════════════════════════════════════════════════════════
async function getAsesores() {
  const p = await getPool();
  const r = await p.request()
    .query('SELECT * FROM asesores WHERE activo=1 ORDER BY apellidos, nombres');
  return r.recordset;
}

async function crearAsesor(a) {
  const p = await getPool();
  if (a.dni) {
    const dup = await p.request().input('dni', sql.NVarChar, a.dni)
      .query('SELECT id FROM asesores WHERE dni=@dni AND activo=1');
    if (dup.recordset.length) throw new Error('Ya existe un asesor con ese DNI');
  }
  const r = await p.request()
    .input('nombres',   sql.NVarChar, a.nombres   || '')
    .input('apellidos', sql.NVarChar, a.apellidos || '')
    .input('dni',       sql.NVarChar, a.dni       || '')
    .input('empresa',   sql.NVarChar, a.empresa   || '')
    .input('jefe',      sql.NVarChar, a.jefe      || '')
    .input('area',      sql.NVarChar, a.area      || '')
    .input('provincia', sql.NVarChar, a.provincia || '')
    .input('movil',     sql.NVarChar, a.movil     || '')
    .query(`INSERT INTO asesores (nombres,apellidos,dni,empresa,jefe,area,provincia,movil)
            OUTPUT INSERTED.id
            VALUES (@nombres,@apellidos,@dni,@empresa,@jefe,@area,@provincia,@movil)`);
  return r.recordset[0].id;
}

async function actualizarAsesor(id, a) {
  const p = await getPool();
  await p.request()
    .input('id',        sql.Int,      id)
    .input('nombres',   sql.NVarChar, a.nombres   || '')
    .input('apellidos', sql.NVarChar, a.apellidos || '')
    .input('dni',       sql.NVarChar, a.dni       || '')
    .input('empresa',   sql.NVarChar, a.empresa   || '')
    .input('jefe',      sql.NVarChar, a.jefe      || '')
    .input('area',      sql.NVarChar, a.area      || '')
    .input('provincia', sql.NVarChar, a.provincia || '')
    .input('movil',     sql.NVarChar, a.movil     || '')
    .query(`UPDATE asesores SET nombres=@nombres,apellidos=@apellidos,dni=@dni,
            empresa=@empresa,jefe=@jefe,area=@area,provincia=@provincia,movil=@movil
            WHERE id=@id`);
}

async function eliminarAsesor(id) {
  const p = await getPool();
  await p.request().input('id', sql.Int, id)
    .query('UPDATE asesores SET activo=0 WHERE id=@id');
}

async function importarAsesores(lista) {
  let insertados = 0;
  for (const a of lista) {
    if (!a.nombres || !a.apellidos) continue;
    try { await crearAsesor(a); insertados++; } catch(e) {}
  }
  return insertados;
}

// ═══════════════════════════════════════════════════════════
// MOVIMIENTOS
// ═══════════════════════════════════════════════════════════
async function getMovimientos() {
  const p = await getPool();
  const r = await p.request().query(`
    SELECT m.*,
           (SELECT e.id, e.nombre, e.tipo, e.data
            FROM evidencias e WHERE e.movimiento_id = m.id
            FOR JSON PATH) AS evidencias_json
    FROM movimientos m ORDER BY m.id DESC`);
  return r.recordset.map(m => ({
    ...m,
    evidencias: m.evidencias_json ? JSON.parse(m.evidencias_json) : []
  }));
}

async function crearMovimientos(items) {
  const p = await getPool();
  const ids = [];
  for (const item of items) {
    const r = await p.request()
      .input('fecha',     sql.NVarChar,      item.fecha     || '')
      .input('tipo',      sql.NVarChar,      item.tipo      || '')
      .input('orden',     sql.NVarChar,      item.orden     || '')
      .input('categoria', sql.NVarChar,      item.categoria || '')
      .input('producto',  sql.NVarChar,      item.producto  || '')
      .input('modelo',    sql.NVarChar,      item.modelo    || '')
      .input('talla',     sql.NVarChar,      item.talla     || '—')
      .input('codigo',    sql.NVarChar,      item.codigo    || '')
      .input('cantidad',  sql.Decimal(10,2), item.cantidad  || 0)
      .input('precio',    sql.Decimal(10,2), item.precio    || 0)
      .input('total',     sql.Decimal(10,2), item.total     || 0)
      .input('proveedor', sql.NVarChar,      item.proveedor || '')
      .input('persona',   sql.NVarChar,      item.persona   || '')
      .input('area',      sql.NVarChar,      item.area      || '')
      .input('estado',    sql.NVarChar,      item.estado    || 'NUEVO')
      .input('obs',       sql.NVarChar,      item.obs       || '')
      .query(`INSERT INTO movimientos (fecha,tipo,orden,categoria,producto,modelo,talla,
              codigo,cantidad,precio,total,proveedor,persona,area,estado,obs)
              OUTPUT INSERTED.id
              VALUES (@fecha,@tipo,@orden,@categoria,@producto,@modelo,@talla,
              @codigo,@cantidad,@precio,@total,@proveedor,@persona,@area,@estado,@obs)`);
    const newId = r.recordset[0].id;
    ids.push(newId);
    if (item.evidencias && item.evidencias.length) {
      for (const ev of item.evidencias) {
        await p.request()
          .input('mid',    sql.Int,                 newId)
          .input('nombre', sql.NVarChar,            ev.nombre || '')
          .input('tipo',   sql.NVarChar,            ev.tipo   || '')
          .input('data',   sql.NVarChar(sql.MAX),   ev.data   || '')
          .query('INSERT INTO evidencias (movimiento_id,nombre,tipo,data) VALUES (@mid,@nombre,@tipo,@data)');
      }
    }
  }
  return ids;
}

async function actualizarMovimiento(id, item) {
  const p = await getPool();
  await p.request()
    .input('id',       sql.Int,          id)
    .input('fecha',    sql.NVarChar,     item.fecha    || '')
    .input('cantidad', sql.Decimal(10,2), item.cantidad || 0)
    .input('precio',   sql.Decimal(10,2), item.precio   || 0)
    .input('total',    sql.Decimal(10,2), item.total    || 0)
    .input('estado',   sql.NVarChar,     item.estado   || 'NUEVO')
    .input('obs',      sql.NVarChar,     item.obs      || '')
    .query(`UPDATE movimientos
            SET fecha=@fecha,cantidad=@cantidad,precio=@precio,total=@total,estado=@estado,obs=@obs
            WHERE id=@id`);
}

async function eliminarMovimiento(id) {
  const p = await getPool();
  await p.request().input('id', sql.Int, id)
    .query('DELETE FROM movimientos WHERE id=@id');
}

async function eliminarOrden(orden) {
  const p = await getPool();
  await p.request().input('orden', sql.NVarChar, orden)
    .query('DELETE FROM movimientos WHERE orden=@orden');
}

async function agregarEvidencias(movimientoId, evArr) {
  const p = await getPool();
  for (const ev of evArr) {
    await p.request()
      .input('mid',    sql.Int,               movimientoId)
      .input('nombre', sql.NVarChar,          ev.nombre || '')
      .input('tipo',   sql.NVarChar,          ev.tipo   || '')
      .input('data',   sql.NVarChar(sql.MAX), ev.data   || '')
      .query('INSERT INTO evidencias (movimiento_id,nombre,tipo,data) VALUES (@mid,@nombre,@tipo,@data)');
  }
}

// ═══════════════════════════════════════════════════════════
// CATÁLOGOS
// ═══════════════════════════════════════════════════════════
async function getCatalogos() {
  const p = await getPool();
  const r = await p.request().query('SELECT tipo, valor FROM catalogos ORDER BY tipo, valor');
  const obj = { proveedores: [], areas: [], productos: [] };
  r.recordset.forEach(row => { if (obj[row.tipo]) obj[row.tipo].push(row.valor); });
  return obj;
}

async function agregarCatalogo(tipo, valor) {
  const p = await getPool();
  const dup = await p.request()
    .input('tipo', sql.NVarChar, tipo).input('valor', sql.NVarChar, valor)
    .query('SELECT id FROM catalogos WHERE tipo=@tipo AND valor=@valor');
  if (!dup.recordset.length)
    await p.request()
      .input('tipo', sql.NVarChar, tipo).input('valor', sql.NVarChar, valor)
      .query('INSERT INTO catalogos (tipo, valor) VALUES (@tipo, @valor)');
}

async function eliminarCatalogo(tipo, valor) {
  const p = await getPool();
  await p.request()
    .input('tipo', sql.NVarChar, tipo).input('valor', sql.NVarChar, valor)
    .query('DELETE FROM catalogos WHERE tipo=@tipo AND valor=@valor');
}

async function getPrecios() {
  const p = await getPool();
  const r = await p.request().query('SELECT * FROM catalogo_precios ORDER BY categoria, producto');
  return r.recordset;
}

async function guardarPrecio(item, id) {
  const p = await getPool();
  if (id) {
    await p.request()
      .input('id',        sql.Int,          id)
      .input('categoria', sql.NVarChar,     item.categoria || '')
      .input('producto',  sql.NVarChar,     item.producto  || '')
      .input('modelo',    sql.NVarChar,     item.modelo    || '')
      .input('precio',    sql.Decimal(10,2), item.precio   || 0)
      .query('UPDATE catalogo_precios SET categoria=@categoria,producto=@producto,modelo=@modelo,precio=@precio WHERE id=@id');
  } else {
    const existe = await p.request().input('producto', sql.NVarChar, item.producto)
      .query('SELECT id FROM catalogo_precios WHERE LOWER(producto)=LOWER(@producto)');
    if (existe.recordset.length) {
      await p.request()
        .input('id',        sql.Int,          existe.recordset[0].id)
        .input('categoria', sql.NVarChar,     item.categoria || '')
        .input('modelo',    sql.NVarChar,     item.modelo    || '')
        .input('precio',    sql.Decimal(10,2), item.precio   || 0)
        .query('UPDATE catalogo_precios SET categoria=@categoria,modelo=@modelo,precio=@precio WHERE id=@id');
    } else {
      await p.request()
        .input('categoria', sql.NVarChar,     item.categoria || '')
        .input('producto',  sql.NVarChar,     item.producto  || '')
        .input('modelo',    sql.NVarChar,     item.modelo    || '')
        .input('precio',    sql.Decimal(10,2), item.precio   || 0)
        .query('INSERT INTO catalogo_precios (categoria,producto,modelo,precio) VALUES (@categoria,@producto,@modelo,@precio)');
    }
  }
}

async function eliminarPrecio(id) {
  const p = await getPool();
  await p.request().input('id', sql.Int, id).query('DELETE FROM catalogo_precios WHERE id=@id');
}

async function getMinimos() {
  const p = await getPool();
  const r = await p.request().query('SELECT clave, minimo FROM stock_minimos');
  const obj = {};
  r.recordset.forEach(row => obj[row.clave] = row.minimo);
  return obj;
}

async function guardarMinimo(clave, minimo) {
  const p = await getPool();
  const existe = await p.request().input('clave', sql.NVarChar, clave)
    .query('SELECT id FROM stock_minimos WHERE clave=@clave');
  if (existe.recordset.length) {
    await p.request().input('clave', sql.NVarChar, clave).input('minimo', sql.Int, minimo)
      .query('UPDATE stock_minimos SET minimo=@minimo WHERE clave=@clave');
  } else {
    await p.request().input('clave', sql.NVarChar, clave).input('minimo', sql.Int, minimo)
      .query('INSERT INTO stock_minimos (clave, minimo) VALUES (@clave, @minimo)');
  }
}


// ═══════════════════════════════════════════════════════════
// RECUPERACIÓN DE CONTRASEÑA
// ═══════════════════════════════════════════════════════════
async function guardarResetToken(email, token, expiry) {
  const p = await getPool();
  const r = await p.request()
    .input('email', sql.NVarChar, email)
    .query('SELECT id FROM usuarios WHERE LOWER(email)=LOWER(@email) AND activo=1');
  if (!r.recordset.length) throw new Error('No existe usuario con ese correo');
  await p.request()
    .input('email',  sql.NVarChar, email)
    .input('token',  sql.NVarChar, token)
    .input('expiry', sql.DateTime, expiry)
    .query('UPDATE usuarios SET reset_token=@token, reset_token_expiry=@expiry WHERE LOWER(email)=LOWER(@email)');
}

async function validarResetToken(token) {
  const p = await getPool();
  const r = await p.request()
    .input('token', sql.NVarChar, token)
    .input('now',   sql.DateTime, new Date())
    .query('SELECT id, email, usuario FROM usuarios WHERE reset_token=@token AND reset_token_expiry > @now AND activo=1');
  return r.recordset[0] || null;
}

async function cambiarPasswordConToken(token, nuevaPass) {
  const p = await getPool();
  const user = await validarResetToken(token);
  if (!user) throw new Error('Token inválido o expirado');
  await p.request()
    .input('token', sql.NVarChar, token)
    .input('pass',  sql.NVarChar, nuevaPass)
    .query('UPDATE usuarios SET pass=@pass, reset_token=NULL, reset_token_expiry=NULL WHERE reset_token=@token');
  return user;
}

async function actualizarEmail(id, email) {
  const p = await getPool();
  await p.request()
    .input('id',    sql.Int,      id)
    .input('email', sql.NVarChar, email)
    .query('UPDATE usuarios SET email=@email WHERE id=@id');
}

// ═══════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════
module.exports = {
  // Usuarios
  loginUsuario, getUsuarios, crearUsuario, eliminarUsuario,
  // Asesores
  getAsesores, crearAsesor, actualizarAsesor, eliminarAsesor, importarAsesores,
  // Movimientos
  getMovimientos, crearMovimientos, actualizarMovimiento,
  eliminarMovimiento, eliminarOrden, agregarEvidencias,
  // Catálogos
  getCatalogos, agregarCatalogo, eliminarCatalogo,
  getPrecios, guardarPrecio, eliminarPrecio,
  getMinimos, guardarMinimo,
  // Recuperación de contraseña
  guardarResetToken, validarResetToken, cambiarPasswordConToken, actualizarEmail,
  // Pool
  getPool
};
