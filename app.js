// ═══════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════
const $ = id => document.getElementById(id);
let toastTimer;
function toast(msg, tipo='ok') {
  clearTimeout(toastTimer);
  const el = $('toast');
  el.textContent = msg; el.className = 'toast ' + tipo; el.style.display = '';
  toastTimer = setTimeout(() => el.style.display = 'none', 3200);
}

// ═══════════════════════════════════════════════
// BASE DE DATOS LOCAL
// ═══════════════════════════════════════════════
const DB_KEY = 'inv_logistica_db';
const DB_DEF = () => ({
  movimientos: [{"id": 1, "itemRef": 1, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Polo color naranja, logo positiva", "modelo": "Pique, manga larga", "talla": "XL", "codigo": "", "cantidad": 4, "precio": 32.0, "total": 128.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 2, "itemRef": 2, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Polo color naranja, logo positiva", "modelo": "Pique, manga larga", "talla": "XXL", "codigo": "", "cantidad": 1, "precio": 34.0, "total": 34.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 3, "itemRef": 3, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Polo color naranja, logo positiva", "modelo": "Pique, manga larga", "talla": "XXXL", "codigo": "", "cantidad": 1, "precio": 36.0, "total": 36.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 4, "itemRef": 4, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Polo color plomo, logo legall", "modelo": "Pique, manga larga", "talla": "L", "codigo": "", "cantidad": 3, "precio": 30.0, "total": 90.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 5, "itemRef": 5, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Polo color plomo, logo legall", "modelo": "Pique, manga larga", "talla": "M", "codigo": "", "cantidad": 2, "precio": 30.0, "total": 60.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 6, "itemRef": 6, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Polo color plomo, logo legall", "modelo": "Pique, manga larga", "talla": "XXL", "codigo": "", "cantidad": 2, "precio": 34.0, "total": 68.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 7, "itemRef": 7, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Polo color plomo, logo legall", "modelo": "Pique, manga larga", "talla": "XL", "codigo": "", "cantidad": 2, "precio": 32.0, "total": 64.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 8, "itemRef": 8, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Chaleco color negro, logo positiva", "modelo": "Tactico", "talla": "S", "codigo": "", "cantidad": 7, "precio": 50.0, "total": 350.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 9, "itemRef": 9, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Chaleco color negro, logo positiva", "modelo": "Tactico", "talla": "XL", "codigo": "", "cantidad": 3, "precio": 50.0, "total": 150.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 10, "itemRef": 10, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Chaleco color negro, logo positiva", "modelo": "Tactico", "talla": "M", "codigo": "", "cantidad": 4, "precio": 50.0, "total": 200.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 11, "itemRef": 11, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Chaleco color negro, logo positiva", "modelo": "Tactico", "talla": "XXL", "codigo": "", "cantidad": 2, "precio": 50.0, "total": 100.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 12, "itemRef": 12, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Chaleco color negro, logo positiva", "modelo": "Tactico", "talla": "L", "codigo": "", "cantidad": 4, "precio": 50.0, "total": 200.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 13, "itemRef": 13, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Pantalon color negro, con cintas reflectivas", "modelo": "Cargo tactico", "talla": "34", "codigo": "", "cantidad": 5, "precio": 50.0, "total": 250.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 14, "itemRef": 14, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Pantalon color negro, con cintas reflectivas", "modelo": "Cargo tactico", "talla": "32", "codigo": "", "cantidad": 3, "precio": 50.0, "total": 150.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 15, "itemRef": 15, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Casaca color negro, logo legall", "modelo": "Tactica", "talla": "L", "codigo": "", "cantidad": 4, "precio": 60.0, "total": 240.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 16, "itemRef": 16, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Casaca color negro, logo legall", "modelo": "Tactica", "talla": "XL", "codigo": "", "cantidad": 4, "precio": 60.0, "total": 240.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 17, "itemRef": 17, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Casaca color negro, logo legall", "modelo": "Tactica", "talla": "XXL", "codigo": "", "cantidad": 1, "precio": 60.0, "total": 60.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 18, "itemRef": 18, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Casaca color naranja, logo legall", "modelo": "Tactica", "talla": "M", "codigo": "", "cantidad": 2, "precio": 70.0, "total": 140.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 19, "itemRef": 19, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Casaca color naranja, logo legall", "modelo": "Tactica", "talla": "XXXL", "codigo": "", "cantidad": 1, "precio": 70.0, "total": 70.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 20, "itemRef": 20, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Gorros color negro, logo positiva naranja", "modelo": "Baseball", "talla": "U", "codigo": "", "cantidad": 14, "precio": 20.0, "total": 280.0, "proveedor": "", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 21, "itemRef": 21, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Morral color negro, logo legall", "modelo": "Tactico", "talla": "U", "codigo": "", "cantidad": 24, "precio": 20.0, "total": 480.0, "proveedor": "", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 22, "itemRef": 22, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Chaleco color fosforecente de auxilio, logo salutia", "modelo": "Tactico", "talla": "U", "codigo": "", "cantidad": 1, "precio": 40.0, "total": 40.0, "proveedor": "", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 23, "itemRef": 23, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Overol color azul", "modelo": "Mecanico", "talla": "L", "codigo": "", "cantidad": 1, "precio": 50.0, "total": 50.0, "proveedor": "", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 24, "itemRef": 24, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Overol color azul", "modelo": "Mecanico", "talla": "XXXL", "codigo": "", "cantidad": 3, "precio": 50.0, "total": 150.0, "proveedor": "", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 25, "itemRef": 25, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Chaleco color negro de auxilio, logo legall", "modelo": "Tactico", "talla": "M", "codigo": "", "cantidad": 1, "precio": 40.0, "total": 40.0, "proveedor": "", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 26, "itemRef": 26, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Chaleco color negro de auxilio, logo legall", "modelo": "Tactico", "talla": "XL", "codigo": "", "cantidad": 2, "precio": 40.0, "total": 80.0, "proveedor": "", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 27, "itemRef": 27, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Chaleco color negro de auxilio, logo legall", "modelo": "Tactico", "talla": "L", "codigo": "", "cantidad": 1, "precio": 40.0, "total": 40.0, "proveedor": "", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 28, "itemRef": 28, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Chaleco color naranja de auxilio", "modelo": "Tactico", "talla": "L", "codigo": "", "cantidad": 1, "precio": 20.0, "total": 20.0, "proveedor": "", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "USADO", "obs": "stock relevado", "evidencias": []}, {"id": 29, "itemRef": 29, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Pantalon color negro, sin cintas reflectivas", "modelo": "Tactico", "talla": "30", "codigo": "", "cantidad": 2, "precio": 30.0, "total": 60.0, "proveedor": "", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "DAÑADO", "obs": "stock relevado", "evidencias": []}, {"id": 30, "itemRef": 30, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Chaleco color negro, logo positiva", "modelo": "Tactico", "talla": "L", "codigo": "", "cantidad": 2, "precio": 40.0, "total": 80.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "USADO", "obs": "stock relevado", "evidencias": []}, {"id": 31, "itemRef": 31, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Chaleco color negro, logo positiva", "modelo": "Tactico", "talla": "M", "codigo": "", "cantidad": 2, "precio": 40.0, "total": 80.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "USADO", "obs": "stock relevado", "evidencias": []}, {"id": 32, "itemRef": 32, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Polo color naranja, logo positiva", "modelo": "Pique, manga larga", "talla": "M", "codigo": "", "cantidad": 1, "precio": 30.0, "total": 30.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "USADO", "obs": "stock relevado", "evidencias": []}, {"id": 33, "itemRef": 33, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Polo color plomo, logo legall", "modelo": "Pique, manga larga", "talla": "M", "codigo": "", "cantidad": 5, "precio": 30.0, "total": 150.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "USADO", "obs": "stock relevado", "evidencias": []}, {"id": 34, "itemRef": 34, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Polo color plomo, logo legall", "modelo": "Pique, manga larga", "talla": "L", "codigo": "", "cantidad": 1, "precio": 30.0, "total": 30.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "USADO", "obs": "stock relevado", "evidencias": []}, {"id": 35, "itemRef": 35, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Polo color plomo, logo legall", "modelo": "Pique, manga larga", "talla": "XL", "codigo": "", "cantidad": 2, "precio": 30.0, "total": 60.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "DAÑADO", "obs": "stock relevado", "evidencias": []}, {"id": 36, "itemRef": 36, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Polo color plomo, logo legall", "modelo": "Pique, manga larga", "talla": "M", "codigo": "", "cantidad": 1, "precio": 30.0, "total": 30.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "DAÑADO", "obs": "stock relevado", "evidencias": []}, {"id": 37, "itemRef": 37, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Casaca color naranja, logo positiva", "modelo": "Tactica", "talla": "M", "codigo": "", "cantidad": 1, "precio": 40.0, "total": 40.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "USADO", "obs": "stock relevado", "evidencias": []}, {"id": 38, "itemRef": 38, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Chaleco color naranja de auxilio", "modelo": "Tactica", "talla": "XL", "codigo": "", "cantidad": 2, "precio": 30.0, "total": 60.0, "proveedor": "", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "USADO", "obs": "stock relevado", "evidencias": []}, {"id": 39, "itemRef": 39, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Pantalon color negro, con cintas reflectivas", "modelo": "Cargo tactico", "talla": "32", "codigo": "", "cantidad": 3, "precio": 30.0, "total": 90.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "USADO", "obs": "stock relevado", "evidencias": []}, {"id": 40, "itemRef": 40, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "EPP / SEGURIDAD", "producto": "Casco color negro, Abatible", "modelo": "HOKEN", "talla": "XL", "codigo": "", "cantidad": 2, "precio": 210.0, "total": 420.0, "proveedor": "", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 41, "itemRef": 41, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Pantalon color negro, con cintas reflectivas", "modelo": "Cargo tactico", "talla": "36", "codigo": "", "cantidad": 1, "precio": 50.0, "total": 50.0, "proveedor": "Confecciones Dios mi salvador", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "NUEVO", "obs": "stock relevado", "evidencias": []}, {"id": 42, "itemRef": 42, "fecha": "31/12/2025", "tipo": "ENTRADA", "orden": "ENT-001", "categoria": "UNIFORMES", "producto": "Casaca color naranja, logo legall", "modelo": "Tactica", "talla": "L", "codigo": "", "cantidad": 2, "precio": 50.0, "total": 100.0, "proveedor": "", "persona": "RICARDO DAMIAN ROJAS", "area": "Almacen - Logistica", "estado": "USADO", "obs": "stock relevado", "evidencias": []}],
  nextId: 43,
  minimos: {},
  catalogos: { proveedores: [], areas: [], productos: [] },
  asesores: [{"id": 1, "nombres": "CRISTIAN DAVID", "apellidos": "ABANTO HUAMÁN", "dni": "72653834", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "CAJAMARCA", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 2, "nombres": "KENET BROLIN", "apellidos": "ABARCA BERRIOS", "dni": "62483832", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "CUSCO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 3, "nombres": "BRUNO SEBASTIAN", "apellidos": "ALARCON FERNANDEZ", "dni": "71426205", "empresa": "PERU TECNICOS", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 4, "nombres": "MARCELO ALEJANDRO", "apellidos": "ARAYA CARRILLO", "dni": "76685170", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "TRUJILLO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 5, "nombres": "ALEXZAR HUMBERTO", "apellidos": "BALCAZAR YNFANTE", "dni": "3117195", "empresa": "LEGALL", "area": "PROVINCIA", "provincia": "PIURA", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 6, "nombres": "ADRIAN ENRIQUE", "apellidos": "BENAVIDES PINTO", "dni": "73080792", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "AREQUIPA", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 7, "nombres": "NILTON", "apellidos": "BONIFAZ CORDOVA", "dni": "45701854", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "CAÑETE", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 8, "nombres": "DANIEL FLORENCIO", "apellidos": "CAMONES GRANADOS", "dni": "43927076", "empresa": "LEGALL", "area": "PROVINCIA", "provincia": "HUARAZ", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 9, "nombres": "CARLOS ALBERTO", "apellidos": "CASAS CUSTODIO", "dni": "74060496", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "CHICLAYO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 10, "nombres": "JUAN JAVIER", "apellidos": "CRUZ VILLANUEVA", "dni": "73033959", "empresa": "LEGALL", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 11, "nombres": "CRISTIAN ADRIANO ANDRES", "apellidos": "DE LOS SANTOS SILVA", "dni": "47510690", "empresa": "PERU TECNICOS", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 12, "nombres": "ARTURO IVAN", "apellidos": "DELGADO ALEJOS", "dni": "40873100", "empresa": "LEGALL", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 13, "nombres": "MANUEL ALEJANDRO", "apellidos": "DIAZ RISCO", "dni": "16678028", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "CHICLAYO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 14, "nombres": "JAIME DANIEL", "apellidos": "DONAYRE CALLUPE", "dni": "75663493", "empresa": "LEGALL", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 15, "nombres": "ELMER RAUL", "apellidos": "EGOCHEAGA MANRIQUE", "dni": "7259013", "empresa": "LEGALL", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 16, "nombres": "EDGAR ENRIQUE", "apellidos": "ELIAS NAVARRO", "dni": "42779709", "empresa": "PERU TECNICOS", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 17, "nombres": "DANNY ROBERTO", "apellidos": "GARCIA LAURA", "dni": "42061683", "empresa": "LEGALL", "area": "PROVINCIA", "provincia": "ICA", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 18, "nombres": "LUIS ANDERSON", "apellidos": "GARCIA BELLILLE", "dni": "72555529", "empresa": "PERU TECNICOS", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 19, "nombres": "MARGIORIE YAHAIRA", "apellidos": "GOMEZ DIAZ", "dni": "76378952", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "HUANUCO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 20, "nombres": "DANTE JAVIER", "apellidos": "HERAS AYARZA", "dni": "71984938", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "PIURA", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 21, "nombres": "STEFANO ANDRE", "apellidos": "HERRERA ALVAREZ", "dni": "71328889", "empresa": "LEGALL", "area": "PROVINCIA", "provincia": "AREQUIPA", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 22, "nombres": "JORGE EDUARDO", "apellidos": "IBARRA ZEGARRA", "dni": "10764644", "empresa": "PERU TECNICOS", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 23, "nombres": "MANUEL LEONCIO", "apellidos": "INOSTROZA MALPARTIDA", "dni": "47923012", "empresa": "PERU TECNICOS", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 24, "nombres": "JOHN ALEXANDER", "apellidos": "ITURRI RAMOS", "dni": "44339020", "empresa": "PERU TECNICOS", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 25, "nombres": "MARTIN ERNESTO", "apellidos": "LEON DIAZ", "dni": "72269228", "empresa": "LEGALL", "area": "PROVINCIA", "provincia": "PIURA", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 26, "nombres": "ARMANDO", "apellidos": "MARTINEZ ZELADA", "dni": "46725070", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "CHIMBOTE", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 27, "nombres": "ADOLFO EDUARDO", "apellidos": "MENDEZ BENITES", "dni": "6175393", "empresa": "LEGALL", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 28, "nombres": "VICTOR HUGO", "apellidos": "MENDIOLA VALERIO", "dni": "8157041", "empresa": "PERU TECNICOS", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 29, "nombres": "KARL ERICK", "apellidos": "MORY AYON", "dni": "41051628", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "PIURA", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 30, "nombres": "LUIS FERNANDO", "apellidos": "PACHECO NUÑEZ", "dni": "29329669", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "AREQUIPA", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 31, "nombres": "EDSON RIVELINHO", "apellidos": "PANTA CESPEDES", "dni": "72038359", "empresa": "LEGALL", "area": "PROVINCIA", "provincia": "PIURA", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 32, "nombres": "AMED", "apellidos": "PEREA MIRANDA", "dni": "9915006", "empresa": "PERU TECNICOS", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 33, "nombres": "JESUS AURELIO", "apellidos": "PORTA PEREZ", "dni": "43463448", "empresa": "LEGALL", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 34, "nombres": "LUIS ORLANDO", "apellidos": "QUENEMA TORRES", "dni": "41056099", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "CHICLAYO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 35, "nombres": "ALFREDO ROGER", "apellidos": "QUEVEDO DEL MAESTRO", "dni": "6667571", "empresa": "LEGALL", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 36, "nombres": "CHRISTIAN JESUS", "apellidos": "QUEZADA CARDENAS", "dni": "62137625", "empresa": "PERU TECNICOS", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 37, "nombres": "MARCELO JESUS", "apellidos": "RESTAURE JONDA", "dni": "73200008", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "HUANCAYO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 38, "nombres": "RICHARD ALEXANDER", "apellidos": "RISCO HUAYANCA", "dni": "21520542", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "ICA", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 39, "nombres": "OMAR EMERSON", "apellidos": "ROBLES CHAVEZ", "dni": "10708991", "empresa": "LEGALL", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 40, "nombres": "OMAR MIROSLAVO", "apellidos": "ROBLES CORDOVA", "dni": "20074412", "empresa": "LEGALL", "area": "PROVINCIA", "provincia": "HUANCAYO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 41, "nombres": "WILFREDO JEYSSON", "apellidos": "RODRIGUEZ PONCIANO", "dni": "70372925", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "TRUJILLO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 42, "nombres": "RODRIGO HERNAN", "apellidos": "SALAS HUAMAN", "dni": "72463100", "empresa": "LEGALL", "area": "PROVINCIA", "provincia": "AREQUIPA", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 43, "nombres": "JEFFERSON JOAQUIN", "apellidos": "SARMIENTO SIFUENTES", "dni": "43523642", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "CHIMBOTE", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 44, "nombres": "JUAN ANTONIO", "apellidos": "SCHMIEL ORTIZ", "dni": "18218045", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "TRUJILLO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 45, "nombres": "MARIA YNDIRA", "apellidos": "SISNIEGAS MORY", "dni": "18143280", "empresa": "LEGALL", "area": "PROVINCIA", "provincia": "TRUJILLO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 46, "nombres": "KENNY JOEL", "apellidos": "SOTO CARRILLO", "dni": "45939116", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "TRUJILLO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 47, "nombres": "DEIVI ANTONIO", "apellidos": "SOTO CARRILLO", "dni": "70161483", "empresa": "PERU TECNICOS", "area": "PROVINCIA", "provincia": "TRUJILLO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 48, "nombres": "FERNANDO", "apellidos": "TORO VILLALOBOS", "dni": "43730318", "empresa": "LEGALL", "area": "PROVINCIA", "provincia": "CHICLAYO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 49, "nombres": "FELIPE VICENTE", "apellidos": "VELASQUEZ NEYRA", "dni": "80236301", "empresa": "PERU TECNICOS", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 50, "nombres": "WILLIAMS ANTONIO", "apellidos": "VERTIZ CARRILLO", "dni": "42106464", "empresa": "LEGALL", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}, {"id": 51, "nombres": "GEISEL ALI", "apellidos": "VILLANUEVA ARRESTEGUI", "dni": "42293222", "empresa": "LEGALL", "area": "PROVINCIA", "provincia": "TRUJILLO", "movil": "", "jefe": "ISAAC MEDRANO"}, {"id": 52, "nombres": "ALEXANDER", "apellidos": "VILLCAPAZA LOBATON", "dni": "10131841", "empresa": "LEGALL", "area": "LIMA", "provincia": "LIMA", "movil": "", "jefe": "SAMUEL MORON"}],
  usuarios: [{ usuario: 'admin', pass: 'logistica2025', nombre: 'Administrador', rol: 'admin' }],
  catalogoPrecios: []
});

let DB = DB_DEF();

// ═══════════════════════════════════════════════
// API CLIENT — Conectado a SQL Server
// ═══════════════════════════════════════════════
const API = '/api';

async function apiFetch(url, opts={}) {
  try {
    const res = await fetch(API + url, {
      headers: { 'Content-Type': 'application/json' },
      ...opts
    });
    if (!res.ok) { const e = await res.json(); throw new Error(e.error || res.statusText); }
    return await res.json();
  } catch(e) {
    toast('\u274C Error de red: ' + e.message, 'err');
    throw e;
  }
}

