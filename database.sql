-- =============================================
-- SCRIPT DE CREACIÓN — LogisticaDB
-- Servidor: localhost\SQLEXPRESS
-- Usuario:  logistica
-- =============================================

-- Crear la base de datos si no existe
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'LogisticaDB')
BEGIN
    CREATE DATABASE LogisticaDB;
END
GO

USE LogisticaDB;
GO

-- ─────────────────────────────────────────────
-- TABLA: usuarios
-- ─────────────────────────────────────────────
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='usuarios' AND xtype='U')
CREATE TABLE usuarios (
    id                  INT IDENTITY(1,1) PRIMARY KEY,
    usuario             NVARCHAR(100) NOT NULL UNIQUE,
    pass                NVARCHAR(255) NOT NULL,
    nombre              NVARCHAR(200),
    rol                 NVARCHAR(50) DEFAULT 'operativo',
    email               NVARCHAR(200),
    reset_token         NVARCHAR(100),
    reset_token_expiry  DATETIME,
    activo              BIT DEFAULT 1,
    creado_en           DATETIME DEFAULT GETDATE()
);
GO

-- Agregar columnas si la tabla ya existe (para bases de datos existentes)
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('usuarios') AND name='email')
    ALTER TABLE usuarios ADD email NVARCHAR(200);
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('usuarios') AND name='reset_token')
    ALTER TABLE usuarios ADD reset_token NVARCHAR(100);
IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id=OBJECT_ID('usuarios') AND name='reset_token_expiry')
    ALTER TABLE usuarios ADD reset_token_expiry DATETIME;
GO

-- Usuario admin por defecto
IF NOT EXISTS (SELECT 1 FROM usuarios WHERE usuario = 'admin')
    INSERT INTO usuarios (usuario, pass, nombre, rol)
    VALUES ('admin', 'logistica2025', 'Administrador', 'admin');
GO

-- ─────────────────────────────────────────────
-- TABLA: asesores
-- ─────────────────────────────────────────────
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='asesores' AND xtype='U')
CREATE TABLE asesores (
    id         INT IDENTITY(1,1) PRIMARY KEY,
    nombres    NVARCHAR(200) NOT NULL,
    apellidos  NVARCHAR(200) NOT NULL,
    dni        NVARCHAR(20),
    empresa    NVARCHAR(100),
    jefe       NVARCHAR(200),
    area       NVARCHAR(100),
    provincia  NVARCHAR(100),
    movil      NVARCHAR(200),
    activo     BIT DEFAULT 1,
    creado_en  DATETIME DEFAULT GETDATE()
);
GO

-- ─────────────────────────────────────────────
-- TABLA: movimientos
-- ─────────────────────────────────────────────
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='movimientos' AND xtype='U')
CREATE TABLE movimientos (
    id          INT IDENTITY(1,1) PRIMARY KEY,
    item_ref    INT,
    fecha       NVARCHAR(20),
    tipo        NVARCHAR(20) NOT NULL,        -- ENTRADA, SALIDA, DEVUELTO
    orden       NVARCHAR(50),
    categoria   NVARCHAR(100),
    producto    NVARCHAR(300),
    modelo      NVARCHAR(200),
    talla       NVARCHAR(20),
    codigo      NVARCHAR(200),               -- IMEI / Serie
    cantidad    DECIMAL(10,2) DEFAULT 0,
    precio      DECIMAL(10,2) DEFAULT 0,
    total       DECIMAL(10,2) DEFAULT 0,
    proveedor   NVARCHAR(200),
    persona     NVARCHAR(200),
    area        NVARCHAR(200),
    estado      NVARCHAR(50),               -- NUEVO, USADO, DAÑADO
    obs         NVARCHAR(500),
    creado_en   DATETIME DEFAULT GETDATE()
);
GO

-- ─────────────────────────────────────────────
-- TABLA: evidencias
-- ─────────────────────────────────────────────
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='evidencias' AND xtype='U')
CREATE TABLE evidencias (
    id              INT IDENTITY(1,1) PRIMARY KEY,
    movimiento_id   INT NOT NULL REFERENCES movimientos(id) ON DELETE CASCADE,
    nombre          NVARCHAR(300),
    tipo            NVARCHAR(100),
    data            NVARCHAR(MAX),           -- Base64
    creado_en       DATETIME DEFAULT GETDATE()
);
GO

-- ─────────────────────────────────────────────
-- TABLA: catalogos (proveedores, areas, productos)
-- ─────────────────────────────────────────────
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='catalogos' AND xtype='U')
CREATE TABLE catalogos (
    id         INT IDENTITY(1,1) PRIMARY KEY,
    tipo       NVARCHAR(50) NOT NULL,        -- proveedores, areas, productos
    valor      NVARCHAR(300) NOT NULL,
    creado_en  DATETIME DEFAULT GETDATE()
);
GO

-- ─────────────────────────────────────────────
-- TABLA: catalogo_precios
-- ─────────────────────────────────────────────
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='catalogo_precios' AND xtype='U')
CREATE TABLE catalogo_precios (
    id          INT IDENTITY(1,1) PRIMARY KEY,
    categoria   NVARCHAR(100),
    producto    NVARCHAR(300) NOT NULL,
    modelo      NVARCHAR(200),
    precio      DECIMAL(10,2) DEFAULT 0,
    creado_en   DATETIME DEFAULT GETDATE()
);
GO

-- ─────────────────────────────────────────────
-- TABLA: stock_minimos
-- ─────────────────────────────────────────────
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='stock_minimos' AND xtype='U')
CREATE TABLE stock_minimos (
    id           INT IDENTITY(1,1) PRIMARY KEY,
    clave        NVARCHAR(500) NOT NULL UNIQUE,  -- producto||categoria
    minimo       INT DEFAULT 0
);
GO

-- ─────────────────────────────────────────────
-- Permisos para el usuario logistica
-- ─────────────────────────────────────────────
IF NOT EXISTS (SELECT 1 FROM sys.database_principals WHERE name = 'logistica')
BEGIN
    CREATE USER logistica FOR LOGIN logistica;
END
GO
ALTER ROLE db_owner ADD MEMBER logistica;
GO

PRINT ' Base de datos LogisticaDB creada correctamente';
