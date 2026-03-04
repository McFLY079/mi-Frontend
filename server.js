// server.js — Servidor principal Express
const express    = require('express');
const cors       = require('cors');
const bodyParser = require('body-parser');
const path       = require('path');
const db         = require('./database');

const app  = express();
const PORT = process.env.PORT || 3000;

// ─── MIDDLEWARES ─────────────────────────────────────────
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// ─── PING / TEST BD ──────────────────────────────────────
app.get('/api/ping', async (req, res) => {
  try {
    await db.getPool();
    res.json({ ok: true, message: '✅ Conexión a SQL Server exitosa' });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// ════════════════════════════════════════════════════════
// USUARIOS
// ════════════════════════════════════════════════════════
app.post('/api/usuarios/login', async (req, res) => {
  try {
    const { usuario, pass } = req.body;
    const user = await db.loginUsuario(usuario, pass);
    if (!user) return res.status(401).json({ error: 'Credenciales incorrectas' });
    res.json(user);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/usuarios', async (req, res) => {
  try { res.json(await db.getUsuarios()); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/usuarios', async (req, res) => {
  try {
    const { usuario, pass, nombre, rol } = req.body;
    await db.crearUsuario(usuario, pass, nombre, rol);
    res.json({ ok: true });
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.delete('/api/usuarios/:id', async (req, res) => {
  try {
    await db.eliminarUsuario(parseInt(req.params.id));
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ════════════════════════════════════════════════════════
// ASESORES
// ════════════════════════════════════════════════════════
app.get('/api/asesores', async (req, res) => {
  try { res.json(await db.getAsesores()); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/asesores', async (req, res) => {
  try {
    const id = await db.crearAsesor(req.body);
    res.json({ ok: true, id });
  } catch (err) { res.status(400).json({ error: err.message }); }
});

app.put('/api/asesores/:id', async (req, res) => {
  try {
    await db.actualizarAsesor(parseInt(req.params.id), req.body);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/asesores/:id', async (req, res) => {
  try {
    await db.eliminarAsesor(parseInt(req.params.id));
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/asesores/bulk', async (req, res) => {
  try {
    const n = await db.importarAsesores(req.body);
    res.json({ ok: true, insertados: n });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ════════════════════════════════════════════════════════
// MOVIMIENTOS
// ════════════════════════════════════════════════════════
app.get('/api/movimientos', async (req, res) => {
  try { res.json(await db.getMovimientos()); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/movimientos', async (req, res) => {
  try {
    const items = Array.isArray(req.body) ? req.body : [req.body];
    const ids = await db.crearMovimientos(items);
    res.json({ ok: true, ids });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.put('/api/movimientos/:id', async (req, res) => {
  try {
    await db.actualizarMovimiento(parseInt(req.params.id), req.body);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/movimientos/:id', async (req, res) => {
  try {
    await db.eliminarMovimiento(parseInt(req.params.id));
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/movimientos/orden/:orden', async (req, res) => {
  try {
    await db.eliminarOrden(req.params.orden);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/movimientos/:id/evidencias', async (req, res) => {
  try {
    const evArr = Array.isArray(req.body) ? req.body : [req.body];
    await db.agregarEvidencias(parseInt(req.params.id), evArr);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// ════════════════════════════════════════════════════════
// CATÁLOGOS
// ════════════════════════════════════════════════════════
app.get('/api/catalogos', async (req, res) => {
  try { res.json(await db.getCatalogos()); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/catalogos', async (req, res) => {
  try {
    await db.agregarCatalogo(req.body.tipo, req.body.valor);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/catalogos', async (req, res) => {
  try {
    await db.eliminarCatalogo(req.query.tipo, req.query.valor);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/catalogos/precios', async (req, res) => {
  try { res.json(await db.getPrecios()); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/catalogos/precios', async (req, res) => {
  try {
    await db.guardarPrecio(req.body, req.body.id || null);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.delete('/api/catalogos/precios/:id', async (req, res) => {
  try {
    await db.eliminarPrecio(parseInt(req.params.id));
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/catalogos/minimos', async (req, res) => {
  try { res.json(await db.getMinimos()); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/catalogos/minimos', async (req, res) => {
  try {
    for (const [clave, minimo] of Object.entries(req.body))
      await db.guardarMinimo(clave, parseInt(minimo));
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});


// ════════════════════════════════════════════════════════
// RECUPERACIÓN DE CONTRASEÑA
// ════════════════════════════════════════════════════════
const nodemailer = require('nodemailer');
const crypto     = require('crypto');

// ─── CONFIGURACIÓN SMTP — completar con tus credenciales ───
const SMTP_CONFIG = {
  host:   'smtp.office365.com',
  port:   587,
  secure: false,
  auth: {
    user: 'TU_CORREO@outlook.com',   // ← cambiar
    pass: 'TU_CONTRASEÑA'            // ← cambiar
  },
  tls: { ciphers: 'SSLv3' }
};
const FROM_EMAIL  = 'TU_CORREO@outlook.com'; // ← cambiar
const APP_URL     = process.env.APP_URL || 'http://localhost:3000';

// Solicitar reset — envía email con link
app.post('/api/usuarios/solicitar-reset', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email requerido' });
    const token  = crypto.randomBytes(32).toString('hex');
    const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hora
    await db.guardarResetToken(email, token, expiry);
    const link = `${APP_URL}/reset-password.html?token=${token}`;
    const transporter = nodemailer.createTransport(SMTP_CONFIG);
    await transporter.sendMail({
      from: `"Logística Sistema" <${FROM_EMAIL}>`,
      to:   email,
      subject: 'Recuperación de contraseña — Sistema Logística',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto">
          <h2 style="color:#1f6feb">Recuperación de contraseña</h2>
          <p>Recibimos una solicitud para restablecer tu contraseña.</p>
          <p>Haz clic en el siguiente botón (válido por <strong>1 hora</strong>):</p>
          <a href="${link}" style="display:inline-block;background:#1f6feb;color:#fff;padding:12px 28px;border-radius:6px;text-decoration:none;font-weight:bold;margin:16px 0">
            Restablecer contraseña
          </a>
          <p style="color:#888;font-size:12px">Si no solicitaste esto, ignora este mensaje.</p>
        </div>`
    });
    res.json({ ok: true, message: 'Email enviado. Revisa tu bandeja de entrada.' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Validar token
app.get('/api/usuarios/validar-token/:token', async (req, res) => {
  try {
    const user = await db.validarResetToken(req.params.token);
    if (!user) return res.status(400).json({ error: 'Token inválido o expirado' });
    res.json({ ok: true, usuario: user.usuario });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Cambiar password con token
app.post('/api/usuarios/reset-password', async (req, res) => {
  try {
    const { token, nuevaPass } = req.body;
    if (!token || !nuevaPass) return res.status(400).json({ error: 'Datos incompletos' });
    if (nuevaPass.length < 6) return res.status(400).json({ error: 'Mínimo 6 caracteres' });
    await db.cambiarPasswordConToken(token, nuevaPass);
    res.json({ ok: true, message: 'Contraseña actualizada correctamente' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Actualizar email de usuario
app.put('/api/usuarios/:id/email', async (req, res) => {
  try {
    await db.actualizarEmail(parseInt(req.params.id), req.body.email || '');
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─── INICIO ──────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n✅ Servidor corriendo en http://localhost:${PORT}`);
  console.log(`   Test BD: http://localhost:${PORT}/api/ping\n`);
});