async function cargarDB() {
  try {
    toast('\u23F3 Cargando datos...', 'info');
    const [movs, asesores, usuarios, cats, precios, minimos] = await Promise.all([
      apiFetch('/movimientos'),
      apiFetch('/asesores'),
      apiFetch('/usuarios'),
      apiFetch('/catalogos'),
      apiFetch('/catalogos/precios'),
      apiFetch('/catalogos/minimos')
    ]);
    DB.movimientos    = movs.map(m => ({ ...m, evidencias: m.evidencias || [] }));
    DB.asesores       = asesores;
    DB.usuarios       = usuarios.map(u => ({ ...u, pass: u.pass || '' }));
    DB.catalogos      = cats;
    DB.catalogoPrecios= precios;
    DB.minimos        = minimos;
    DB.nextId         = (Math.max(0, ...DB.movimientos.map(m=>m.id||0)) + 1);
    syncDatalists(); poblarMeses(); poblarTipos(); renderTabla(); renderAlertasStock();
    toast('\u2705 Datos cargados desde SQL Server');
  } catch(e) {
    console.error('Error cargando DB:', e);
  }
}

function guardarDB() { /* No-op: datos se guardan via API REST */ }

// ═══════════════════════════════════════════════
// ASESORES PRECARGADOS
// ═══════════════════════════════════════════════
const ASESORES_BASE = [{"id":0,"nombres":"RICARDO DAMIAN","apellidos":"ROJAS","dni":"","empresa":"LOGISTICA","jefe":"","area":"ALMACEN LOGISTICA","provincia":"LIMA","movil":""},{"id":1,"nombres":"CRISTIAN DAVID","apellidos":"ABANTO HUAMÁN","dni":"72653834","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"CAJAMARCA","movil":""},{"id":2,"nombres":"KENET BROLIN","apellidos":"ABARCA BERRIOS","dni":"62483832","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"CUSCO","movil":""},{"id":3,"nombres":"BRUNO SEBASTIAN","apellidos":"ALARCON FERNANDEZ","dni":"71426205","empresa":"PERU TECNICOS","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":4,"nombres":"MARCELO ALEJANDRO","apellidos":"ARAYA CARRILLO","dni":"76685170","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"TRUJILLO","movil":""},{"id":5,"nombres":"ALEXZAR HUMBERTO","apellidos":"BALCAZAR YNFANTE","dni":"3117195","empresa":"LEGALL","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"PIURA","movil":""},{"id":6,"nombres":"ADRIAN ENRIQUE","apellidos":"BENAVIDES PINTO","dni":"73080792","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"AREQUIPA","movil":""},{"id":7,"nombres":"NILTON","apellidos":"BONIFAZ CORDOVA","dni":"45701854","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"CAÑETE","movil":""},{"id":8,"nombres":"DANIEL FLORENCIO","apellidos":"CAMONES GRANADOS","dni":"43927076","empresa":"LEGALL","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"HUARAZ","movil":""},{"id":9,"nombres":"CARLOS ALBERTO","apellidos":"CASAS CUSTODIO","dni":"74060496","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"CHICLAYO","movil":""},{"id":10,"nombres":"JUAN JAVIER","apellidos":"CRUZ VILLANUEVA","dni":"73033959","empresa":"LEGALL","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":11,"nombres":"CRISTIAN ADRIANO ANDRES","apellidos":"DE LOS SANTOS SILVA","dni":"47510690","empresa":"PERU TECNICOS","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":12,"nombres":"ARTURO IVAN","apellidos":"DELGADO ALEJOS","dni":"40873100","empresa":"LEGALL","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":13,"nombres":"MANUEL ALEJANDRO","apellidos":"DIAZ RISCO","dni":"16678028","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"CHICLAYO","movil":""},{"id":14,"nombres":"JAIME DANIEL","apellidos":"DONAYRE CALLUPE","dni":"75663493","empresa":"LEGALL","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":15,"nombres":"ELMER RAUL","apellidos":"EGOCHEAGA MANRIQUE","dni":"7259013","empresa":"LEGALL","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":16,"nombres":"EDGAR ENRIQUE","apellidos":"ELIAS NAVARRO","dni":"42779709","empresa":"PERU TECNICOS","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":17,"nombres":"DANNY ROBERTO","apellidos":"GARCIA LAURA","dni":"42061683","empresa":"LEGALL","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"ICA","movil":""},{"id":18,"nombres":"LUIS ANDERSON","apellidos":"GARCIA BELLILLE","dni":"72555529","empresa":"PERU TECNICOS","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":19,"nombres":"MARGIORIE YAHAIRA","apellidos":"GOMEZ DIAZ","dni":"76378952","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"HUANUCO","movil":""},{"id":20,"nombres":"DANTE JAVIER","apellidos":"HERAS AYARZA","dni":"71984938","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"PIURA","movil":""},{"id":21,"nombres":"STEFANO ANDRE","apellidos":"HERRERA ALVAREZ","dni":"71328889","empresa":"LEGALL","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"AREQUIPA","movil":""},{"id":22,"nombres":"JORGE EDUARDO","apellidos":"IBARRA ZEGARRA","dni":"10764644","empresa":"PERU TECNICOS","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":23,"nombres":"MANUEL LEONCIO","apellidos":"INOSTROZA MALPARTIDA","dni":"47923012","empresa":"PERU TECNICOS","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":24,"nombres":"JOHN ALEXANDER","apellidos":"ITURRI RAMOS","dni":"44339020","empresa":"PERU TECNICOS","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":25,"nombres":"MARTIN ERNESTO","apellidos":"LEON DIAZ","dni":"72269228","empresa":"LEGALL","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"PIURA","movil":""},{"id":26,"nombres":"ARMANDO","apellidos":"MARTINEZ ZELADA","dni":"46725070","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"CHIMBOTE","movil":""},{"id":27,"nombres":"ADOLFO EDUARDO","apellidos":"MENDEZ BENITES","dni":"6175393","empresa":"LEGALL","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":28,"nombres":"VICTOR HUGO","apellidos":"MENDIOLA VALERIO","dni":"8157041","empresa":"PERU TECNICOS","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":29,"nombres":"KARL ERICK","apellidos":"MORY AYON","dni":"41051628","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"PIURA","movil":""},{"id":30,"nombres":"LUIS FERNANDO","apellidos":"PACHECO NUÑEZ","dni":"29329669","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"AREQUIPA","movil":""},{"id":31,"nombres":"EDSON RIVELINHO","apellidos":"PANTA CESPEDES","dni":"72038359","empresa":"LEGALL","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"PIURA","movil":""},{"id":32,"nombres":"AMED","apellidos":"PEREA MIRANDA","dni":"9915006","empresa":"PERU TECNICOS","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":33,"nombres":"JESUS AURELIO","apellidos":"PORTA PEREZ","dni":"43463448","empresa":"LEGALL","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":34,"nombres":"LUIS ORLANDO","apellidos":"QUENEMA TORRES","dni":"41056099","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"CHICLAYO","movil":""},{"id":35,"nombres":"ALFREDO ROGER","apellidos":"QUEVEDO DEL MAESTRO","dni":"6667571","empresa":"LEGALL","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":36,"nombres":"CHRISTIAN JESUS","apellidos":"QUEZADA CARDENAS","dni":"62137625","empresa":"PERU TECNICOS","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":37,"nombres":"MARCELO JESUS","apellidos":"RESTAURE JONDA","dni":"73200008","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"HUANCAYO","movil":""},{"id":38,"nombres":"RICHARD ALEXANDER","apellidos":"RISCO HUAYANCA","dni":"21520542","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"ICA","movil":""},{"id":39,"nombres":"OMAR EMERSON","apellidos":"ROBLES CHAVEZ","dni":"10708991","empresa":"LEGALL","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":40,"nombres":"OMAR MIROSLAVO","apellidos":"ROBLES CORDOVA","dni":"20074412","empresa":"LEGALL","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"HUANCAYO","movil":""},{"id":41,"nombres":"WILFREDO JEYSSON","apellidos":"RODRIGUEZ PONCIANO","dni":"70372925","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"TRUJILLO","movil":""},{"id":42,"nombres":"RODRIGO HERNAN","apellidos":"SALAS HUAMAN","dni":"72463100","empresa":"LEGALL","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"AREQUIPA","movil":""},{"id":43,"nombres":"JEFFERSON JOAQUIN","apellidos":"SARMIENTO SIFUENTES","dni":"43523642","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"CHIMBOTE","movil":""},{"id":44,"nombres":"JUAN ANTONIO","apellidos":"SCHMIEL ORTIZ","dni":"18218045","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"TRUJILLO","movil":""},{"id":45,"nombres":"MARIA YNDIRA","apellidos":"SISNIEGAS MORY","dni":"18143280","empresa":"LEGALL","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"TRUJILLO","movil":""},{"id":46,"nombres":"KENNY JOEL","apellidos":"SOTO CARRILLO","dni":"45939116","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"TRUJILLO","movil":""},{"id":47,"nombres":"DEIVI ANTONIO","apellidos":"SOTO CARRILLO","dni":"70161483","empresa":"PERU TECNICOS","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"TRUJILLO","movil":""},{"id":48,"nombres":"FERNANDO","apellidos":"TORO VILLALOBOS","dni":"43730318","empresa":"LEGALL","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"CHICLAYO","movil":""},{"id":49,"nombres":"FELIPE VICENTE","apellidos":"VELASQUEZ NEYRA","dni":"80236301","empresa":"PERU TECNICOS","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":50,"nombres":"WILLIAMS ANTONIO","apellidos":"VERTIZ CARRILLO","dni":"42106464","empresa":"LEGALL","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""},{"id":51,"nombres":"GEISEL ALI","apellidos":"VILLANUEVA ARRESTEGUI","dni":"42293222","empresa":"LEGALL","jefe":"ISAAC MEDRANO","area":"PROVINCIA","provincia":"TRUJILLO","movil":""},{"id":52,"nombres":"ALEXANDER","apellidos":"VILLCAPAZA LOBATON","dni":"10131841","empresa":"LEGALL","jefe":"SAMUEL MORON","area":"LIMA","provincia":"LIMA","movil":""}];

// ═══════════════════════════════════════════════
// LOGIN
// ═══════════════════════════════════════════════
let sesion = null;

// ─── CONTROL DE PERMISOS ────────────────────────────────
// admin    → todo
// operativo → ver + registrar órdenes + gestionar asesores (NO catálogos, NO usuarios, NO backup)
// consulta  → solo ver (sin modificar nada)
function puedeHacer(accion) {
  const rol = sesion?.rol || 'consulta';
  const permisos = {
    admin:     ['ver','registrar','asesores','catalogos','usuarios','backup','limpiar'],
    operativo: ['ver','registrar','asesores'],
    consulta:  ['ver']
  };
  return (permisos[rol] || permisos['consulta']).includes(accion);
}

function verificarPermiso(accion, mensaje) {
  if (!puedeHacer(accion)) {
    toast(mensaje || '🔒 Sin permisos para esta acción', 'err');
    return false;
  }
  return true;
}

function aplicarPermisosPorRol() {
  const rol = sesion?.rol || 'consulta';

  // Elementos que solo ve admin
  const soloAdmin = ['btn-gestionar','btn-limpiar-dup'];
  soloAdmin.forEach(id => {
    const el = $(id);
    if (el) el.style.display = rol === 'admin' ? '' : 'none';
  });

  // Pestañas visibles según rol
  // consulta  → solo Movimientos, Stock, Dashboard
  // operativo → + Asesores
  // admin     → todo
  const tabPermisos = {
    movimientos: ['consulta','operativo','admin'],
    stock:       ['consulta','operativo','admin'],
    dashboard:   ['consulta','operativo','admin'],
    asesores:    ['operativo','admin'],
    catalogos:   ['admin'],
    productos:   ['admin'],
  };
  document.querySelectorAll('.tab').forEach(tab => {
    const m = tab.getAttribute('onclick')?.match(/tab\(this,'(\w+)'\)/);
    if (!m) return;
    const seccion = m[1];
    const permitido = (tabPermisos[seccion] || ['admin']).includes(rol);
    tab.style.display = permitido ? '' : 'none';
  });

  // Botones solo admin: Backup, Restaurar, Reset datos, Plantilla importar
  document.querySelectorAll('button').forEach(btn => {
    const txt = btn.textContent.trim();
    const soloAdmin = txt.includes('Backup') || txt.includes('Restaurar') ||
                      txt.includes('Reset datos') || txt.includes('📥 Plantilla');
    if (soloAdmin) btn.style.display = rol === 'admin' ? '' : 'none';
  });

  // Formulario de nueva orden — ocultar si es consulta
  const formCard = document.getElementById('form-card');
  if (formCard) formCard.style.display = puedeHacer('registrar') ? '' : 'none';

  // Botones de guardar/agregar asesor — ocultar si es consulta
  const btnGuardarAsesor = document.querySelector('button[onclick="guardarAsesor()"]');
  const btnImportarAsesores = document.querySelector('button[onclick*="imp-asesores"]');
  if (btnGuardarAsesor) btnGuardarAsesor.style.display = puedeHacer('asesores') ? '' : 'none';
  if (btnImportarAsesores) btnImportarAsesores.style.display = puedeHacer('asesores') ? '' : 'none';
}


async function doLogin() {
  const u = $('l-user').value.trim();
  const p = $('l-pass').value;
  if (!u || !p) { $('l-err').textContent = 'Ingresa usuario y contraseña'; return; }
  try {
    const found = await apiFetch('/usuarios/login', { method:'POST', body: JSON.stringify({ usuario:u, pass:p }) });
    
    sesion = found;
    localStorage.setItem('sesion_activa', JSON.stringify(found));
    aplicarPermisosPorRol();
    $('user-label').textContent  = found.nombre || found.usuario;
    $('panel-info').textContent  = (found.nombre||found.usuario) + ' · ' + found.rol.toUpperCase();
    $('btn-gestionar').style.display = found.rol === 'admin' ? '' : 'none';
    $('login-screen').style.display = 'none';
    $('app').style.display = '';
    cargarTema();
    cargarDB();
    toast('👋 Bienvenido, ' + (found.nombre||found.usuario));
  } catch(e) {
    $('l-err').textContent = e.message || '❌ Error al iniciar sesión';
  }
}


// ─── RECUPERACIÓN DE CONTRASEÑA ──────────────────────────
function mostrarRecuperacion() {
  $('panel-recuperacion').style.display = '';
  document.querySelector('.lf').style.display = 'none';
}
function ocultarRecuperacion() {
  $('panel-recuperacion').style.display = 'none';
  document.querySelector('.lf').style.display = '';
  $('recup-msg').textContent = '';
  if ($('recup-email')) $('recup-email').value = '';
}
async function solicitarReset() {
  const email = $('recup-email').value.trim();
  const msg   = $('recup-msg');
  if (!email) { msg.style.color='#f85149'; msg.textContent='Ingresa tu correo'; return; }
  msg.style.color='#8b949e'; msg.textContent='Enviando...';
  try {
    const r = await fetch('/api/usuarios/solicitar-reset', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ email })
    });
    const d = await r.json();
    if (d.ok) {
      msg.style.color='#3fb950';
      msg.textContent='✅ Revisa tu correo — el link expira en 1 hora';
    } else {
      msg.style.color='#f85149';
      msg.textContent = d.error || 'No se encontró ese correo';
    }
  } catch { msg.style.color='#f85149'; msg.textContent='Error de conexión'; }
}

async function editarEmailUsuario(id, usuario) {
  const email = prompt(`Ingresa el correo para "${usuario}":`);
  if (!email) return;
  try {
    await apiFetch(`/usuarios/${id}/email`, { method:'PUT', body: JSON.stringify({ email }) });
    await cargarDB();
    renderUsersList();
    toast(`✅ Email actualizado para ${usuario}`);
  } catch(e) { toast('Error: ' + e.message, 'err'); }
}

function doLogout() {
  if (!confirm('¿Cerrar sesión?')) return;
  sesion = null;
  localStorage.removeItem('sesion_activa');
  DB = { movimientos:[], asesores:[], usuarios:[], catalogos:{proveedores:[],areas:[],productos:[]}, catalogoPrecios:[], minimos:{}, nextId:1 };
  $('l-user').value = ''; $('l-pass').value = ''; $('l-err').textContent = '';
  $('login-screen').style.display = ''; $('app').style.display = 'none';
  $('user-panel').classList.remove('open');
}

// Panel usuario
function togglePanel() {
  const panel = $('user-panel');
  panel.classList.toggle('open');
  if (panel.classList.contains('open')) {
    setTimeout(() => document.addEventListener('click', function cl(e) {
      if (!panel.contains(e.target) && e.target !== $('user-label').parentElement) panel.classList.remove('open');
      document.removeEventListener('click', cl);
    }), 100);
  }
}

// Usuarios
function abrirUsuarios() {
  $('user-panel').classList.remove('open');
  renderUsersList();
  $('modal-users').classList.add('open');
}
async function renderUsersList() {
  $('users-list').innerHTML = DB.usuarios.map((u, i) => `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:var(--bg3);border-radius:6px;margin-bottom:6px;font-size:12px">
      <div>👤 <strong>${u.usuario}</strong> <span style="color:var(--text2)">${u.nombre||''}</span>
        <span class="badge" style="margin-left:6px;background:var(--bg2);color:var(--accent2)">${u.rol}</span>
        ${u.email ? `<span style="font-size:10px;color:var(--text2);margin-left:6px">📧 ${u.email}</span>` : `<span style="font-size:10px;color:#555;margin-left:6px;cursor:pointer" onclick="editarEmailUsuario(${u.id||i},'${u.usuario}')">+ agregar email</span>`}
        </div>
      ${u.usuario!=='admin' ? `<button onclick="delUsuario(${i})" style="background:none;border:none;color:var(--red);cursor:pointer">✕</button>` : ''}
    </div>`).join('');
}
async function agregarUsuario() {
  const usuario = $('nu-user').value.trim();
  const pass    = $('nu-pass').value.trim();
  const nombre  = $('nu-nombre').value.trim();
  const rol     = $('nu-rol').value;
  if (!usuario || !pass) { toast('Completa usuario y contraseña', 'err'); return; }
  if (DB.usuarios.find(u => u.usuario.toLowerCase() === usuario.toLowerCase())) { toast('Usuario ya existe', 'err'); return; }
  await apiFetch('/usuarios', { method:'POST', body: JSON.stringify({ usuario, pass, nombre: nombre||usuario, rol }) });
  DB.usuarios.push({ usuario, pass, nombre: nombre||usuario, rol });
  renderUsersList();
  $('nu-user').value = ''; $('nu-pass').value = ''; $('nu-nombre').value = '';
  toast('✅ Usuario creado');
}
async function delUsuario(i) {
  if (!confirm('¿Eliminar usuario?')) return;
  const u = DB.usuarios[i];
  if (u && u.id) await apiFetch('/usuarios/' + u.id, { method:'DELETE' });
  DB.usuarios.splice(i, 1);
  renderUsersList();
}

// ═══════════════════════════════════════════════
// TEMAS
// ═══════════════════════════════════════════════
function setTema(t) {
  document.body.className = t === 'oscuro' ? '' : t;
  localStorage.setItem('inv_tema', t);
  document.querySelectorAll('.tema-row').forEach(r => r.classList.remove('on'));
  const btn = $('t-' + t); if (btn) btn.classList.add('on');
}
function cargarTema() {
  setTema(localStorage.getItem('inv_tema') || 'oscuro');
}

// ═══════════════════════════════════════════════
// CALENDARIO
// ═══════════════════════════════════════════════
const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let calTarget = null, calY = new Date().getFullYear(), calM = new Date().getMonth();

function abrirCal(input) {
  calTarget = input;
  const rect = input.getBoundingClientRect();
  const box = $('cal-box');
  const boxW = 252, boxH = 295;
  const margin = 6;
  // Intentar abajo primero, si no cabe ir arriba
  let top = (rect.bottom + margin + boxH <= window.innerHeight)
    ? rect.bottom + margin
    : rect.top - boxH - margin;
  // Alinear a la izquierda del input, ajustar si se sale por la derecha
  let left = rect.left;
  if (left + boxW > window.innerWidth - margin) left = window.innerWidth - boxW - margin;
  if (left < margin) left = margin;
  // Nunca salirse por arriba
  if (top < margin) top = margin;
  box.style.top  = top  + 'px';
  box.style.left = left + 'px';
  renderCal();
  $('cal-overlay').classList.add('open');
}
function cerrarCal(e) { if (e.target === $('cal-overlay')) $('cal-overlay').classList.remove('open'); }
function calNav(d) { calM += d; if (calM > 11) { calM = 0; calY++; } if (calM < 0) { calM = 11; calY--; } renderCal(); }
function calHoy() { const h = new Date(); selDia(h.getDate(), h.getMonth(), h.getFullYear()); }
function renderCal() {
  $('cal-label').textContent = MESES[calM] + '  ' + calY;
  const grid = $('cal-grid');
  grid.innerHTML = '';
  const dias = ['D','L','M','X','J','V','S'];
  dias.forEach(d => {
    const h = document.createElement('div');
    h.className = 'cal-day-hdr';
    h.textContent = d;
    grid.appendChild(h);
  });
  const hoy = new Date();
  const sel = calTarget ? calTarget.value : '';
  const inicio = new Date(calY, calM, 1).getDay();
  const total  = new Date(calY, calM + 1, 0).getDate();
  for (let i = 0; i < inicio; i++) {
    const e = document.createElement('div');
    e.className = 'cal-day empty';
    grid.appendChild(e);
  }
  for (let d = 1; d <= total; d++) {
    const ds = String(d).padStart(2,'0'), ms = String(calM+1).padStart(2,'0');
    const fecha = `${ds}/${ms}/${calY}`;
    const el = document.createElement('div');
    el.className = 'cal-day';
    el.textContent = d;
    if (d === hoy.getDate() && calM === hoy.getMonth() && calY === hoy.getFullYear())
      el.classList.add('today');
    if (fecha === sel) el.classList.add('sel');
    el.onclick = () => selDia(d, calM, calY);
    grid.appendChild(el);
  }
}
function selDia(d, m, y) {
  const fecha = String(d).padStart(2,'0') + '/' + String(m+1).padStart(2,'0') + '/' + y;
  if (calTarget) { calTarget.value = fecha; calTarget.dispatchEvent(new Event('change')); }
  $('cal-overlay').classList.remove('open');
  genOrden();
}

// ═══════════════════════════════════════════════
// SYNC DATALISTS
// ═══════════════════════════════════════════════
function syncDatalists() {
  // Personas: de asesores
  const nombres = DB.asesores.map(a => a.nombres + ' ' + a.apellidos);
  const dlP = $('dl-personas');
  if (dlP) dlP.innerHTML = nombres.map(n => `<option value="${n}">`).join('');
  // Proveedores
  const dlPr = $('dl-proveedores');
  if (dlPr) dlPr.innerHTML = DB.catalogos.proveedores.map(p => `<option value="${p}">`).join('');
  // Productos
  const dlProd = $('dl-productos');
  if (dlProd) {
    const prods = [...new Set([
      ...DB.catalogos.productos,
      ...DB.movimientos.map(r => r.producto).filter(Boolean)
    ])];
    dlProd.innerHTML = prods.map(p => `<option value="${p}">`).join('');
  }
  // Modelos
  const dlMod = $('dl-modelos');
  if (dlMod) {
    const mods = [...new Set(DB.movimientos.map(r => r.modelo).filter(Boolean))];
    dlMod.innerHTML = mods.map(m => `<option value="${m}">`).join('');
  }
}

// ═══════════════════════════════════════════════
// FORMULARIO — ORDEN AUTO
// ═══════════════════════════════════════════════

// Categorías que usan IMEI/Serie y Talla no aplica
const CATS_TECNOLOGIA = ['TELÉFONO MÓVIL','MINIGRABADORAS','LAPTOPS / TABLETS'];
const CATS_CON_TALLA  = ['UNIFORMES','EPP / SEGURIDAD'];

function onCatChange() {
  const cat    = $('f-cat').value;
  const esTec  = CATS_TECNOLOGIA.includes(cat);
  const esTall = CATS_CON_TALLA.includes(cat);

  // Campo IMEI/Serie — solo habilitado para tecnología
  const fCodigo = $('f-codigo');
  fCodigo.disabled    = !esTec;
  fCodigo.style.opacity = esTec ? '1' : '.4';
  fCodigo.placeholder = esTec ? 'IMEI o número de serie' : 'Solo tecnología';
  if (!esTec) fCodigo.value = '';

  // Campo Talla — solo habilitado para uniformes/EPP
  const fTalla = $('f-talla');
  fTalla.disabled     = !esTall;
  fTalla.style.opacity = esTall ? '1' : '.4';
  if (!esTall) fTalla.value = '—';
}

function onTipoChange() {
  const tipo = $('f-tipo').value;
  $('grp-prov').style.opacity    = tipo === 'ENTRADA' ? '1' : '.4';
  $('grp-persona').style.opacity = tipo !== 'ENTRADA' ? '1' : '.4';
  
  // Auto-llenar para ENTRADA, SALIDA y DEVUELTO
  if (tipo === 'ENTRADA' || tipo === 'SALIDA' || tipo === 'DEVUELTO') {
    $('f-persona').value = 'RICARDO DAMIAN ROJAS';
    $('f-area').value = 'ALMACEN LOGISTICA';
  } else {
    // Limpiar si es otro tipo
    $('f-persona').value = '';
    $('f-area').value = '';
  }
  
  genOrden();
}

function genOrden() {
  const fecha = $('f-fecha').value;
  const tipo  = $('f-tipo').value;
  const prov  = $('f-proveedor').value.trim();
  const pers  = $('f-persona').value.trim();
  if (!fecha || !tipo) { $('f-orden').textContent = '— completa fecha y tipo —'; return; }
  const clave = tipo === 'ENTRADA' ? prov : pers;
  if (!clave) { $('f-orden').textContent = '— completa ' + (tipo==='ENTRADA'?'proveedor':'persona') + ' —'; return; }
  // Si hay carrito activo, usar su orden
  if (carrito.activo && carrito.tipo === tipo && carrito.fecha === fecha) {
    const cv = tipo==='ENTRADA' ? (carrito.proveedor||'') : (carrito.persona||'');
    if (cv.toLowerCase() === clave.toLowerCase()) { $('f-orden').textContent = carrito.orden; return; }
  }
  const pref = tipo==='ENTRADA'?'ENT':tipo==='SALIDA'?'SAL':'DEV';
  // Buscar orden existente en DB
  const ex = DB.movimientos.find(m =>
    m.fecha === fecha && m.tipo === tipo &&
    (tipo==='ENTRADA'?(m.proveedor||''):(m.persona||'')).toLowerCase() === clave.toLowerCase()
  );
  if (ex) { $('f-orden').textContent = ex.orden; return; }
  const max = DB.movimientos.filter(m => m.orden && m.orden.startsWith(pref+'-'))
    .map(m => parseInt(m.orden.split('-')[1])||0).reduce((a,b)=>Math.max(a,b), 0);
  $('f-orden').textContent = pref + '-' + String(max+1).padStart(3,'0');
}

['f-fecha','f-proveedor','f-persona'].forEach(id => {
  const el = $(id);
  if (el) { el.addEventListener('input', genOrden); el.addEventListener('change', genOrden); }
});

function onPersonaInput() {
  genOrden();
  const val = $('f-persona').value.trim();
  if (!val) { $('f-area').value = ''; return; }
  const p = DB.asesores.find(a => (a.nombres+' '+a.apellidos).toLowerCase() === val.toLowerCase())
         || DB.asesores.find(a => (a.nombres+' '+a.apellidos).toLowerCase().includes(val.toLowerCase()));
  if (p) {
    $('f-area').value = p.area === 'LIMA' ? 'Operaciones - Lima' : 'Operaciones - Provincia';
  }
}
function onProductoInput() {
  const prod = $('f-producto').value.trim();
  if (!prod) return;
  // Buscar en catálogo de precios
  const cat = DB.catalogoPrecios && DB.catalogoPrecios.find(p =>
    p.producto.toLowerCase() === prod.toLowerCase()
  );
  if (cat) {
    $('f-precio').value = cat.precio;
    if (cat.modelo && !$('f-modelo').value) $('f-modelo').value = cat.modelo;
    // Seleccionar categoría si está vacía
    const selCat = $('f-cat');
    if (selCat && !selCat.value && cat.categoria) selCat.value = cat.categoria;
  } else {
    // Fallback: buscar último precio registrado para ese producto
    const movs = DB.movimientos.filter(r => r.producto.toLowerCase() === prod.toLowerCase() && r.precio > 0);
    if (movs.length) {
      const ultimo = movs[movs.length - 1];
      $('f-precio').value = ultimo.precio;
      if (ultimo.modelo && !$('f-modelo').value) $('f-modelo').value = ultimo.modelo;
    }
  }
}


// ═══════════════════════════════════════════════
// EVIDENCIAS — FORMULARIO
// ═══════════════════════════════════════════════
let evPendientes = [];

function onEvChange(e) {
  Array.from(e.target.files).forEach(f => leerEv(f, evPendientes, 'ev-thumbs', 'ev-ph', 'ev-area'));
  e.target.value = '';
}
function onDropEv(e) {
  e.preventDefault();
  Array.from(e.dataTransfer.files).forEach(f => leerEv(f, evPendientes, 'ev-thumbs', 'ev-ph', 'ev-area'));
}
function leerEv(file, arr, thumbsId, phId, areaId, autoDescargar) {
  const reader = new FileReader();
  reader.onload = ev => {
    arr.push({ nombre: file.name, tipo: file.type, data: ev.target.result });
    renderThumbs(arr, thumbsId, phId, areaId);
    // Si hay orden activa, descargar automáticamente con nombre organizado
    if (autoDescargar !== false) {
      const orden = $('f-orden') ? $('f-orden').textContent : '';
      const persona = $('f-persona') ? $('f-persona').value.trim().replace(/\s+/g,'_') : '';
      const fecha = $('f-fecha') ? $('f-fecha').value.replace(/\//g,'-') : '';
      if (orden && !orden.startsWith('—')) {
        const ext = file.name.includes('.') ? file.name.slice(file.name.lastIndexOf('.')) : '';
        const nomBase = file.name.replace(ext,'');
        const nomDescarga = `${fecha}_${orden}_${persona}_${nomBase}${ext}`;
        const a = document.createElement('a');
        a.href = ev.target.result;
        a.download = nomDescarga;
        a.click();
      }
    }
  };
  reader.readAsDataURL(file);
}
function renderThumbs(arr, thumbsId, phId, areaId) {
  const cont = $(thumbsId);
  const ph   = $(phId);
  const area = $(areaId);
  if (!cont) return;
  if (arr.length > 0) { if (ph) ph.style.display='none'; if(area) area.classList.add('has-file'); }
  else { if(ph) ph.style.display=''; if(area) area.classList.remove('has-file'); }
  cont.innerHTML = arr.map((ev, i) =>
    ev.tipo.startsWith('image/')
      ? `<div class="ev-thumb"><img src="${ev.data}" title="${ev.nombre}" onclick="verImg('${ev.data}')"></div>`
      : `<div class="ev-thumb"><div class="pdf-icon" title="${ev.nombre}">📄</div></div>`
  ).join('');
}
function verImg(src) {
  const w = window.open('','_blank','width=900,height=700');
  w.document.write(`<body style="margin:0;background:#000"><img src="${src}" style="max-width:100%;max-height:100vh;display:block;margin:auto"></body>`);
}

// ═══════════════════════════════════════════════
// CARRITO
// ═══════════════════════════════════════════════
let carrito = { activo: false, orden:'', tipo:'', fecha:'', persona:'', proveedor:'', area:'', items:[] };

function bloquearCabecera(lock) {
  ['f-fecha','f-persona','f-proveedor'].forEach(id => {
    const el = $(id);
    if (!el) return;
    el.readOnly = lock;
    el.style.opacity = lock ? '.6' : '1';
  });
  const tipoEl = $('f-tipo');
  if (tipoEl) { tipoEl.disabled = lock; tipoEl.style.opacity = lock ? '.6' : '1'; }
}

function agregarItem() {
  if (!verificarPermiso('registrar','🔒 Sin permisos para agregar ítems')) return;
  const fecha     = $('f-fecha').value.trim();
  const tipo      = $('f-tipo').value;
  const producto  = $('f-producto').value.trim();
  const cantidad  = parseFloat($('f-cantidad').value) || 0;
  const orden     = $('f-orden').textContent;
  const proveedor = $('f-proveedor').value.trim();
  const persona   = $('f-persona').value.trim();
  const area      = $('f-area').value.trim();

  if (!fecha || !tipo) { toast('Completa Fecha y Tipo', 'err'); return; }
  if (!producto || cantidad <= 0) { toast('Completa Producto y Cantidad', 'err'); return; }
  if (orden.startsWith('—')) { toast('Completa '+(tipo==='ENTRADA'?'Proveedor':'Persona'), 'err'); return; }
  if (carrito.activo && carrito.orden !== orden) { toast('Guarda primero la orden '+carrito.orden, 'err'); return; }

  const precio = parseFloat($('f-precio').value) || 0;
  const item = {
    id_temp: Date.now() + Math.random(),
    cat: $('f-cat').value, producto,
    modelo: $('f-modelo').value.trim(),
    talla:  $('f-talla').value,
    codigo: $('f-codigo').value.trim(),
    cantidad, precio, total: cantidad * precio,
    estado: $('f-estado').value,
    obs:    $('f-obs').value.trim(),
    evidencias: [...evPendientes]
  };

  if (!carrito.activo) {
    carrito = { activo:true, orden, tipo, fecha, persona, proveedor, area, items:[] };
    $('carrito-card').style.display = '';
    $('form-titulo').textContent = 'Agregar otro ítem → ' + orden;
    bloquearCabecera(true);
  }
  carrito.items.push(item);
  limpiarItem();
  renderCarrito();
  toast('➕ Ítem agregado a ' + orden);
}

function renderCarrito() {
  $('c-orden').textContent   = carrito.orden;
  $('c-persona').textContent = (carrito.tipo==='ENTRADA' ? '🏭 '+carrito.proveedor : '👤 '+carrito.persona);
  $('c-fecha').textContent   = carrito.fecha;
  $('c-items').innerHTML = carrito.items.map((item, i) => `
    <div class="carrito-item">
      <div class="ci-info">
        <div class="ci-nom">${item.producto}${item.talla!=='—'?` <span style="font-size:10px;color:var(--accent2);margin-left:6px">Talla: ${item.talla}</span>`:''}</div>
        <div class="ci-det">${[item.cat, item.modelo, `${item.cantidad} und`, item.estado].filter(Boolean).join(' · ')}</div>
      </div>
      <div class="ci-precio">S/ ${item.total.toFixed(2)}</div>
      <button class="ci-del" onclick="quitarItem(${i})">✕</button>
    </div>`).join('');
  const total = carrito.items.reduce((s,i) => s+i.total, 0);
  $('c-total').textContent = 'S/ ' + total.toFixed(2);
}

async function quitarItem(i) {
  carrito.items.splice(i, 1);
  if (carrito.items.length === 0) { cancelarCarrito(); return; }
  renderCarrito();
}

async function guardarCarrito() {
  if (!verificarPermiso('registrar','🔒 Solo operativos y admin pueden guardar órdenes')) return;
  if (!carrito.items.length) return;
  try {
    const payload = carrito.items.map(item => ({
      fecha: carrito.fecha, tipo: carrito.tipo, orden: carrito.orden,
      categoria: item.cat, producto: item.producto,
      modelo: item.modelo, talla: item.talla, codigo: item.codigo,
      cantidad: item.cantidad, precio: item.precio, total: item.total,
      proveedor: carrito.proveedor, persona: carrito.persona, area: carrito.area,
      estado: item.estado, obs: item.obs, evidencias: item.evidencias
    }));
    await apiFetch('/movimientos', { method:'POST', body: JSON.stringify(payload) });
    const movs = await apiFetch('/movimientos');
    DB.movimientos = movs.map(m => ({ ...m, evidencias: m.evidencias||[] }));
    DB.nextId = (Math.max(0,...DB.movimientos.map(m=>m.id||0))+1);
    syncDatalists(); poblarMeses();
    const ord = carrito.orden, cant = carrito.items.length;
    cancelarCarrito();
    renderTabla();
    toast(`✅ Orden ${ord} guardada · ${cant} ítem(s)`);
  } catch(err) {
    toast(`❌ Error al guardar: ${err.message}`, 'error');
  }
}

function cancelarCarrito() {
  carrito = { activo:false, orden:'', tipo:'', fecha:'', persona:'', proveedor:'', area:'', items:[] };
  $('carrito-card').style.display = 'none';
  $('form-titulo').textContent = 'Nueva Orden';
  bloquearCabecera(false);
  limpiarFormCompleto();
}

function limpiarItem() {
  ['f-producto','f-modelo','f-codigo','f-obs'].forEach(id => { if($(id)) $(id).value=''; });
  $('f-cat').value = ''; $('f-cantidad').value = 1; $('f-precio').value = ''; onCatChange();
  $('f-estado').value = 'NUEVO'; $('f-talla').value = '—';
  $('ev-thumbs').innerHTML = ''; $('ev-ph').style.display=''; $('ev-area').classList.remove('has-file');
  evPendientes = [];
}
function limpiarFormCompleto() {
  limpiarItem();
  ['f-fecha','f-persona','f-proveedor','f-area'].forEach(id => { if($(id)) $(id).value=''; });
  if($('f-tipo')) { $('f-tipo').value=''; $('f-tipo').disabled=false; }
  $('f-orden').textContent = '— completa fecha y tipo —';
}

// ═══════════════════════════════════════════════
// TABLA MOVIMIENTOS (agrupada por orden)
// ═══════════════════════════════════════════════
function poblarMeses() {
  const meses = [...new Set(DB.movimientos.filter(r=>r.fecha).map(r=>(r.fecha&&r.fecha.length>=10?r.fecha.slice(3,10):'')))].sort().reverse();
  const sel = $('fil-mes');
  if (!sel) return;
  const cur = sel.value;
  sel.innerHTML = '<option value="">Todos los meses</option>' +
    meses.map(m => `<option${m===cur?' selected':''}>${m}</option>`).join('');
}

function renderTabla() {
  const busq  = ($('busq').value||'').toLowerCase();
  const tipo  = $('fil-tipo').value;
  const cat   = $('fil-cat').value;
  const mes   = $('fil-mes').value;

  let data = [...DB.movimientos];
  if (busq) data = data.filter(r =>
    (r.producto||'').toLowerCase().includes(busq) ||
    (r.persona||'').toLowerCase().includes(busq) ||
    (r.proveedor||'').toLowerCase().includes(busq) ||
    (r.orden||'').toLowerCase().includes(busq)
  );
  if (tipo) data = data.filter(r => r.tipo === tipo);
  if (cat)  data = data.filter(r => r.categoria === cat);
  const tipoProd = ($('fil-tipo-prod') && $('fil-tipo-prod').value) || '';
  if (tipoProd) data = data.filter(r => r.producto && r.producto.toUpperCase().startsWith(tipoProd.toUpperCase()));
  if (mes)  data = data.filter(r => r.fecha && (r.fecha&&r.fecha.length>=10?r.fecha.slice(3,10):'') === mes);

  // Agrupar por orden
  const grupos = {};
  data.forEach(r => {
    const k = r.orden || ('_'+r.id);
    if (!grupos[k]) grupos[k] = { orden:r.orden, tipo:r.tipo, fecha:r.fecha, persona:r.persona, proveedor:r.proveedor, area:r.area, items:[] };
    grupos[k].items.push(r);
  });
  const lista = Object.values(grupos).sort((a,b) => {
    const pa = (a.fecha||'').split('/').reverse().join('');
    const pb = (b.fecha||'').split('/').reverse().join('');
    return pb.localeCompare(pa);
  });

  const tbody = $('tbody-mov');
  $('conteo-mov').textContent = `${data.length} ítems · ${lista.length} órdenes`;

  if (!lista.length) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty"><div class="icon">📭</div><p>No hay registros</p></div></td></tr>`;
    return;
  }

  tbody.innerHTML = lista.map(g => {
    const total = g.items.reduce((s,r)=>s+(r.total||0),0);
    const persona = g.tipo==='ENTRADA' ? (g.proveedor||'') : (g.persona||'');
    const gid = 'g' + (g.orden||'x').replace(/\W/g,'');
    const tieneEv = g.items.some(r=>(r.evidencias||[]).length>0);

    const itemsHtml = `
      <tr id="${gid}-body" style="display:none">
        <td colspan="8" style="padding:0 0 8px 24px">
          <table style="width:100%;border-collapse:collapse;font-size:11px">
            <thead><tr style="background:var(--bg3)">
              <th style="padding:5px 8px;text-align:left;color:var(--text2);font-weight:700;text-transform:uppercase;font-size:10px">Categoría</th>
              <th style="padding:5px 8px;text-align:left;color:var(--text2);font-size:10px">Producto</th>
              <th style="padding:5px 8px;color:var(--text2);font-size:10px">Talla</th>
              <th style="padding:5px 8px;color:var(--text2);font-size:10px">Modelo/Código</th>
              <th style="padding:5px 8px;color:var(--text2);font-size:10px;text-align:right">Cant</th>
              <th style="padding:5px 8px;color:var(--text2);font-size:10px;text-align:right">Precio</th>
              <th style="padding:5px 8px;color:var(--text2);font-size:10px;text-align:right">Total</th>
              <th style="padding:5px 8px;color:var(--text2);font-size:10px">Estado</th>
              <th style="padding:5px 8px;color:var(--text2);font-size:10px">Ev.</th>
              <th></th>
            </tr></thead>
            <tbody>${g.items.map(r=>`
              <tr style="border-bottom:1px solid var(--border)">
                <td style="padding:6px 8px;color:var(--accent2)">${r.categoria||''}</td>
                <td style="padding:6px 8px;font-weight:600;white-space:normal;word-break:break-word;min-width:150px;max-width:250px;line-height:1.4">${r.producto||''}${r.modelo?' <span style="font-weight:400;color:var(--text2);font-size:11px">— '+r.modelo+'</span>':''}</td>
                <td style="padding:6px 8px;text-align:center">${r.talla&&r.talla!=='—'?r.talla:''}</td>
                <td style="padding:6px 8px;color:var(--text2);font-size:10px;font-family:'IBM Plex Mono',monospace">${[r.modelo,r.codigo].filter(Boolean).join(' · ')}</td>
                <td style="padding:6px 8px;text-align:right;font-family:'IBM Plex Mono',monospace;font-weight:700">${r.cantidad||0}</td>
                <td style="padding:6px 8px;text-align:right;color:var(--text2)">S/ ${(r.precio||0).toFixed(2)}</td>
                <td style="padding:6px 8px;text-align:right;font-family:'IBM Plex Mono',monospace;font-weight:700;color:var(--accent2)">S/ ${(r.total||0).toFixed(2)}</td>
                <td style="padding:6px 8px"><span class="badge" style="background:var(--bg3);color:var(--text2)">${r.estado||''}</span></td>
                <td style="padding:6px 8px">
                  ${puedeHacer('registrar') ? `<button class="btn" onclick="abrirEv(${r.id})" style="font-size:10px;padding:2px 7px">📎 ${(r.evidencias||[]).length}</button>` : `<span style="font-size:11px;color:var(--text2)">📎 ${(r.evidencias||[]).length}</span>`}
                </td>
                <td style="padding:6px 8px">
                  ${puedeHacer('registrar') ? `<button onclick="delItem(${r.id})" style="background:none;border:none;color:var(--red);cursor:pointer;font-size:13px">✕</button>` : ''}
                </td>
              </tr>`).join('')}
            </tbody>
          </table>
        </td>
      </tr>`;

    return `
      <tr class="grp-head row-${(g.tipo||'').toLowerCase()}" onclick="toggleGrp('${gid}')">
        <td><span class="expand" id="${gid}-icon">▶</span> <span class="mono" style="color:var(--accent2)">${g.orden||'—'}</span></td>
        <td><span class="badge b-${(g.tipo||'').toLowerCase()}">${g.tipo||''}</span></td>
        <td class="mono" style="font-size:11px;color:var(--text2)">${g.fecha||''}</td>
        <td><strong>${persona}</strong></td>
        <td style="color:var(--text2);font-size:11px">${g.area||''}</td>
        <td class="mono" style="font-weight:700;color:var(--accent2)">S/ ${total.toFixed(2)}</td>
        <td style="color:var(--text2);font-size:11px">${g.items.length} ítem(s)</td>
        <td style="white-space:nowrap">
          ${g.tipo==='SALIDA'?`<button class="btn btn-w" onclick="event.stopPropagation();imprimirCargo('${g.orden}')" style="font-size:11px;padding:3px 9px">🖨️ Cargo</button> `:''}
          ${g.tipo==='DEVUELTO'?`<button class="btn" onclick="event.stopPropagation();imprimirActaDev('${g.orden}')" style="font-size:11px;padding:3px 9px;border-color:var(--orange);color:var(--orange)">🖨️ Acta Dev.</button> `:''}
          ${puedeHacer('registrar') && g.tipo==='ENTRADA'?`<button class="btn" onclick="event.stopPropagation();abrirEvOrden('${g.orden}')" style="font-size:11px;padding:3px 9px;border-color:var(--green);color:var(--green)">📎 Adjuntar</button> `:''}
          ${puedeHacer('registrar') && g.tipo!=='SALIDA'?`<button class="btn" onclick="event.stopPropagation();editarOrden('${g.orden}')" style="font-size:11px;padding:3px 9px;border-color:#6e40c9;color:#b392f0">✏️ Editar</button> `:''}
          ${tieneEv?`<button class="btn" onclick="event.stopPropagation();abrirEv(${g.items[0].id})" style="font-size:11px;padding:3px 8px">📎</button> `:''}
          ${puedeHacer('registrar')?`<button class="btn btn-r" onclick="event.stopPropagation();delOrden('${g.orden}')" style="font-size:11px;padding:3px 8px">🗑</button>`:''}
        </td>
      </tr>
      ${itemsHtml}`;
  }).join('');
}

async function toggleGrp(gid) {
  const body = $(gid+'-body');
  const icon = $(gid+'-icon');
  if (!body) return;
  const open = body.style.display !== 'none';
  body.style.display = open ? 'none' : '';
  if (icon) icon.classList.toggle('open', !open);
}

async function delItem(id) {
  if (!verificarPermiso("registrar","🔒 Sin permisos para eliminar ítems")) return;
  if (!confirm('¿Eliminar este ítem?')) return;
  await apiFetch('/movimientos/' + id, { method:'DELETE' });
  DB.movimientos = DB.movimientos.filter(r => r.id !== id);
  renderTabla(); toast('Ítem eliminado', 'info');
}
async function delOrden(orden) {
  if (!verificarPermiso("registrar","🔒 Sin permisos para eliminar órdenes")) return;
  if (!confirm('¿Eliminar toda la orden '+orden+' y sus ítems?')) return;
  await apiFetch('/movimientos/orden/' + encodeURIComponent(orden), { method:'DELETE' });
  DB.movimientos = DB.movimientos.filter(r => r.orden !== orden);
  renderTabla(); toast('Orden eliminada', 'info');
}

// ═══════════════════════════════════════════════
// EVIDENCIAS — MODAL
// ═══════════════════════════════════════════════
let evModalId = null, evModalPendientes = [];

function abrirEv(id) {
  evModalId = id;
  evModalPendientes = [];
  const r = DB.movimientos.find(m => m.id === id);
  if (!r) return;
  $('modal-ev-titulo').textContent = `📎 Evidencias — ${r.orden||''} · ${r.producto||''}`;
  const grid = $('modal-ev-grid');
  grid.innerHTML = (r.evidencias||[]).map(ev =>
    ev.tipo && ev.tipo.startsWith('image/')
      ? `<img src="${ev.data}" style="width:80px;height:80px;object-fit:cover;border-radius:6px;cursor:pointer;border:1px solid var(--border)" onclick="verImg('${ev.data}')" title="${ev.nombre}">`
      : `<div style="width:80px;height:80px;background:var(--bg3);border:1px solid var(--border);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:30px;cursor:pointer" title="${ev.nombre}">📄</div>`
  ).join('');
  if (!r.evidencias || !r.evidencias.length) grid.innerHTML = '<div style="color:var(--text2);font-size:13px">Sin evidencias aún</div>';
  $('modal-ev').classList.add('open');
}
function cerrarModalEv() {
  $('modal-ev').classList.remove('open');
  evModalId = null; evModalPendientes = [];
}
function onModalEvChange(e) {
  Array.from(e.target.files).forEach(f => leerEv(f, evModalPendientes, null, null, null));
  e.target.value = '';
}
async function onDropEvModal(e) {
  e.preventDefault();
  Array.from(e.dataTransfer.files).forEach(f => leerEv(f, evModalPendientes, null, null, null));
}
async function guardarEvModal() {
  if (!evModalId || !evModalPendientes.length) { toast('No hay archivos nuevos', 'info'); cerrarModalEv(); return; }
  const r = DB.movimientos.find(m => m.id === evModalId);
  if (r) {
    await apiFetch('/movimientos/' + evModalId + '/evidencias', { method:'POST', body: JSON.stringify(evModalPendientes) });
    r.evidencias = [...(r.evidencias||[]), ...evModalPendientes];
  }
  toast('✅ Evidencias guardadas');
  cerrarModalEv();
}

// ═══════════════════════════════════════════════
// STOCK
// ═══════════════════════════════════════════════
async function renderStock() {
  const filCat    = $('s-cat').value;
  const filAlerta = $('s-alerta').value;

  const mapa = {};
  DB.movimientos.forEach(r => {
    const k = (r.producto||'___') + '||' + (r.categoria||'');
    if (!mapa[k]) mapa[k] = {
      producto:r.producto, categoria:r.categoria, ent:0, sal:0, dev:0,
      tallas:{},
      tnuevo:{}, tusado:{}, tdanado:{}
    };
    const t = r.talla && r.talla!=='—' ? r.talla : null;
    if (r.tipo==='ENTRADA') {
      mapa[k].ent += r.cantidad||0;
      const est = (r.estado||'NUEVO').toUpperCase();
      if (t) {
        mapa[k].tallas[t] = (mapa[k].tallas[t]||0) + (r.cantidad||0);
        if (est==='NUEVO')       mapa[k].tnuevo[t]  = (mapa[k].tnuevo[t]||0)  + (r.cantidad||0);
        else if (est==='USADO')  mapa[k].tusado[t]  = (mapa[k].tusado[t]||0)  + (r.cantidad||0);
        else                     mapa[k].tdanado[t] = (mapa[k].tdanado[t]||0) + (r.cantidad||0);
      }
    }
    if (r.tipo==='SALIDA')   { mapa[k].sal+=r.cantidad||0; if(t) mapa[k].tallas[t]=(mapa[k].tallas[t]||0)-(r.cantidad||0); }
    if (r.tipo==='DEVUELTO') { mapa[k].dev+=r.cantidad||0; if(t) mapa[k].tallas[t]=(mapa[k].tallas[t]||0)+(r.cantidad||0); }
  });

  let items = Object.entries(mapa).map(([k,v]) => ({
    ...v, key:k, stock:v.ent-v.sal+v.dev, minimo: DB.minimos[k]||0
  }));

  const filTipo = ($('s-tipo') && $('s-tipo').value) || '';
  if (filCat)  items = items.filter(i=>i.categoria===filCat);
  if (filTipo) items = items.filter(i=>i.producto && i.producto.toUpperCase().startsWith(filTipo.toUpperCase()));
  if (filAlerta==='agotado') items = items.filter(i=>i.stock<=0);
  if (filAlerta==='bajo')    items = items.filter(i=>i.stock>0&&i.minimo>0&&i.stock<=i.minimo);
  if (filAlerta==='ok')      items = items.filter(i=>i.stock>0&&(i.minimo===0||i.stock>i.minimo));

  const TORDEN = ['XS','S','M','L','XL','XXL','XXXL','U','28','30','32','34','36','38','40','42'];
  const cont = $('stock-grid');
  if (!items.length) { cont.innerHTML='<div class="empty"><div class="icon">📦</div><p>No hay datos</p></div>'; return; }

  cont.innerHTML = items.map(item => {
    const pct    = item.minimo>0 ? Math.min(100,(item.stock/(item.minimo*2))*100) : item.stock>0?60:0;
    const estado = item.stock<=0?'agotado':(item.minimo>0&&item.stock<=item.minimo)?'bajo':'ok';
    const etiq   = estado==='agotado'?'🔴 AGOTADO':estado==='bajo'?'🟡 STOCK BAJO':'🟢 OK';

    const TSORT = (a,b) => TORDEN.indexOf(a[0]) - TORDEN.indexOf(b[0]);
    const tAgotadas = Object.entries(item.tallas).filter(([,q])=>q<=0);
    const hayTallas = Object.keys(item.tallas).length > 0;

    // Tallas por estado con colores
    const tnuevo  = Object.entries(item.tnuevo  ||{}).filter(([,q])=>q>0).sort(TSORT);
    const tusado  = Object.entries(item.tusado  ||{}).filter(([,q])=>q>0).sort(TSORT);
    const tdanado = Object.entries(item.tdanado ||{}).filter(([,q])=>q>0).sort(TSORT);

    const chipNuevo  = ([t,q]) => `<span style="display:inline-flex;align-items:center;gap:3px;padding:2px 7px;border-radius:5px;font-size:10px;font-weight:700;background:#2ea04320;color:#2ea043;border:1px solid #2ea04350" title="NUEVO: ${q} uds"><strong>${t}</strong>: ${q}</span>`;
    const chipUsado  = ([t,q]) => `<span style="display:inline-flex;align-items:center;gap:3px;padding:2px 7px;border-radius:5px;font-size:10px;font-weight:700;background:#f0a50020;color:#f0a500;border:1px solid #f0a50050" title="USADO: ${q} uds"><strong>${t}</strong>: ${q}</span>`;
    const chipDanado = ([t,q]) => `<span style="display:inline-flex;align-items:center;gap:3px;padding:2px 7px;border-radius:5px;font-size:10px;font-weight:700;background:#dc262620;color:#dc2626;border:1px solid #dc262650" title="DAÑADO: ${q} uds"><strong>${t}</strong>: ${q}</span>`;
    const chipAgot   = ([t])   => `<span style="display:inline-flex;padding:2px 7px;border-radius:5px;font-size:10px;font-weight:700;background:#55555520;color:#888;border:1px solid #55555540" title="Agotado">${t}: 0</span>`;

    const tallasHtml = hayTallas ? `
      <div style="font-size:9px;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:.07em;margin:6px 0 4px">Tallas:</div>
      <div style="display:flex;flex-wrap:wrap;gap:4px">
        ${tnuevo.map(chipNuevo).join('')}
        ${tusado.map(chipUsado).join('')}
        ${tdanado.map(chipDanado).join('')}
        ${tAgotadas.map(chipAgot).join('')}
      </div>
      ${(tnuevo.length||tusado.length||tdanado.length) ? `<div style="font-size:9px;color:var(--text2);margin-top:4px">🟢 Nuevo &nbsp; 🟡 Usado &nbsp; 🔴 Dañado</div>` : ''}
    ` : '';

    const keyEsc = item.key.replace(/'/g,"\\'");
    return `
    <div class="stock-card">
      <span class="badge b-${estado}" style="position:absolute;top:12px;right:12px;font-size:9px">${etiq}</span>
      <div class="stock-cat">${item.categoria||''}</div>
      <div class="stock-nom">${item.producto||''}</div>
      <div class="stock-row">
        <div>
          <div style="font-size:11px;color:var(--text2)">📥 ${item.ent} · 📤 ${item.sal} · 🔄 ${item.dev}</div>
          ${(item.tnuevo&&Object.values(item.tnuevo||{}).reduce((s,v)=>s+v,0)) || (item.tusado&&Object.values(item.tusado||{}).reduce((s,v)=>s+v,0)) ? `
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">
            ${Object.values(item.tnuevo ||{}).reduce((s,v)=>s+v,0) ? `<span style="font-size:10px;color:#2ea043;font-weight:700">🟢 ${Object.values(item.tnuevo||{}).reduce((s,v)=>s+v,0)} nuevo</span>` : ''}
            ${Object.values(item.tusado ||{}).reduce((s,v)=>s+v,0) ? `<span style="font-size:10px;color:#f0a500;font-weight:700">🟡 ${Object.values(item.tusado||{}).reduce((s,v)=>s+v,0)} usado</span>` : ''}
            ${Object.values(item.tdanado||{}).reduce((s,v)=>s+v,0) ? `<span style="font-size:10px;color:#dc2626;font-weight:700">🔴 ${Object.values(item.tdanado||{}).reduce((s,v)=>s+v,0)} dañado</span>` : ''}
          </div>` : ''}
        </div>
        <div class="stock-num ${estado}">${item.stock}</div>
      </div>
      <div class="sbar"><div class="sbar-fill ${estado}" style="width:${pct}%"></div></div>
      ${tallasHtml}
      <div class="stock-footer">
        <span style="font-size:11px;color:var(--text2)">Mínimo:</span>
        <input type="number" min="0" value="${item.minimo}" onchange="setMin('${keyEsc}',this.value)">
      </div>
    </div>`;
  }).join('');

  // Aplicar clases de animación parpadeante a tarjetas críticas
  setTimeout(() => {
    document.querySelectorAll('.stock-card').forEach(card => {
      const badge = card.querySelector('.badge');
      if (!badge) return;
      const txt = badge.textContent || '';
      if (txt.includes('AGOTADO')) card.classList.add('alerta-agotado');
      else if (txt.includes('BAJO')) card.classList.add('alerta-bajo');
      else { card.classList.remove('alerta-agotado','alerta-bajo'); }
    });
  }, 50);
}

async function setMin(key, val) {
  DB.minimos[key] = parseInt(val)||0;
  await apiFetch('/catalogos/minimos', { method:'POST', body: JSON.stringify({ clave:key, minimo:parseInt(val)||0 }) });
}

// ═══════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════
async function renderDashboard() {
  const movs     = DB.movimientos;
  const hoy      = new Date();
  const mesK     = String(hoy.getMonth()+1).padStart(2,'0') + '/' + hoy.getFullYear();
  const fmt      = n => 'S/ '+n.toLocaleString('es-PE',{minimumFractionDigits:2,maximumFractionDigits:2});
  const fmtC     = n => n>=1000?'S/'+Math.round(n/1000)+'k':'S/'+Math.round(n);
  const MESES_N  = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  const empty    = '<div style="padding:20px;text-align:center;color:var(--text2);font-size:12px">Sin datos</div>';
  const COLS_CAT = {'UNIFORMES':'#1f6feb','EPP / SEGURIDAD':'#2ea043','TELÉFONO MÓVIL':'#f0a500','MINIGRABADORAS':'#e36209','LAPTOPS / TABLETS':'#6e40c9','ARTÍCULOS LIMPIEZA':'#0891b2','ARTÍCULOS MOTOS':'#dc2626','ÚTILES OFICINA':'#78716c'};
  const COLS_EMP = {'PERU TECNICOS':'#1f6feb','LEGALL':'#2ea043','SALUTIA':'#f0a500','Otros':'#8b949e'};
  const PAL      = ['#1f6feb','#2ea043','#f0a500','#e36209','#6e40c9','#0891b2','#dc2626','#78716c'];

  // ─── DATOS BASE ───
  const salidas   = movs.filter(r=>r.tipo==='SALIDA');
  const entradas  = movs.filter(r=>r.tipo==='ENTRADA');
  const devueltos = movs.filter(r=>r.tipo==='DEVUELTO');

  const totalSalidas  = salidas.reduce((s,r)=>s+(r.total||0),0);
  const totalEntradas = entradas.reduce((s,r)=>s+(r.total||0),0);
  const totalDevuelto = devueltos.reduce((s,r)=>s+(r.total||0),0);
  // Conteo por estado (sobre todos los movimientos)
  const cntNuevo  = movs.filter(r=>r.estado==='NUEVO').reduce((s,r)=>s+(r.cantidad||0),0);
  const cntUsado  = movs.filter(r=>r.estado==='USADO').reduce((s,r)=>s+(r.cantidad||0),0);
  const cntDanado = movs.filter(r=>r.estado==='DAÑADO').reduce((s,r)=>s+(r.cantidad||0),0);
  const udsSalidas    = salidas.reduce((s,r)=>s+(r.cantidad||0),0);
  const udsEntradas   = entradas.reduce((s,r)=>s+(r.cantidad||0),0);
  const gastoMesS     = salidas.filter(r=>r.fecha&&typeof r.fecha==='string'&&r.fecha.length>=10&&(r.fecha&&r.fecha.length>=10?r.fecha.slice(3,10):'')===mesK).reduce((s,r)=>s+(r.total||0),0);
  const entMesS       = entradas.filter(r=>r.fecha&&typeof r.fecha==='string'&&r.fecha.length>=10&&(r.fecha&&r.fecha.length>=10?r.fecha.slice(3,10):'')===mesK).reduce((s,r)=>s+(r.total||0),0);
  const ordenes       = [...new Set(movs.map(r=>r.orden).filter(Boolean))].length;

  // ─── KPIs — valores reales correctos ───
  const kpis = [
    {icon:'📤', label:'Total Salidas',              val:fmt(totalSalidas),  sub:udsSalidas+' unidades entregadas',    color:'#1f6feb'},
    {icon:'📥', label:'Total Entradas',             val:fmt(totalEntradas), sub:udsEntradas+' unidades ingresadas',   color:'#2ea043'},
    {icon:'🔄', label:'Total Devueltos',            val:fmt(totalDevuelto), sub:devueltos.reduce((s,r)=>s+(r.cantidad||0),0)+' unidades devueltas', color:'#f0a500'},
    {icon:'📅', label:'Entradas '+MESES_N[hoy.getMonth()]+' '+hoy.getFullYear(), val:fmt(entMesS), sub:'ingresado este mes', color:'#e36209'},
    {icon:'📋', label:'N° Órdenes Totales',         val:ordenes,            sub:'registradas en sistema',              color:'#6e40c9'},
    {icon:'👥', label:'Asesores Registrados',       val:DB.asesores.length, sub:'en base de datos',                   color:'#0891b2'},
    {icon:'🟢', label:'Stock NUEVO',                  val:cntNuevo,           sub:'unidades en buen estado',              color:'#2ea043'},
    {icon:'🟡', label:'Stock USADO',                  val:cntUsado,           sub:'unidades con uso previo',              color:'#f0a500'},
    {icon:'🔴', label:'Stock DAÑADO',                 val:cntDanado,          sub:'unidades dañadas',                     color:'#dc2626'},
  ];
  $('kpi-grid').innerHTML = kpis.map(k=>`
    <div style="background:var(--bg2);border:1px solid var(--border);border-left:4px solid ${k.color};border-radius:10px;padding:14px 16px">
      <div style="font-size:11px;color:var(--text2);margin-bottom:5px">${k.icon} ${k.label}</div>
      <div style="font-size:21px;font-weight:700;font-family:'IBM Plex Mono',monospace;color:${k.color}">${k.val}</div>
      <div style="font-size:10px;color:var(--text2);margin-top:3px">${k.sub}</div>
    </div>`).join('');

  // ─── HELPER: barra horizontal ───
  function barH(label, val, max, color, sufijo) {
    const pct = max>0?(val/max*100).toFixed(1):0;
    return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <div style="width:155px;font-size:11px;color:var(--text2);flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${label}">${label}</div>
      <div style="flex:1;height:14px;background:var(--bg3);border-radius:7px;overflow:hidden">
        <div style="width:${pct}%;height:100%;background:${color};border-radius:7px"></div>
      </div>
      <div style="font-size:11px;font-weight:700;color:var(--accent2);width:90px;text-align:right;flex-shrink:0">${sufijo}</div>
    </div>`;
  }

  // ─── HELPER: barras verticales ───
  function barV(datos, getColor, fmtFn, alto) {
    if (!datos.length) return empty;
    const max = Math.max(...datos.map(d=>d.v), 1);
    const H = alto||140;
    return `<div style="display:flex;align-items:flex-end;gap:5px;height:${H}px;padding:4px 4px 0;border-bottom:2px solid var(--border);border-left:2px solid var(--border);overflow-x:auto">
      ${datos.map((d,i)=>{
        const pct=(d.v/max*100).toFixed(1);
        const col=getColor(d,i);
        return `<div style="flex:1;min-width:28px;max-width:70px;display:flex;flex-direction:column;align-items:center;gap:2px">
          <div style="font-size:9px;color:${col};font-weight:700;text-align:center">${fmtFn(d.v)}</div>
          <div style="width:100%;height:${pct}%;background:${col};border-radius:3px 3px 0 0;min-height:3px"></div>
          <div style="font-size:9px;color:var(--text2);text-align:center;word-break:break-word;line-height:1.2;max-width:55px;margin-top:3px">${d.l}</div>
        </div>`;
      }).join('')}
    </div>`;
  }

  // ─── HELPER: curva SVG ───
  function curva(puntos, color, fmtFn) {
    if (!puntos.length) return empty;
    if (puntos.length === 1) {
      // Un solo punto — mostrar como barra simple con valor
      return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:30px 0;gap:8px">
        <div style="font-size:24px;font-weight:700;color:${color}">${fmtFn(puntos[0].v)}</div>
        <div style="font-size:12px;color:var(--text2)">${puntos[0].l}</div>
        <div style="font-size:11px;color:var(--text2)">Solo 1 período — agrega más datos para ver la curva</div>
      </div>`;
    }
    const W=460, H=150, PL=44, PR=16, PT=24, PB=28;
    const vals=puntos.map(p=>p.v);
    const maxV=Math.max(...vals,1), minV=0;
    const rango=maxV-minV||1;
    const W2=W-PL-PR, H2=H-PT-PB;
    const xs=puntos.map((_,i)=>PL+i*W2/(puntos.length-1));
    const ys=vals.map(v=>PT+H2-(v-minV)/rango*H2);
    let path=`M${xs[0].toFixed(1)},${ys[0].toFixed(1)}`;
    for(let i=1;i<xs.length;i++){
      const cx=(xs[i-1]+xs[i])/2;
      path+=` C${cx.toFixed(1)},${ys[i-1].toFixed(1)} ${cx.toFixed(1)},${ys[i].toFixed(1)} ${xs[i].toFixed(1)},${ys[i].toFixed(1)}`;
    }
    const area=path+` L${xs[xs.length-1].toFixed(1)},${(PT+H2).toFixed(1)} L${xs[0].toFixed(1)},${(PT+H2).toFixed(1)} Z`;
    const gid='g'+Math.random().toString(36).slice(2,7);
    return `<svg width="100%" viewBox="0 0 ${W} ${H}" style="overflow:visible;display:block">
      <defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${color}" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0.02"/>
      </linearGradient></defs>
      <path d="${area}" fill="url(#${gid})"/>
      <path d="${path}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${xs.map((x,i)=>`
        <circle cx="${x.toFixed(1)}" cy="${ys[i].toFixed(1)}" r="4" fill="${color}" stroke="var(--bg2)" stroke-width="2"/>
        <text x="${x.toFixed(1)}" y="${(ys[i]-10).toFixed(1)}" text-anchor="middle" fill="${color}" font-size="9" font-weight="700" font-family="monospace">${fmtFn(vals[i])}</text>
        <text x="${x.toFixed(1)}" y="${(PT+H2+14).toFixed(1)}" text-anchor="middle" fill="var(--text2)" font-size="9" font-family="sans-serif">${puntos[i].l}</text>
      `).join('')}
    </svg>`;
  }

  // ─── HELPER: dona SVG ───
  function dona(segs, R) {
    const r=R||50, cx=r+10, cy=r+10;
    const total=segs.reduce((s,sg)=>s+sg.v,0);
    if(!total) return '';
    let ang=-Math.PI/2, paths='';
    segs.forEach(sg=>{
      const sw=sg.v/total*2*Math.PI;
      const x1=cx+r*Math.cos(ang), y1=cy+r*Math.sin(ang);
      ang+=sw;
      const x2=cx+r*Math.cos(ang), y2=cy+r*Math.sin(ang);
      paths+=`<path d="M${cx},${cy} L${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 ${sw>Math.PI?1:0},1 ${x2.toFixed(1)},${y2.toFixed(1)} Z" fill="${sg.c}" opacity=".85"/>`;
    });
    paths+=`<circle cx="${cx}" cy="${cy}" r="${(r*.52).toFixed(0)}" fill="var(--bg2)"/>`;
    const sz=(r+10)*2;
    return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}">${paths}</svg>`;
  }

  // ─── ACUMULAR POR MES (ENTRADAS Y SALIDAS) ───
  function acumMes(lista, campo) {
    const m={};
    lista.filter(r=>r.fecha).forEach(r=>{
      const k=(r.fecha&&r.fecha.length>=10?r.fecha.slice(3,10):''); m[k]=(m[k]||0)+(r[campo]||0);
    });
    return Object.entries(m).sort((a,b)=>a[0].localeCompare(b[0])).slice(-8)
      .map(([k,v])=>{ const [mm,yy]=k.split('/'); return {l:MESES_N[parseInt(mm)-1]+"'"+yy.slice(2),v}; });
  }

  // ── Curva gasto (si no hay salidas, mostrar entradas) ──
  const pMesGasto = acumMes(salidas,'total');
  const pMesEnt   = acumMes(entradas,'total');
  const pMesEntU  = acumMes(entradas,'cantidad');

  $('chart-mes-curva').innerHTML = pMesGasto.length
    ? curva(pMesGasto,'#1f6feb',fmtC)
    : (pMesEnt.length ? `<div style="font-size:11px;color:var(--text2);padding:8px 0">📥 Mostrando Entradas (sin salidas aún)</div>`+curva(pMesEnt,'#2ea043',fmtC) : empty);

  $('chart-mes-bars').innerHTML = (pMesGasto.length
    ? barV(pMesGasto, ()=>'#1f6feb', fmtC)
    : barV(pMesEnt,   ()=>'#2ea043', fmtC));

  $('chart-ent-curva').innerHTML = pMesEntU.length ? curva(pMesEntU,'#2ea043',v=>v+' u') : empty;

  // ── Categorías (ENTRADAS + SALIDAS) ──
  const catMap={};
  // Priorizar salidas; si no hay, usar entradas
  const fuenteCat = salidas.length ? salidas : entradas;
  const labelCat  = salidas.length ? 'Salidas' : 'Entradas';
  fuenteCat.forEach(r=>{ if(r.categoria){ catMap[r.categoria]=(catMap[r.categoria]||0)+(r.total||0); }});
  const catArr=Object.entries(catMap).sort((a,b)=>b[1]-a[1]);
  const maxCat=Math.max(...catArr.map(([,v])=>v),1);
  const totalCat=catArr.reduce((s,[,v])=>s+v,0);
  const segsC=catArr.map(([c,v],i)=>({l:c,v,c:COLS_CAT[c]||PAL[i%PAL.length]}));

  $('chart-dona-cat').innerHTML = segsC.length ? `
    <div style="font-size:10px;color:var(--text2);margin-bottom:8px">Basado en ${labelCat}</div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
      ${dona(segsC,52)}
      <div style="flex:1;min-width:100px">${segsC.map(s=>`
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;font-size:11px">
          <div style="width:10px;height:10px;border-radius:2px;background:${s.c};flex-shrink:0"></div>
          <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${s.l}">${s.l}</span>
          <span style="font-weight:700;color:var(--accent2)">${totalCat>0?((s.v/totalCat)*100).toFixed(0):0}%</span>
        </div>`).join('')}
      </div>
    </div>` : empty;

  $('chart-cat').innerHTML = catArr.map(([c,v])=>barH(c,v,maxCat,COLS_CAT[c]||PAL[0],fmt(v))).join('') || empty;

  $('chart-cat-vert').innerHTML = barV(
    segsC.slice(0,8).map(s=>({l:s.l.split(' ')[0],v:s.v,c:s.c})),
    (d)=>d.c, fmtC
  );

  // ── Top productos ──
  const fuenteProd = salidas.length ? salidas : entradas;
  const prodMap={};
  fuenteProd.forEach(r=>{ if(r.producto) prodMap[r.producto]=(prodMap[r.producto]||0)+(r.cantidad||0); });
  const topProd=Object.entries(prodMap).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const maxProd=Math.max(...topProd.map(([,v])=>v),1);
  $('chart-prod').innerHTML = topProd.map(([p,v])=>barH(p,v,maxProd,'#f0a500',v+' uds')).join('') || empty;

  // ── Empresa ──
  const empMap={};
  const fuenteEmp = salidas.length ? salidas : entradas;
  fuenteEmp.filter(r=>r.persona||r.proveedor).forEach(r=>{
    const a=DB.asesores.find(x=>(x.nombres+' '+x.apellidos).toLowerCase()===(r.persona||'').toLowerCase());
    const emp=a?(a.empresa||'Sin empresa'):(r.proveedor?'Sin empresa':'Sin empresa');
    empMap[emp]=(empMap[emp]||0)+(r.total||0);
  });
  const empArr=Object.entries(empMap).sort((a,b)=>b[1]-a[1]);
  const segsE=empArr.map(([e,v])=>({l:e,v,c:COLS_EMP[e]||'#8b949e'}));
  const totalEmp=empArr.reduce((s,[,v])=>s+v,0);
  $('chart-dona-empresa').innerHTML = segsE.length ? `
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
      ${dona(segsE,40)}
      <div>${segsE.map(s=>`
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;font-size:11px">
          <div style="width:10px;height:10px;border-radius:2px;background:${s.c};flex-shrink:0"></div>
          <span>${s.l}</span>
          <span style="font-weight:700;color:var(--accent2);margin-left:4px">${totalEmp>0?((s.v/totalEmp)*100).toFixed(0):0}%</span>
        </div>`).join('')}
    </div></div>` : empty;
  $('chart-emp-vert').innerHTML = segsE.length
    ? barV(segsE.map(s=>({l:s.l,v:s.v,c:s.c})),(d)=>d.c,fmtC) : empty;

  // ── Provincia ──
  const provMap={};
  const fuenteProv = salidas.length ? salidas : entradas;
  fuenteProv.filter(r=>r.persona).forEach(r=>{
    const a=DB.asesores.find(x=>(x.nombres+' '+x.apellidos).toLowerCase()===(r.persona||'').toLowerCase());
    const prov=a?(a.provincia||'Sin provincia'):(r.area||'Sin provincia');
    provMap[prov]=(provMap[prov]||0)+(r.total||0);
  });
  const provArr=Object.entries(provMap).sort((a,b)=>b[1]-a[1]).slice(0,10);
  const maxProv=Math.max(...provArr.map(([,v])=>v),1);
  $('chart-provincia').innerHTML = provArr.map(([p,v])=>barH(p,v,maxProv,'#6e40c9',fmt(v))).join('') || empty;

  // ── Tallas (entradas + salidas) ──
  const tallaMap={};
  movs.filter(r=>r.talla&&r.talla!=='—').forEach(r=>{ tallaMap[r.talla]=(tallaMap[r.talla]||0)+(r.cantidad||0); });
  const TORD=['XS','S','M','L','XL','XXL','XXXL','28','30','32','34','36','38','40','42','U'];
  const tallaArr=Object.entries(tallaMap).sort((a,b)=>{const ia=TORD.indexOf(a[0]),ib=TORD.indexOf(b[0]);return ia===-1&&ib===-1?b[1]-a[1]:ia===-1?1:ib===-1?-1:ia-ib;});
  $('chart-tallas').innerHTML = tallaArr.length
    ? barV(tallaArr.map(([t,v])=>({l:t,v})),()=>'#0891b2',v=>v+'u',170) : empty;

  // ── Stock muerto ──
  const hoy60=new Date(); hoy60.setDate(hoy60.getDate()-60);
  const ultSal={};
  salidas.filter(r=>r.fecha&&r.producto).forEach(r=>{
    const [d,m,y]=r.fecha.split('/'); const f=new Date(`${y}-${m}-${d}`);
    const k=r.producto+'||'+(r.categoria||'');
    if(!ultSal[k]||f>ultSal[k]) ultSal[k]=f;
  });
  const stkMap={};
  movs.forEach(r=>{ const k=(r.producto||'')+'||'+(r.categoria||'');
    if(!stkMap[k]) stkMap[k]={p:r.producto,e:0,s:0,d:0};
    if(r.tipo==='ENTRADA') stkMap[k].e+=r.cantidad||0;
    if(r.tipo==='SALIDA')  stkMap[k].s+=r.cantidad||0;
    if(r.tipo==='DEVUELTO')stkMap[k].d+=r.cantidad||0;
  });
  const muertos=Object.entries(stkMap)
    .filter(([k,v])=>{ const s=v.e-v.s+v.d; if(s<=0) return false; const u=ultSal[k]; return !u||u<hoy60; })
    .map(([,v])=>({l:v.p,v:v.e-v.s+v.d})).sort((a,b)=>b.v-a.v).slice(0,8);
  $('chart-stock-muerto').innerHTML = muertos.length
    ? barV(muertos,()=>'#8b949e',v=>v+'u',140)
    : '<div style="padding:16px;text-align:center;color:var(--green);font-size:12px">✅ Sin stock muerto</div>';

  // ── Top asesores ──
  const asesMap={};
  const fuenteAses = salidas.length ? salidas : entradas;
  fuenteAses.filter(r=>r.persona).forEach(r=>{ asesMap[r.persona]=(asesMap[r.persona]||0)+(r.total||0); });
  const topAses=Object.entries(asesMap).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const maxAses=Math.max(...topAses.map(([,v])=>v),1);
  $('chart-valor-asesor').innerHTML = topAses.map(([n,v])=>barH(n.split(' ').slice(-2).join(' '),v,maxAses,'#1f6feb',fmt(v))).join('') || empty;
  $('chart-asesor-vert').innerHTML = topAses.length
    ? barV(topAses.slice(0,6).map(([n,v])=>({l:n.split(' ').slice(-1)[0],v})),()=>'#1f6feb',fmtC) : empty;
}

// ═══════════════════════════════════════════════
// ASESORES
// ═══════════════════════════════════════════════
async function guardarAsesor() {
  if (!verificarPermiso('asesores','🔒 Sin permisos para gestionar asesores')) return;
  const nombres   = $('a-nombres').value.trim();
  const apellidos = $('a-apellidos').value.trim();
  if (!nombres || !apellidos) { toast('Completa nombres y apellidos', 'err'); return; }

  const editId = $('a-edit-id').value;
  const datos = {
    nombres, apellidos,
    dni:      $('a-dni').value.trim(),
    empresa:  $('a-empresa').value,
    jefe:     $('a-jefe').value.trim(),
    area:     $('a-area').value,
    provincia:$('a-provincia').value,
    movil:    $('a-movil').value.trim(),
  };

  if (editId) {
    await apiFetch('/asesores/' + editId, { method:'PUT', body: JSON.stringify(datos) });
    const idx = DB.asesores.findIndex(a => String(a.id) === editId);
    if (idx >= 0) DB.asesores[idx] = { ...DB.asesores[idx], ...datos };
  } else {
    const res = await apiFetch('/asesores', { method:'POST', body: JSON.stringify(datos) });
    datos.id = res.id;
    DB.asesores.push(datos);
  }
  syncDatalists(); limpiarAsesor(); renderAsesores();
  toast(`✅ ${nombres} ${apellidos} guardado`);
}

function editarAsesor(id) {
  const a = DB.asesores.find(x => String(x.id) === String(id));
  if (!a) return;
  $('a-nombres').value   = a.nombres   || '';
  $('a-apellidos').value = a.apellidos || '';
  $('a-dni').value       = a.dni       || '';
  $('a-jefe').value      = a.jefe      || '';
  $('a-movil').value     = a.movil     || '';
  $('a-edit-id').value   = a.id;
  // Selects — asignar valor aunque no esté en las opciones originales
  setSelectVal('a-empresa',  a.empresa);
  setSelectVal('a-area',     a.area);
  setSelectVal('a-provincia',a.provincia);
  $('asesor-form-titulo').textContent = 'Editando: ' + a.nombres + ' ' + a.apellidos;
  $('card-asesor').scrollIntoView({ behavior:'smooth' });
  toast('✏️ Editando asesor — modifica y guarda', 'info');
}

function setSelectVal(id, val) {
  const sel = $(id);
  if (!sel || !val) return;
  let opt = Array.from(sel.options).find(o => o.value === val);
  if (!opt) {
    opt = document.createElement('option');
    opt.value = val; opt.textContent = val;
    sel.appendChild(opt);
  }
  sel.value = val;
}

async function limpiarAsesor() {
  ['a-nombres','a-apellidos','a-dni','a-jefe','a-movil'].forEach(id => { if($(id)) $(id).value=''; });
  ['a-empresa','a-area','a-provincia'].forEach(id => { if($(id)) $(id).value=''; });
  $('a-edit-id').value = '';
  $('asesor-form-titulo').textContent = 'Agregar Persona';
}

async function delAsesor(id) {
  if (!verificarPermiso('asesores','🔒 Sin permisos para eliminar asesores')) return;
  if (!confirm('¿Eliminar este asesor?')) return;
  await apiFetch('/asesores/' + id, { method:'DELETE' });
  DB.asesores = DB.asesores.filter(a => String(a.id) !== String(id));
  syncDatalists(); renderAsesores(); toast('Asesor eliminado','info');
}

function renderAsesores() {
  const busq = ($('busq-a').value||'').toLowerCase();
  const emp  = $('fil-emp').value;
  const prov = $('fil-prov-a').value;
  let data = [...DB.asesores];
  if (busq) data = data.filter(a =>
    (a.nombres+' '+a.apellidos).toLowerCase().includes(busq) ||
    (a.dni||'').includes(busq) ||
    (a.empresa||'').toLowerCase().includes(busq)
  );
  if (emp)  data = data.filter(a => a.empresa === emp);
  if (prov) data = data.filter(a => a.provincia === prov);
  $('conteo-a').textContent = data.length + ' personas';
  const tbody = $('tbody-asesores');
  if (!data.length) { tbody.innerHTML='<tr><td colspan="10"><div class="empty"><div class="icon">👥</div><p>No hay asesores</p></div></td></tr>'; return; }
  tbody.innerHTML = data.map((a,i) => `
    <tr>
      <td style="color:var(--text2)">${i+1}</td>
      <td style="font-weight:600">${a.nombres}</td>
      <td style="font-weight:600">${a.apellidos}</td>
      <td class="mono" style="font-size:11px">${a.dni||''}</td>
      <td style="font-size:11px;color:var(--accent2)">${a.empresa||''}</td>
      <td style="font-size:11px">${a.area||''}</td>
      <td style="font-size:11px;color:var(--text2)">${a.provincia||''}</td>
      <td style="font-size:11px;color:var(--text2)">${a.jefe||''}</td>
      <td style="font-size:11px;color:var(--text2)">${a.movil||''}</td>
      <td style="white-space:nowrap">
        <button class="btn" onclick="editarAsesor(${a.id})" style="font-size:11px;padding:3px 8px">✏️</button>
        <button class="btn btn-r" onclick="delAsesor(${a.id})" style="font-size:11px;padding:3px 8px">✕</button>
      </td>
    </tr>`).join('');
}

function exportarPlantillaAsesores() {
  if (typeof XLSX==='undefined') { toast('Necesitas internet para esto','err'); return; }
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet([
    ['PLANTILLA DE PERSONAS — pega desde fila 3'],
    ['Nombres','Apellidos','DNI','Empresa','Jefe inmediato','Área (LIMA/PROVINCIA)','Provincia','Móvil'],
    ...DB.asesores.map(a=>[a.nombres,a.apellidos,a.dni,a.empresa,a.jefe,a.area,a.provincia,a.movil]),
    ...Array(100).fill(Array(8).fill(''))
  ]);
  ws['!cols'] = Array(8).fill({wch:22});
  XLSX.utils.book_append_sheet(wb,ws,'Personas');
  XLSX.writeFile(wb,'Plantilla_Personas.xlsx');
  toast('✅ Plantilla descargada');
}

function importarAsesores(e) {
  if (typeof XLSX==='undefined') { toast('Necesitas internet','err'); return; }
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const wb   = XLSX.read(ev.target.result,{type:'binary'});
      const data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]],{header:1,range:2});
      let n=0;
      data.forEach(row => {
        const nombres   = (row[0]||'').toString().trim();
        const apellidos = (row[1]||'').toString().trim();
        if (!nombres||!apellidos) return;
        const dni = (row[2]||'').toString().trim();
        if (dni && DB.asesores.find(a=>a.dni===dni)) return;
        if (DB.asesores.find(a=>a.nombres.toLowerCase()===nombres.toLowerCase()&&a.apellidos.toLowerCase()===apellidos.toLowerCase())) return;
        DB.asesores.push({ id:Date.now()+Math.random(), nombres, apellidos, dni,
          empresa:(row[3]||'').toString().trim(), jefe:(row[4]||'').toString().trim(),
          area:(row[5]||'').toString().trim(), provincia:(row[6]||'').toString().trim(),
          movil:(row[7]||'').toString().trim() });
        n++;
      });
      guardarDB(); syncDatalists(); renderAsesores();
      toast('✅ '+n+' personas importadas');
    } catch(err) { toast('❌ Error: '+err.message,'err'); }
  };
  reader.readAsBinaryString(file); e.target.value='';
}

// ═══════════════════════════════════════════════
// CATÁLOGOS
// ═══════════════════════════════════════════════
async function renderCatalogos() {
  ['proveedores','areas'].forEach(key => {
    const cont = $('cat-'+key);
    if (!cont) return;
    cont.innerHTML = (DB.catalogos[key]||[]).map((v,i)=>`
      <div class="cat-tag">${v}<button onclick="delCat('${key}',${i})">×</button></div>`).join('');
  });
  // Productos
  const prods = [...new Set([
    ...(DB.catalogos.productos||[]),
    ...DB.movimientos.map(r=>r.producto).filter(Boolean)
  ])];
  const contP = $('cat-productos');
  if (contP) contP.innerHTML = prods.map((v,i)=>`<div class="cat-tag">${v}<button onclick="delCat('productos',${i})">×</button></div>`).join('');
}

async function addCat(key, inputId, contId) {
  if (!verificarPermiso("catalogos","🔒 Solo admin puede modificar catálogos")) return;
  const val = $(inputId).value.trim();
  if (!val) return;
  if (!DB.catalogos[key]) DB.catalogos[key]=[];
  if (!DB.catalogos[key].includes(val)) {
    DB.catalogos[key].push(val);
    await apiFetch('/catalogos', { method:'POST', body: JSON.stringify({ tipo:key, valor:val }) });
    syncDatalists();
  }
  $(inputId).value='';
  renderCatalogos();
}
async function delCat(key, i) {
  if (!verificarPermiso("catalogos","🔒 Solo admin puede modificar catálogos")) return;
  if (DB.catalogos[key]) {
    const val = DB.catalogos[key][i];
    DB.catalogos[key].splice(i,1);
    await apiFetch('/catalogos', { method:'DELETE', body: JSON.stringify({ tipo:key, valor:val }) });
    syncDatalists(); renderCatalogos();
  }
}

// ═══════════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════════
function tab(el, name) {
  // Verificar que el rol tiene acceso a esta pestaña
  const tabPermisos = {
    movimientos: ['consulta','operativo','admin'],
    stock:       ['consulta','operativo','admin'],
    dashboard:   ['consulta','operativo','admin'],
    asesores:    ['operativo','admin'],
    catalogos:   ['admin'],
    productos:   ['admin'],
  };
  const rol = sesion?.rol || 'consulta';
  if (!(tabPermisos[name] || ['admin']).includes(rol)) {
    toast('🔒 Sin acceso a esta sección', 'err');
    return;
  }
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  document.querySelectorAll('.sec').forEach(s=>s.classList.remove('on'));
  el.classList.add('on');
  const sec = $('sec-'+name);
  if (sec) sec.classList.add('on');
  if (name==='stock')     renderStock();
  if (name==='dashboard') renderDashboard();
  if (name==='asesores')  renderAsesores();
  if (name==='catalogos') renderCatalogos();
  if (name==='movimientos') { poblarMeses(); poblarTipos(); renderTabla(); renderAlertasStock(); }
  if (name==='productos')   renderProductos();
}

// ═══════════════════════════════════════════════
// IMPRIMIR CARGO
// ═══════════════════════════════════════════════
function imprimirCargo(orden) {
  const registros = DB.movimientos.filter(r => r.orden === orden);
  if (!registros.length) { toast('No hay ítems en esta orden','err'); return; }
  const r0 = registros[0];
  const a  = DB.asesores.find(x => (x.nombres+' '+x.apellidos).toLowerCase() === (r0.persona||'').toLowerCase());

  const nombre  = r0.persona || '';
  const dni     = a ? (a.dni||'____________') : '____________';
  const empresa = a ? (a.empresa||'PERU TECNICOS S.A.C.') : 'PERU TECNICOS S.A.C.';
  const jefe    = a ? (a.jefe||'____________') : '____________';
  const area    = r0.area || (a ? (a.area==='LIMA'?'Operaciones - Lima':'Operaciones - Provincia') : '');

  // Separar en dos grupos: uniformes/EPS y equipos tecnológicos
  const CATS_EQUIPO  = ['TELÉFONO MÓVIL','MINIGRABADORAS','LAPTOPS / TABLETS'];
  const CATS_UNIFORME = ['UNIFORMES','EPP / SEGURIDAD'];
  const grpEquipo   = registros.filter(r => CATS_EQUIPO.includes(r.categoria));
  const grpUniforme = registros.filter(r => CATS_UNIFORME.includes(r.categoria));
  const grpOtros    = registros.filter(r => !CATS_EQUIPO.includes(r.categoria) && !CATS_UNIFORME.includes(r.categoria));

  // Unir uniformes y otros NO-equipo en un solo cargo
  const grpUniTotal = [...grpUniforme, ...grpOtros];

  function generarCargo(items, esEquipo) {
    if (!items.length) return;
    const total    = items.reduce((s,r) => s+(r.total||0), 0);
    const titulo   = esEquipo
      ? 'CARGO DE ENTREGA Y RESPONSABILIDAD DE EQUIPOS DE TRABAJO'
      : 'ACTA DE ENTREGA Y RESPONSABILIDAD DE EPPS Y UNIFORME DE TRABAJO';
    const colTipo  = esEquipo ? 'EQUIPOS' : 'UNIFORME / EPS';

    const filas = items.map(r => `
      <tr>
        <td style="border:1px solid #ccc;padding:6px 8px;text-align:center">${r.cantidad}</td>
        <td style="border:1px solid #ccc;padding:6px 8px">
          ${r.producto}${r.modelo ? ' — '+r.modelo : ''}
          ${r.codigo ? '<br><small style="color:#555">Serie/IMEI: '+r.codigo+'</small>' : ''}
          <br><small style="color:#666">Estado: ${r.estado||'NUEVO'}${r.talla&&r.talla!=='—'?' · Talla: '+r.talla:''}</small>
        </td>
        <td style="border:1px solid #ccc;padding:6px 8px;text-align:right">S/ ${(r.total||0).toFixed(2)}</td>
      </tr>`).join('');

    const html = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">
    <title>${titulo}</title>
    <style>
      *{box-sizing:border-box;margin:0;padding:0;}
      body{font-family:Arial,sans-serif;font-size:12px;color:#000;padding:0px 28px 20px 28px;margin:0;}
      @page{margin:0;size:A4;}
      .cargo{max-width:780px;margin:100px auto 0 auto;}
      /* Membrete superior izquierdo */
      .membrete{
        width:100%;height:120px;margin-bottom:20px;
      }
      .titulo{
        text-align:center;font-size:13px;font-weight:bold;
        text-transform:uppercase;border:2px solid #000;
        padding:9px 14px;margin-bottom:14px;background:#f0f0f0;
        letter-spacing:.03em;
      }
      .fila{display:flex;align-items:baseline;gap:8px;margin-bottom:7px;}
      .fila label{font-weight:bold;min-width:140px;flex-shrink:0;}
      .fila .linea{flex:1;border-bottom:1px solid #000;padding:0 4px;min-width:80px;}
      .grid2{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;}
      table{width:100%;border-collapse:collapse;margin:10px 0;}
      thead th{background:#d0d0d0;border:1px solid #ccc;padding:7px 8px;text-align:center;font-size:11px;}
      .total-row td{font-weight:bold;border:1px solid #ccc;padding:6px 8px;background:#f5f5f5;}
      .legal{font-size:10.5px;text-align:justify;margin:8px 0;line-height:1.5;}
      /* Sección de firmas — igual altura, alineadas al fondo */
      .firmas{
        display:grid;grid-template-columns:1fr 1fr;gap:40px;
        margin-top:30px;align-items:end;justify-items:center;
      }
      .firma-box{text-align:center;width:100%;max-width:250px;}
      /* Trabajador: huella pegada a la izquierda del espacio de firma */
      .firma-trabajador{
        position:relative;
        border-top:1px solid #000;
        padding-top:6px;
        margin-top:100px;   /* espacio para la firma a mano */
        min-height:40px;
      }
      .huella{
        position:absolute;
        right:0;
        bottom:calc(100% + 3px);
        width:80px;height:100px;
        border:1px solid #999;border-radius:3px;
        display:flex;align-items:center;justify-content:center;
        font-size:9px;color:#aaa;text-align:center;padding:3px;
      }
      .firma-nombre{font-size:11px;font-weight:bold;margin-bottom:2px;}
      .firma-sub{font-size:10px;color:#444;}
      /* Entregado por — sin nombre de empresa */
      .firma-entrega{
        border-top:1px solid #000;
        padding-top:6px;
        margin-top:100px;
        font-size:11px;
        min-height:40px;
      }
      @media print{.no-print{display:none!important;}}
    </style></head><body>
    <div class="cargo">
      <!-- Membrete -->
      <div class="membrete"></div>

      <div class="titulo">${titulo}</div>

      <div class="grid2">
        <div class="fila"><label>Apellidos y Nombres:</label><span class="linea">${nombre}</span></div>
        <div class="fila"><label>Fecha:</label><span class="linea">${r0.fecha||''}</span></div>
        <div class="fila"><label>DNI:</label><span class="linea">${dni}</span></div>
        <div class="fila"><label>Empresa:</label><span class="linea">${empresa}</span></div>
        <div class="fila"><label>Área / Sede:</label><span class="linea">${area}</span></div>
        <div class="fila"><label>Jefe inmediato:</label><span class="linea">${jefe}</span></div>
      </div>

      <p class="legal"><strong>${empresa} S.A.C.</strong> (en adelante LA EMPRESA), con domicilio en Av. Alberto Alexander 2654-Urb Risso-Lince, departamento de Lima, hace entrega AL TRABAJADOR los siguientes implementos:</p>

      <table>
        <thead><tr>
          <th style="width:55px">CANT.</th>
          <th>${colTipo}</th>
          <th style="width:90px">IMPORTE</th>
        </tr></thead>
        <tbody>${filas}</tbody>
        <tfoot><tr class="total-row">
          <td colspan="2" style="text-align:right;border:1px solid #ccc">TOTAL:</td>
          <td style="text-align:right;border:1px solid #ccc">S/ ${total.toFixed(2)}</td>
        </tr></tfoot>
      </table>

      <p class="legal">EL TRABAJADOR declara recibir los implementos antes descritos en buen estado de conservación y funcionamiento, comprometiéndose a darles un uso adecuado para el desempeño de sus funciones.</p>
      <p class="legal"><strong>Declaración del trabajador:</strong> En el supuesto que el vínculo laboral con LA EMPRESA se extinga por cualquiera de las causales previstas en la ley, EL TRABAJADOR se obliga a devolver los implementos detallados en el presente documento en la fecha de su cese. En caso de no efectuar la devolución o de verificarse pérdida o daño atribuible al trabajador, este autoriza expresamente a LA EMPRESA a descontar el valor correspondiente de su liquidación de beneficios sociales y/o remuneraciones pendientes, conforme a la normativa laboral vigente.</p>
      <p class="legal">No se considerará responsabilidad del trabajador el desgaste normal por el uso adecuado de los implementos entregados.</p>

      <!-- FIRMAS: misma altura, alineadas al fondo -->
      <div class="firmas">
        <!-- Trabajador: huella pegada a la línea, esquinada a la izquierda -->
        <div class="firma-box">
          <div class="firma-trabajador">
            <div class="huella"></div>
            <div class="firma-nombre">${nombre}</div>
            <div class="firma-sub">DNI: ${dni}</div>
            <div class="firma-sub">EL TRABAJADOR</div>
          </div>
        </div>
        <div class="firma-box">
          <div class="firma-entrega">
            <div class="firma-sub" style="font-weight:bold;margin-bottom:2px">Entregado por:</div>
            <div class="firma-sub">Área de Logística</div>
          </div>
        </div>
      </div>


    </div></body></html>`;

    return html;
  }

  function abrirVentanaCargo(html, titulo) {
    const full = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">
      <title>${titulo}</title></head><body>
      <div class="no-print" style="text-align:center;padding:14px;background:#1a1a2e;">
        <button onclick="window.print()" style="background:#1f6feb;color:#fff;border:none;padding:10px 28px;border-radius:6px;font-size:14px;font-weight:700;cursor:pointer;margin-right:10px">🖨️ IMPRIMIR</button>
        <button onclick="window.close()" style="background:#555;color:#fff;border:none;padding:10px 20px;border-radius:6px;font-size:14px;cursor:pointer">✕ Cerrar</button>
      </div>
      ${html}
    </body></html>`;
    const w = window.open('','_blank','width=900,height=780');
    w.document.write(full); w.document.close();
  }

  // Alias para compatibilidad con la llamada combinada
  const generarCargoHTML = generarCargo;

  // Generar cargo(s) — si hay ambos tipos, abre una sola ventana con los dos
  if (grpEquipo.length && grpUniTotal.length) {
    // Construir ambos HTML y meterlos en una sola ventana
    const htmlEquipo = generarCargoHTML(grpEquipo, true);
    const htmlUni    = generarCargoHTML(grpUniTotal, false);
    const combinado  = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">
      <title>Cargos de Entrega</title>
      <style>
        body{margin:0;padding:0;font-family:Arial,sans-serif;}
        .separador{border:none;border-top:3px dashed #999;margin:40px 0;page-break-after:always;}
        .no-print{display:block;}
        @media print{.no-print{display:none!important;} .separador{border-top:2px dashed #ccc;}}
      </style></head><body>
      <div class="no-print" style="text-align:center;padding:14px;background:#1a1a2e;">
        <button onclick="window.print()" style="background:#1f6feb;color:#fff;border:none;padding:10px 28px;border-radius:6px;font-size:14px;font-weight:700;cursor:pointer;margin-right:10px">🖨️ IMPRIMIR AMBOS</button>
        <button onclick="window.close()" style="background:#555;color:#fff;border:none;padding:10px 20px;border-radius:6px;font-size:14px;cursor:pointer">✕ Cerrar</button>
      </div>
      ${htmlEquipo}
      <hr class="separador">
      ${htmlUni}
    </body></html>`;
    const w = window.open('','_blank','width=900,height=780');
    w.document.write(combinado); w.document.close();
  } else if (grpEquipo.length) {
    abrirVentanaCargo(generarCargoHTML(grpEquipo, true), 'Cargo Equipos');
  } else {
    abrirVentanaCargo(generarCargoHTML(grpUniTotal, false), 'Cargo Uniformes');
  }
}

// ═══════════════════════════════════════════════
// EXPORTAR / IMPORTAR
// ═══════════════════════════════════════════════
function exportarJSON() {
  if (!verificarPermiso("backup","🔒 Solo admin puede hacer backup")) return;
  const blob = new Blob([JSON.stringify(DB,null,2)],{type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Inventario_Backup_' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  toast('✅ Backup descargado');
}
function importarJSON(e) {
  if (!verificarPermiso("backup","🔒 Solo admin puede restaurar datos")) return;
  const file = e.target.files[0]; if(!file) return;
  const r = new FileReader();
  r.onload = ev => {
    try {
      const d = JSON.parse(ev.target.result);
      DB = { ...DB_DEF(), ...d };
      if(!DB.asesores) DB.asesores=[];
      if(!DB.usuarios) DB.usuarios=DB_DEF().usuarios;
      guardarDB(); syncDatalists(); poblarMeses(); renderTabla();
      toast('✅ Datos restaurados · ' + DB.movimientos.length + ' movimientos');
    } catch(err) { toast('❌ Error al leer JSON: '+err.message,'err'); }
  };
  r.readAsText(file); e.target.value='';
}

function exportarCSV() {
  const rows = DB.movimientos;
  if(!rows.length){toast('No hay datos','info');return;}
  const h = ['N°','Fecha','Tipo','Orden','Categoría','Producto','Modelo','Talla','Código','Cantidad','Precio','Total','Proveedor','Persona','Área','Estado','Observaciones'];
  const csv = [h.join(';'), ...rows.map((r,i)=>[
    i+1,r.fecha||'',r.tipo||'',r.orden||'',r.categoria||'',r.producto||'',r.modelo||'',
    r.talla&&r.talla!=='—'?r.talla:'',r.codigo||'',r.cantidad||0,
    (r.precio||0).toFixed(2),(r.total||0).toFixed(2),r.proveedor||'',r.persona||'',
    r.area||'',r.estado||'',r.obs||''
  ].map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(';'))].join('\n');
  const blob = new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Inventario_' + new Date().toISOString().slice(0,10) + '.csv';
  a.click();
  toast('✅ CSV descargado');
}

function exportarExcel() {
  if (typeof XLSX === 'undefined') { toast('Necesitas internet para exportar Excel','err'); exportarCSV(); return; }
  const wb = XLSX.utils.book_new();
  const COLS_MOV = ['N°','Fecha','N° Orden','Categoría','Producto','Modelo','Talla','Código/IMEI','Cantidad','Precio S/','Total S/','Proveedor','Recibido por','Área','Estado','Observaciones'];

  // Helper: fila desde registro
  const fila = (r, i) => [
    i+1, r.fecha, r.orden, r.categoria, r.producto, r.modelo||'',
    (r.talla&&r.talla!=='—')?r.talla:'', r.codigo||'',
    r.cantidad, parseFloat((r.precio||0).toFixed(2)), parseFloat((r.total||0).toFixed(2)),
    r.proveedor||'', r.persona||'', r.area||'', r.estado||'', r.obs||''
  ];

  const COL_W = [{wch:5},{wch:12},{wch:10},{wch:18},{wch:25},{wch:15},{wch:7},{wch:18},{wch:7},{wch:10},{wch:10},{wch:20},{wch:22},{wch:18},{wch:8},{wch:25}];

  // ── SALIDAS ──
  const salidas = DB.movimientos.filter(r => r.tipo==='SALIDA');
  const wsSal = XLSX.utils.aoa_to_sheet([['TIPO','FECHA','N° ORDEN','CATEGORÍA','PRODUCTO','MODELO','TALLA','CÓDIGO/IMEI','CANT','PRECIO S/','TOTAL S/','PROVEEDOR','RECIBIDO POR','ÁREA','ESTADO','OBS'],
    ...salidas.map(fila)]);
  wsSal['!cols'] = COL_W;
  XLSX.utils.book_append_sheet(wb, wsSal, 'SALIDAS');

  // ── ENTRADAS ──
  const entradas = DB.movimientos.filter(r => r.tipo==='ENTRADA');
  const wsEnt = XLSX.utils.aoa_to_sheet([['TIPO','FECHA','N° ORDEN','CATEGORÍA','PRODUCTO','MODELO','TALLA','CÓDIGO/IMEI','CANT','PRECIO S/','TOTAL S/','PROVEEDOR','RECIBIDO POR','ÁREA','ESTADO','OBS'],
    ...entradas.map(fila)]);
  wsEnt['!cols'] = COL_W;
  XLSX.utils.book_append_sheet(wb, wsEnt, 'ENTRADAS');

  // ── DEVUELTOS ──
  const devueltos = DB.movimientos.filter(r => r.tipo==='DEVUELTO');
  const wsDev = XLSX.utils.aoa_to_sheet([['TIPO','FECHA','N° ORDEN','CATEGORÍA','PRODUCTO','MODELO','TALLA','CÓDIGO/IMEI','CANT','PRECIO S/','TOTAL S/','PROVEEDOR','RECIBIDO POR','ÁREA','ESTADO','OBS'],
    ...devueltos.map(fila)]);
  wsDev['!cols'] = COL_W;
  XLSX.utils.book_append_sheet(wb, wsDev, 'DEVUELTOS');

  // ── STOCK ──
  const mapa = {};
  DB.movimientos.forEach(r => {
    const k = (r.producto||'') + '||' + (r.categoria||'');
    if (!mapa[k]) mapa[k] = { categoria:r.categoria, producto:r.producto, ent:0, sal:0, dev:0 };
    if (r.tipo==='ENTRADA')  mapa[k].ent += r.cantidad||0;
    if (r.tipo==='SALIDA')   mapa[k].sal += r.cantidad||0;
    if (r.tipo==='DEVUELTO') mapa[k].dev += r.cantidad||0;
  });
  const wsStock = XLSX.utils.aoa_to_sheet([
    ['CATEGORÍA','PRODUCTO','ENTRADAS','SALIDAS','DEVUELTOS','STOCK ACTUAL','MÍNIMO','ALERTA'],
    ...Object.entries(mapa).map(([k,v]) => {
      const s = v.ent - v.sal + v.dev, m = DB.minimos[k]||0;
      return [v.categoria, v.producto, v.ent, v.sal, v.dev, s, m,
              s<=0?'AGOTADO':m>0&&s<=m?'STOCK BAJO':'OK'];
    })
  ]);
  wsStock['!cols'] = [{wch:18},{wch:28},{wch:10},{wch:10},{wch:10},{wch:12},{wch:8},{wch:12}];
  XLSX.utils.book_append_sheet(wb, wsStock, 'STOCK');

  // ── ASESORES ──
  const wsAses = XLSX.utils.aoa_to_sheet([
    ['N°','NOMBRES','APELLIDOS','DNI','EMPRESA','ÁREA','PROVINCIA','JEFE','MÓVIL'],
    ...DB.asesores.map((a,i) => [i+1,a.nombres,a.apellidos,a.dni,a.empresa,a.area,a.provincia,a.jefe,a.movil])
  ]);
  wsAses['!cols'] = [{wch:5},{wch:22},{wch:22},{wch:10},{wch:16},{wch:12},{wch:14},{wch:22},{wch:22}];
  XLSX.utils.book_append_sheet(wb, wsAses, 'ASESORES');

  XLSX.writeFile(wb, 'Inventario_' + new Date().toISOString().slice(0,10) + '.xlsx');
  toast('✅ Excel exportado: SALIDAS · ENTRADAS · DEVUELTOS · STOCK · ASESORES');
}

function importarPlantilla(e) {
  if(typeof XLSX==='undefined'){toast('Necesitas internet para importar','err');return;}
  const file=e.target.files[0];if(!file)return;
  const r=new FileReader();
  r.onload=ev=>{
    try{
      const wb=XLSX.read(ev.target.result,{type:'binary'});
      let movN=0, asesN=0;

      // ── HOJA DE MOVIMIENTOS (nombre contiene "MOVIMIENTO" o es la primera) ──
      const hojaMov = wb.SheetNames.find(n=>n.toUpperCase().includes('MOVIMIENTO')) || wb.SheetNames[0];
      if(hojaMov){
        // range:4 = salta fila 1 título, 2 instrucciones, 3 leyenda, 4 header → datos desde fila 5
        const rows=XLSX.utils.sheet_to_json(wb.Sheets[hojaMov],{header:1,range:4,defval:''});
        rows.forEach((row, rowIdx)=>{
          const _fRaw=row[0];
          let fecha='';
          if(_fRaw instanceof Date){
            const d=_fRaw;
            fecha=String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+d.getFullYear();
          } else if(typeof _fRaw==='number'&&_fRaw>40000){
            // Serial Excel → fecha
            const d=new Date(Math.round((_fRaw-25569)*86400*1000));
            fecha=String(d.getUTCDate()).padStart(2,'0')+'/'+String(d.getUTCMonth()+1).padStart(2,'0')+'/'+d.getUTCFullYear();
          } else {
            fecha=(_fRaw||'').toString().trim();
          }
          const tipo     =(row[1]||'').toString().trim().toUpperCase();
          const cat      =(row[2]||'').toString().trim();
          const producto =(row[3]||'').toString().trim();
          const cantidad =parseFloat(row[7])||0;
          if(!fecha||!tipo||!producto||cantidad<=0)return;
          if(!['ENTRADA','SALIDA','DEVUELTO'].includes(tipo))return;
          // Anti-duplicado
          // Anti-duplicado por estado+producto+talla+cantidad+fecha+tipo
          const talla2=(row[5]||'').toString().trim()||'—';
          const estadoImp=(row[13]||'NUEVO').toString().trim().toUpperCase()||'NUEVO';
          const yaExiste=DB.movimientos.find(m=>
            m.fecha===fecha&&m.tipo===tipo&&m.producto===producto&&
            (m.talla||'—')===talla2&&m.cantidad===cantidad&&(m.estado||'NUEVO')===estadoImp
          );
          if(yaExiste)return;
          const itemRefImp = rowIdx + 1;

          const precio    =parseFloat(row[8])||0;
          const proveedor =(row[10]||'').toString().trim();
          const persona   =(row[11]||'').toString().trim();
          const clave     =tipo==='ENTRADA'?proveedor:persona;
          const pref      =tipo==='ENTRADA'?'ENT':tipo==='SALIDA'?'SAL':'DEV';

          // Reutilizar orden existente con misma fecha+tipo+persona o crear nueva
          let orden=DB.movimientos.find(m=>
            m.fecha===fecha&&m.tipo===tipo&&
            (tipo==='ENTRADA'?(m.proveedor||''):(m.persona||'')).toLowerCase()===clave.toLowerCase()
          )?.orden;
          if(!orden){
            const max=DB.movimientos
              .filter(m=>m.orden&&m.orden.startsWith(pref+'-'))
              .map(m=>parseInt(m.orden.split('-')[1])||0)
              .reduce((a,b)=>Math.max(a,b),0);
            orden=pref+'-'+String(max+1).padStart(3,'0');
          }

          // Auto-detectar área desde asesor registrado
          const areaCol=(row[12]||'').toString().trim();
          const area=areaCol||(()=>{
            const a=DB.asesores.find(x=>(x.nombres+' '+x.apellidos).toLowerCase()===persona.toLowerCase());
            return a?(a.area==='LIMA'?'Operaciones - Lima':'Operaciones - Provincia'):'';
          })();

          // Normalizar variantes de categoría
          const catNorm = (()=>{
            const c = cat.toUpperCase().trim();
            if(c==='UNIFORME'||c==='UNIFORMES') return 'UNIFORMES';
            if(c==='EPP'||c==='EPPS'||c==='EPS'||c==='EPP / SEGURIDAD'||c==='EPPS / SEGURIDAD'||c==='EPP / SEGURIDAD') return 'EPP / SEGURIDAD';
            return cat;
          })();
          DB.movimientos.push({
            id:DB.nextId++, itemRef:itemRefImp||null, fecha, tipo, orden,
            categoria:catNorm, producto,
            modelo:(row[4]||'').toString().trim(),
            talla:(row[5]||'').toString().trim()||'—',
            codigo:(row[6]||'').toString().trim(),
            cantidad, precio, total:cantidad*precio,
            proveedor, persona, area,
            estado:(row[13]||'NUEVO').toString().trim()||'NUEVO',
            obs:(row[14]||'').toString().trim(),
            evidencias:[]
          });
          movN++;
        });
      }

      // ── HOJA ASESORES NUEVOS ──
      const hojaAses=wb.SheetNames.find(n=>n.toUpperCase().includes('ASESOR'));
      if(hojaAses){
        // range:3 = salta fila 1 título, 2 instrucciones, 3 header → datos desde fila 4
        const rows=XLSX.utils.sheet_to_json(wb.Sheets[hojaAses],{header:1,range:3,defval:''});
        rows.forEach(row=>{
          const nom=(row[0]||'').toString().trim(),ape=(row[1]||'').toString().trim();
          if(!nom||!ape)return;
          const dni=(row[2]||'').toString().trim();
          if(dni&&DB.asesores.find(a=>a.dni===dni))return;
          if(DB.asesores.find(a=>a.nombres.toLowerCase()===nom.toLowerCase()&&a.apellidos.toLowerCase()===ape.toLowerCase()))return;
          DB.asesores.push({id:Date.now()+Math.random(),nombres:nom,apellidos:ape,dni,
            empresa:(row[3]||'').toString().trim(),jefe:(row[4]||'').toString().trim(),
            area:(row[5]||'').toString().trim(),provincia:(row[6]||'').toString().trim(),
            movil:(row[7]||'').toString().trim()});
          asesN++;
        });
      }

      // ── COMPATIBILIDAD: hoja "Personas" (plantilla anterior) ──
      if(!hojaAses&&wb.SheetNames.includes('Personas')){
        const data=XLSX.utils.sheet_to_json(wb.Sheets['Personas'],{header:1,range:2,defval:''});
        data.forEach(row=>{
          const nom=(row[0]||'').toString().trim(),ape=(row[1]||'').toString().trim();
          if(!nom||!ape)return;
          const dni=(row[2]||'').toString().trim();
          if(dni&&DB.asesores.find(a=>a.dni===dni))return;
          if(DB.asesores.find(a=>a.nombres.toLowerCase()===nom.toLowerCase()&&a.apellidos.toLowerCase()===ape.toLowerCase()))return;
          DB.asesores.push({id:Date.now()+Math.random(),nombres:nom,apellidos:ape,dni,
            empresa:(row[3]||'').toString().trim(),jefe:(row[4]||'').toString().trim(),
            area:(row[5]||'').toString().trim(),provincia:(row[6]||'').toString().trim(),
            movil:(row[7]||'').toString().trim()});
          asesN++;
        });
      }

      guardarDB();syncDatalists();poblarMeses();poblarTipos();renderTabla();renderStock();if(document.getElementById('sec-dashboard')&&document.getElementById('sec-dashboard').style.display!=='none')renderDashboard();
      let msg='✅ Importación completa:';
      if(movN) msg+=' '+movN+' movimientos';
      if(asesN) msg+=(movN?',':'')+' '+asesN+' asesores nuevos';
      if(!movN&&!asesN) msg='ℹ️ No se encontraron datos nuevos para importar';
      toast(msg);
    }catch(err){toast('❌ Error al importar: '+err.message,'err');console.error(err);}
  };
  r.readAsBinaryString(file);e.target.value='';
}

// ═══════════════════════════════════════════════
// ALERTAS DE STOCK PARPADEANTES
// ═══════════════════════════════════════════════
function renderAlertasStock() {
  const cont = $('alertas-stock');
  if (!cont) return;

  // Calcular stock actual
  const mapa = {};
  DB.movimientos.forEach(r => {
    const k = (r.producto||'') + '||' + (r.categoria||'');
    if (!mapa[k]) mapa[k] = { producto:r.producto, cat:r.categoria, ent:0, sal:0, dev:0 };
    if (r.tipo==='ENTRADA')  mapa[k].ent += r.cantidad||0;
    if (r.tipo==='SALIDA')   mapa[k].sal += r.cantidad||0;
    if (r.tipo==='DEVUELTO') mapa[k].dev += r.cantidad||0;
  });

  const agotados = [], bajos = [];
  Object.entries(mapa).forEach(([k, v]) => {
    const stock   = v.ent - v.sal + v.dev;
    const minimo  = DB.minimos ? (DB.minimos[k] || 0) : 0;
    if (stock <= 0)                        agotados.push(v.producto);
    else if (minimo > 0 && stock <= minimo) bajos.push(`${v.producto} (${stock} und.)`);
  });

  let html = '';
  if (agotados.length) {
    html += `<div class="alerta-banner rojo" onclick="tab(document.querySelector('.tab[onclick*=stock]'),'stock')">
      🚨 STOCK AGOTADO (${agotados.length}): ${agotados.slice(0,4).join(', ')}${agotados.length>4?' y '+(agotados.length-4)+' más':''}
      <span style="margin-left:auto;font-size:11px;opacity:.8">Clic para ver Stock →</span>
    </div>`;
  }
  if (bajos.length) {
    html += `<div class="alerta-banner amarillo" onclick="tab(document.querySelector('.tab[onclick*=stock]'),'stock')">
      ⚠️ STOCK BAJO (${bajos.length}): ${bajos.slice(0,3).join(', ')}${bajos.length>3?' y '+(bajos.length-3)+' más':''}
      <span style="margin-left:auto;font-size:11px;opacity:.8">Clic para ver Stock →</span>
    </div>`;
  }
  cont.innerHTML = html;
}

// También en stock, marcar las tarjetas con animación
const _renderStockOrig = typeof renderStock === 'function' ? renderStock : null;

// ═══════════════════════════════════════════════
// EVIDENCIAS POR ORDEN (para ENTRADAS)
// ═══════════════════════════════════════════════
let evOrdenActual = null, evOrdenPendientes = [];

function abrirEvOrden(orden) {
  evOrdenActual = orden;
  evOrdenPendientes = [];
  const items = DB.movimientos.filter(r => r.orden === orden);
  if (!items.length) return;
  const r0 = items[0];
  $('modal-ev-orden-titulo').textContent = `📎 Documentos — ${orden}`;
  $('modal-ev-orden-sub').textContent = `${r0.proveedor||r0.persona||''} · ${r0.fecha||''}  ·  ${items.length} ítem(s)`;

  // Mostrar evidencias ya guardadas (de todos los ítems de la orden)
  const todasEv = items.flatMap(r => r.evidencias || []);
  const grid = $('modal-ev-orden-grid');
  grid.innerHTML = todasEv.length
    ? todasEv.map(ev =>
        ev.tipo && ev.tipo.startsWith('image/')
          ? `<img src="${ev.data}" style="width:70px;height:70px;object-fit:cover;border-radius:6px;border:1px solid var(--border);cursor:pointer" onclick="verImg('${ev.data}')" title="${ev.nombre}">`
          : `<div style="width:70px;height:70px;background:var(--bg3);border:1px solid var(--border);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:28px;cursor:pointer" title="${ev.nombre}">📄</div>`
      ).join('')
    : '<div style="color:var(--text2);font-size:12px">Sin documentos adjuntos aún</div>';

  $('modal-ev-orden').classList.add('open');
}

function onEvOrdenChange(e) {
  Array.from(e.target.files).forEach(f => {
    const reader = new FileReader();
    reader.onload = ev => {
      evOrdenPendientes.push({ nombre:f.name, tipo:f.type, data:ev.target.result });
      // Preview
      const grid = $('modal-ev-orden-grid');
      const prev = ev.target.result;
      const div = document.createElement('div');
      div.style.cssText = 'position:relative;display:inline-block';
      div.innerHTML = f.type.startsWith('image/')
        ? `<img src="${prev}" style="width:70px;height:70px;object-fit:cover;border-radius:6px;border:2px solid var(--green)">`
        : `<div style="width:70px;height:70px;background:var(--bg3);border:2px solid var(--green);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:28px">📄</div>`;
      grid.appendChild(div);
    };
    reader.readAsDataURL(f);
  });
  e.target.value = '';
}
async function onDropEvOrden(e) {
  e.preventDefault();
  const fakeEv = { target: { files: e.dataTransfer.files, value: '' } };
  onEvOrdenChange(fakeEv);
}

async function guardarEvOrden() {
  if (!evOrdenActual || !evOrdenPendientes.length) {
    toast('No hay documentos nuevos para guardar', 'info');
    $('modal-ev-orden').classList.remove('open');
    return;
  }
  // Guardar en el primer ítem de la orden
  const item = DB.movimientos.find(r => r.orden === evOrdenActual);
  if (item) {
    if (!item.evidencias) item.evidencias = [];
    item.evidencias.push(...evOrdenPendientes);
    await apiFetch('/movimientos/' + item.id + '/evidencias', { method:'POST', body: JSON.stringify(evOrdenPendientes) });
    toast(`✅ ${evOrdenPendientes.length} documento(s) guardados en ${evOrdenActual}`);
  }
  $('modal-ev-orden').classList.remove('open');
  evOrdenActual = null; evOrdenPendientes = [];
  renderTabla();
}

// ═══════════════════════════════════════════════
// IMPRIMIR ACTA DE DEVOLUCIÓN
// ═══════════════════════════════════════════════
function imprimirActaDev(orden) {
  const registros = DB.movimientos.filter(r => r.orden === orden);
  if (!registros.length) { toast('No hay ítems en esta orden','err'); return; }
  const r0 = registros[0];
  const a  = DB.asesores.find(x =>
    (x.nombres+' '+x.apellidos).toLowerCase() === (r0.persona||'').toLowerCase()
  );

  const nombre  = r0.persona || '';
  const dni     = a ? (a.dni||'____________') : '____________';
  const empresa = a ? (a.empresa||'____________') : '____________';
  const area    = r0.area || (a ? (a.area==='LIMA'?'Operaciones - Lima':'Operaciones - Provincia') : '____________');

  // Separar equipos de uniformes/EPS
  const CATS_EQUIPO = ['TELÉFONO MÓVIL','MINIGRABADORAS','LAPTOPS / TABLETS'];
  const esEquipo = registros.some(r => CATS_EQUIPO.includes(r.categoria));

  const filas = registros.map(r => {
    const sim   = r.codigo ? `<br><small style="color:#555">IMEI/Serie: ${r.codigo}</small>` : '';
    const talla = r.talla && r.talla !== '—' ? ` · Talla: ${r.talla}` : '';
    return `<tr>
      <td style="border:1px solid #ccc;padding:6px 8px;text-align:center">${r.cantidad}</td>
      <td style="border:1px solid #ccc;padding:6px 8px">
        <strong>${r.producto}</strong>${r.modelo?' — '+r.modelo:''}${sim}
        <br><small style="color:#666">Estado al devolver: ${r.estado||'—'}${talla}</small>
        ${r.obs?`<br><small style="color:#888">Obs: ${r.obs}</small>`:''}
      </td>
      <td style="border:1px solid #ccc;padding:6px 8px;text-align:center">
        <div style="width:80px;height:24px;border-bottom:1px solid #000;margin:0 auto"></div>
        <div style="font-size:9px;color:#666;margin-top:2px">Estado verificado</div>
      </td>
    </tr>`;
  }).join('');

  const titulo = esEquipo
    ? 'ACTA DE RECEPCIÓN DE EQUIPO MÓVIL'
    : 'ACTA DE DEVOLUCIÓN DE UNIFORMES Y/O EPPs';
  const ref = esEquipo
    ? 'Devolución de Activo Fijo - Logística'
    : 'Devolución de Uniformes / EPPs - Logística';

  const html = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">
  <title>${titulo}</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:Arial,sans-serif;font-size:12px;color:#000;padding:28px;}
    .cargo{max-width:780px;margin:0 auto;}
    .membrete{width:180px;height:70px;border:2px solid #ccc;display:flex;align-items:center;
      justify-content:center;margin-bottom:18px;border-radius:4px;color:#aaa;
      font-size:10px;font-style:italic;text-align:center;padding:6px;}
    .titulo{text-align:center;font-size:14px;font-weight:bold;text-transform:uppercase;
      border:2px solid #000;padding:10px;margin-bottom:6px;background:#f0f0f0;}
    .subtitulo{text-align:center;font-size:11px;color:#555;margin-bottom:14px;}
    .fila{display:flex;align-items:baseline;gap:8px;margin-bottom:7px;}
    .fila label{font-weight:bold;min-width:150px;flex-shrink:0;}
    .fila .linea{flex:1;border-bottom:1px solid #000;padding:0 4px;}
    .grid2{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;}
    .seccion{font-weight:bold;font-size:12px;background:#e8e8e8;padding:5px 8px;
      margin:12px 0 6px;border-left:4px solid #333;}
    table{width:100%;border-collapse:collapse;margin:8px 0;}
    thead th{background:#d0d0d0;border:1px solid #ccc;padding:7px 8px;text-align:center;font-size:11px;}
    .legal{font-size:10.5px;text-align:justify;margin:8px 0;line-height:1.5;}
    .firmas{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:30px;align-items:end;}
    .firma-trabajador{position:relative;border-top:1px solid #000;padding-top:6px;margin-top:80px;}
    .huella{position:absolute;left:0;bottom:100%;margin-bottom:3px;width:54px;height:72px;
      border:1px solid #999;border-radius:3px;display:flex;align-items:center;
      justify-content:center;font-size:9px;color:#aaa;text-align:center;padding:3px;}
    .firma-recibe{border-top:1px solid #000;padding-top:6px;margin-top:80px;font-size:11px;}
    @media print{.no-print{display:none!important;}}
  </style></head><body>
  <div class="cargo">
    <div class="membrete">LOGO / MEMBRETE<br>DE LA EMPRESA</div>
    <div class="titulo">${titulo}</div>
    <div class="subtitulo">Referencia: ${ref} &nbsp;·&nbsp; Fecha: ${r0.fecha||''}</div>

    <div class="seccion">1. Datos del Usuario que Devuelve</div>
    <div class="grid2">
      <div class="fila"><label>Nombres y Apellidos:</label><span class="linea">${nombre}</span></div>
      <div class="fila"><label>Fecha:</label><span class="linea">${r0.fecha||''}</span></div>
      <div class="fila"><label>DNI:</label><span class="linea">${dni}</span></div>
      <div class="fila"><label>Empresa:</label><span class="linea">${empresa}</span></div>
      <div class="fila"><label>Área / Departamento:</label><span class="linea">${area}</span></div>
      <div class="fila"><label>Motivo devolución:</label><span class="linea"></span></div>
    </div>

    <div class="seccion">2. Descripción y Estado de lo Devuelto</div>
    <table>
      <thead><tr>
        <th style="width:55px">CANT.</th>
        <th>${esEquipo?'EQUIPO / DESCRIPCIÓN TÉCNICA':'UNIFORME / EPS DEVUELTO'}</th>
        <th style="width:110px">ESTADO VERIFICADO<br><small>(llenar al recibir)</small></th>
      </tr></thead>
      <tbody>${filas}</tbody>
    </table>

    <div class="seccion">3. Declaración de Recepción</div>
    <p class="legal">El área de Logística recibe los ${esEquipo?'equipos':'implementos'} mencionados.
    Se deja constancia de que cualquier daño no reportado en la columna de observaciones
    y que sea detectado tras una revisión${esEquipo?' técnica profunda':' posterior'}, podrá ser notificado posteriormente.</p>
    <p class="legal" style="margin-top:6px">El usuario declara que los implementos entregados corresponden exactamente a
    los listados en el presente documento y que no retiene ningún otro activo de la empresa.</p>

    <div class="firmas">
      <div>
        <div class="firma-trabajador">
          <div class="huella">HUELLA<br>DIGITAL</div>
          <div style="font-size:11px;font-weight:bold">${nombre}</div>
          <div style="font-size:10px">DNI: ${dni}</div>
          <div style="font-size:10px">EL USUARIO / QUIEN DEVUELVE</div>
        </div>
      </div>
      <div>
        <div class="firma-recibe">
          <div style="font-weight:bold;margin-bottom:2px">Recibido por:</div>
          <div style="font-size:10px">Área de Logística</div>
          <div style="font-size:10px">V°B° Jefe de Área</div>
        </div>
      </div>
    </div>

    <div style="margin-top:24px;text-align:center" class="no-print">
      <button onclick="window.print()" style="background:#1f6feb;color:#fff;border:none;padding:11px 30px;border-radius:6px;font-size:14px;font-weight:700;cursor:pointer;margin-right:10px">🖨️ IMPRIMIR</button>
      <button onclick="window.close()" style="background:#555;color:#fff;border:none;padding:11px 22px;border-radius:6px;font-size:14px;cursor:pointer">✕ Cerrar</button>
    </div>
  </div></body></html>`;

  const w = window.open('','_blank','width=900,height=780');
  w.document.write(html); w.document.close();
}


// ═══════════════════════════════════════════════
// LIMPIAR DUPLICADOS
// ═══════════════════════════════════════════════
async function abrirLimpiarDuplicados() {
  $('user-panel').classList.remove('open');
  const movs = DB.movimientos;

  // Detectar duplicados: mismo orden + producto + cantidad + fecha
  const vistos = new Map();
  const duplicados = [];
  movs.forEach((r, idx) => {
    const clave = [r.orden, r.producto, r.cantidad, r.fecha, r.tipo].join('|');
    if (vistos.has(clave)) {
      duplicados.push(idx);
    } else {
      vistos.set(clave, idx);
    }
  });

  const info = $('dup-info');
  if (!duplicados.length) {
    info.innerHTML = `<div style="color:var(--green);font-size:14px">✅ No se detectaron duplicados.<br>
      <span style="font-size:12px;color:var(--text2)">Total registros: <strong>${movs.length}</strong></span></div>`;
    $('btn-dup-accion').style.display = 'none';
  } else {
    info.innerHTML = `
      <div style="margin-bottom:10px">
        📊 <strong>${movs.length}</strong> registros en total<br>
        🔴 <strong style="color:var(--red)">${duplicados.length}</strong> duplicados detectados<br>
        ✅ Quedarán <strong style="color:var(--green)">${movs.length - duplicados.length}</strong> registros únicos
      </div>
      <div style="background:var(--bg3);border-radius:6px;padding:10px;font-size:11px;max-height:160px;overflow-y:auto">
        ${duplicados.slice(0,15).map(i => {
          const r = movs[i];
          return `<div style="padding:3px 0;border-bottom:1px solid var(--border);color:var(--text2)">
            ⚠️ ${r.fecha||''} · ${r.tipo||''} · ${r.producto||''} · ${r.cantidad||0} und</div>`;
        }).join('')}
        ${duplicados.length > 15 ? `<div style="padding:4px 0;color:var(--text2)">... y ${duplicados.length-15} más</div>` : ''}
      </div>
      <div style="margin-top:10px;font-size:12px;color:var(--accent2)">
        ⚠️ Se recomienda hacer un <strong>Backup</strong> antes de limpiar.
      </div>`;
    $('btn-dup-accion').style.display = '';
  }
  $('modal-dup').classList.add('open');
}

async function ejecutarLimpiezaDup() {
  if (!verificarPermiso("limpiar","🔒 Solo admin puede limpiar duplicados")) return;
  const movs = DB.movimientos;
  const vistos = new Map();
  const limpios = [];
  movs.forEach((r, idx) => {
    const clave = [r.orden, r.producto, r.cantidad, r.fecha, r.tipo].join('|');
    if (!vistos.has(clave)) {
      vistos.set(clave, idx);
      limpios.push(r);
    }
  });
  const eliminados = movs.length - limpios.length;
  // Eliminar duplicados via API
  const duplicadosIds = movs.filter((r,i) => !limpios.includes(r)).map(r=>r.id);
  for (const id of duplicadosIds) {
    try { await apiFetch('/movimientos/' + id, { method:'DELETE' }); } catch(e) {}
  }
  DB.movimientos = limpios;
  poblarMeses();
  renderTabla();
  renderAlertasStock();
  $('modal-dup').classList.remove('open');
  toast(`✅ Limpieza completa — ${eliminados} duplicados eliminados · Quedan ${limpios.length} registros`);
}


// ═══════════════════════════════════════════════
// EDITAR ORDEN (ENTRADA / DEVUELTO)
// ═══════════════════════════════════════════════
function editarOrden(orden) {
  const items = DB.movimientos.filter(r => r.orden === orden);
  if (!items.length) return;
  const r0 = items[0];

  // Construir modal dinámico
  const modalHtml = `
    <div class="modal-bg open" id="modal-edit-orden" onclick="if(event.target===this)this.remove()">
      <div class="modal" style="max-width:700px;max-height:88vh;overflow-y:auto">
        <div class="modal-hdr">
          <div class="modal-title">✏️ Editar Orden ${orden}</div>
          <button class="modal-close" onclick="document.getElementById('modal-edit-orden').remove()">✕</button>
        </div>
        <div style="font-size:12px;color:var(--text2);margin-bottom:14px">
          ${r0.fecha} · ${r0.tipo} · ${items.length} ítem(s)
        </div>
        <div id="edit-items-list">
          ${items.map(r=>`
            <div id="edit-item-${r.id}" style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:12px;margin-bottom:10px">
              <div style="font-weight:600;margin-bottom:8px;font-size:13px">${r.producto}${r.talla&&r.talla!=='—'?' — Talla: '+r.talla:''}</div>
              <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:8px">
                <div>
                  <div style="font-size:10px;color:var(--text2);margin-bottom:3px">Cantidad</div>
                  <input class="inp" type="number" id="edit-cant-${r.id}" value="${r.cantidad}" min="1" style="width:100%">
                </div>
                <div>
                  <div style="font-size:10px;color:var(--text2);margin-bottom:3px">Precio Unit. S/</div>
                  <input class="inp" type="number" id="edit-precio-${r.id}" value="${r.precio}" min="0" step="0.01" style="width:100%">
                </div>
                <div>
                  <div style="font-size:10px;color:var(--text2);margin-bottom:3px">Estado</div>
                  <select class="inp" id="edit-estado-${r.id}" style="width:100%">
                    ${['NUEVO','USADO','DAÑADO'].map(e=>`<option value="${e}" ${r.estado===e?'selected':''}>${e}</option>`).join('')}
                  </select>
                </div>
              </div>
              <div>
                <div style="font-size:10px;color:var(--text2);margin-bottom:3px">Observaciones</div>
                <input class="inp" type="text" id="edit-obs-${r.id}" value="${r.obs||''}" placeholder="Observaciones..." style="width:100%">
              </div>
            </div>`).join('')}
        </div>
        <div style="margin-bottom:12px">
          <div style="font-size:10px;color:var(--text2);margin-bottom:4px">Fecha de la orden</div>
          <input class="inp" type="text" id="edit-fecha-orden" value="${r0.fecha}" placeholder="DD/MM/AAAA" style="width:180px">
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn btn-p" onclick="guardarEdicionOrden('${orden}')">✅ Guardar cambios</button>
          <button class="btn" onclick="document.getElementById('modal-edit-orden').remove()">Cancelar</button>
        </div>
      </div>
    </div>`;

  // Eliminar modal previo si existe
  const prev = document.getElementById('modal-edit-orden');
  if (prev) prev.remove();
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

async function guardarEdicionOrden(orden) {
  const items = DB.movimientos.filter(r => r.orden === orden);
  const nuevaFecha = document.getElementById('edit-fecha-orden')?.value?.trim() || '';
  items.forEach(r => {
    const cant   = parseFloat(document.getElementById('edit-cant-'+r.id)?.value) || r.cantidad;
    const precio = parseFloat(document.getElementById('edit-precio-'+r.id)?.value) || r.precio;
    const estado = document.getElementById('edit-estado-'+r.id)?.value || r.estado;
    const obs    = document.getElementById('edit-obs-'+r.id)?.value || '';
    r.cantidad = cant;
    r.precio   = precio;
    r.total    = parseFloat((cant * precio).toFixed(2));
    r.estado   = estado;
    r.obs      = obs;
    if (nuevaFecha) r.fecha = nuevaFecha;
  });
  guardarDB();
  renderTabla();
  renderAlertasStock();
  document.getElementById('modal-edit-orden')?.remove();
  toast('✅ Orden '+orden+' actualizada');
}


// ═══════════════════════════════════════════════
// RESET DATOS — limpia localStorage y recarga con datos del HTML
// ═══════════════════════════════════════════════
function resetearDatos() {
  if (!confirm('⚠️ Esto eliminará TODOS los datos del navegador y cargará los 34 registros base del HTML.\n\n¿Seguro que quieres continuar?')) return;
  try {
    // Guardar asesores y usuarios por si acaso
    const backup = { asesores: DB.asesores, usuarios: DB.usuarios };
    localStorage.removeItem('inv_logistica_db');
    // Recargar página — cargarDB usará DB_DEF() al no encontrar nada
    location.reload();
  } catch(e) {
    toast('Error al resetear: '+e.message, 'err');
  }
}



// ═══════════════════════════════════════════════
// PRODUCTOS / PRECIOS
// ═══════════════════════════════════════════════
function renderProductos() {
  const filCat = ($('pp-cat') && $('pp-cat').value) || '';
  let lista = DB.catalogoPrecios || [];
  if (filCat) lista = lista.filter(p => p.categoria === filCat);

  const cont = $('productos-tabla');
  if (!cont) return;
  if (!lista.length) {
    cont.innerHTML = '<div class="empty"><div class="icon">💰</div><p>Sin productos registrados. Agrega uno con ➕</p></div>';
    return;
  }

  cont.innerHTML = `
  <table style="width:100%;border-collapse:collapse;font-size:13px">
    <thead>
      <tr style="background:var(--bg2);color:var(--text2);font-size:11px;text-transform:uppercase">
        <th style="padding:8px 10px;text-align:left">#</th>
        <th style="padding:8px 10px;text-align:left">Categoría</th>
        <th style="padding:8px 10px;text-align:left">Producto</th>
        <th style="padding:8px 10px;text-align:left">Modelo / Marca</th>
        <th style="padding:8px 10px;text-align:right">Precio (S/)</th>
        <th style="padding:8px 10px;text-align:center">Acciones</th>
      </tr>
    </thead>
    <tbody>
      ${lista.map((p, i) => {
        const realIdx = (DB.catalogoPrecios||[]).indexOf(p);
        return `<tr style="border-bottom:1px solid var(--border)">
          <td style="padding:8px 10px;color:var(--text2)">${i+1}</td>
          <td style="padding:8px 10px"><span class="badge b-ok" style="font-size:10px">${p.categoria||''}</span></td>
          <td style="padding:8px 10px;font-weight:600">${p.producto||''}</td>
          <td style="padding:8px 10px;color:var(--text2)">${p.modelo||'—'}</td>
          <td style="padding:8px 10px;text-align:right;font-weight:700;color:var(--accent)">S/ ${(p.precio||0).toFixed(2)}</td>
          <td style="padding:8px 10px;text-align:center;display:flex;gap:6px;justify-content:center">
            <button class="btn" style="padding:4px 10px;font-size:11px" onclick="abrirModalProducto(${realIdx})">✏️</button>
            <button class="btn" style="padding:4px 10px;font-size:11px;background:#dc2626" onclick="eliminarProducto(${realIdx})">🗑</button>
          </td>
        </tr>`;
      }).join('')}
    </tbody>
  </table>`;
}

function abrirModalProducto(idx) {
  const modal = $('modal-producto');
  if (!modal) return;
  modal.style.display = 'flex';
  $('pp-idx').value = idx !== null ? idx : '';
  if (idx !== null && DB.catalogoPrecios[idx]) {
    const p = DB.catalogoPrecios[idx];
    $('pp-m-cat').value    = p.categoria || 'UNIFORMES';
    $('pp-m-prod').value   = p.producto  || '';
    $('pp-m-modelo').value = p.modelo    || '';
    $('pp-m-precio').value = p.precio    || '';
  } else {
    $('pp-m-cat').value    = 'UNIFORMES';
    $('pp-m-prod').value   = '';
    $('pp-m-modelo').value = '';
    $('pp-m-precio').value = '';
  }
}

function cerrarModalProducto() {
  const modal = $('modal-producto');
  if (modal) modal.style.display = 'none';
}

async function guardarProducto() {
  const prod   = ($('pp-m-prod').value  || '').trim();
  const precio = parseFloat($('pp-m-precio').value) || 0;
  if (!prod)   { toast('El nombre del producto es obligatorio','err'); return; }
  if (!precio) { toast('El precio debe ser mayor a 0','err'); return; }

  const item = {
    categoria: $('pp-m-cat').value   || 'UNIFORMES',
    producto:  prod,
    modelo:    ($('pp-m-modelo').value || '').trim(),
    precio:    precio
  };

  if (!DB.catalogoPrecios) DB.catalogoPrecios = [];
  const idxStr = $('pp-idx').value;
  if (idxStr !== '') {
    const p = DB.catalogoPrecios[parseInt(idxStr)];
    if (p && p.id) await apiFetch('/catalogos/precios/' + p.id, { method:'PUT', body: JSON.stringify(item) });
    DB.catalogoPrecios[parseInt(idxStr)] = { ...DB.catalogoPrecios[parseInt(idxStr)], ...item };
  } else {
    await apiFetch('/catalogos/precios', { method:'POST', body: JSON.stringify(item) });
    const precios = await apiFetch('/catalogos/precios');
    DB.catalogoPrecios = precios;
  }
  cerrarModalProducto();
  renderProductos();
  toast('✅ Producto guardado');
}

async function eliminarProducto(idx) {
  if (!confirm('¿Eliminar este producto del catálogo?')) return;
  const p = DB.catalogoPrecios[idx];
  if (p && p.id) await apiFetch('/catalogos/precios/' + p.id, { method:'DELETE' });
  DB.catalogoPrecios.splice(idx, 1);
  renderProductos();
  toast('🗑 Producto eliminado');
}


function poblarTipos() {
  const tipos = [...new Set(
    DB.movimientos.map(r => r.producto ? r.producto.split(' ')[0] : '').filter(Boolean)
  )].sort();
  ['fil-tipo-prod','s-tipo'].forEach(id => {
    const sel = $(id);
    if (!sel) return;
    const cur = sel.value;
    sel.innerHTML = '<option value="">Todos los tipos</option>' +
      tipos.map(t => `<option value="${t}"${t===cur?' selected':''}>${t}</option>`).join('');
  });
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
// ═══ INIT ═══
// Restaurar sesión si existe (localStorage solo para sesión/tema)
const sesionGuardada = localStorage.getItem('sesion_activa');
if (sesionGuardada) {
  try {
    sesion = JSON.parse(sesionGuardada);
    $('user-label').textContent  = sesion.nombre || sesion.usuario;
    $('panel-info').textContent  = sesion.nombre||sesion.usuario + ' · ' + (sesion.rol||'').toUpperCase();
    aplicarPermisosPorRol();
    $('login-screen').style.display = 'none';
    $('app').style.display = '';
    cargarTema();
    // Cargar datos desde SQL Server
    cargarDB();
  } catch(e) {
    localStorage.removeItem('sesion_activa');
  }
}
