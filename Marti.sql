CREATE TABLE exf_Agencias (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(255) NULL,
    direccion varchar(255) NULL,    
    imagen varchar(255) NULL,
    telefono varchar(255) NULL,
    CONSTRAINT Agencia_pk PRIMARY KEY (id)
);

CREATE TABLE exf_Viajes (
    id int NOT NULL AUTO_INCREMENT,
    destino varchar(255) NULL,
    descripcion varchar(255) NULL,    
    fotografia varchar(255) NULL,
    precio decimal(8,2) NULL,
    CONSTRAINT Viajes_pk PRIMARY KEY (id)
);
CREATE TABLE exf_Clientes (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(255) NULL,    
    apellido_paterno varchar(255) NULL,
    apellido_materno varchar(255) NULL,
    fotografia varchar(255) NULL,
    contacto varchar(255) NULL,
    CONSTRAINT Clientes_pk PRIMARY KEY (id)
);
CREATE TABLE exf_Fechas (
    id int NOT NULL AUTO_INCREMENT,
    partida DATE NULL,
    regreso Date NULL,    
    transporte varchar(255) NULL,
    duracion INT NULL,
    CONSTRAINT Fechas_pk PRIMARY KEY (id)
);
CREATE TABLE exf_Platillos (
    id int NOT NULL AUTO_INCREMENT,
    fecha DATE NULL,
    cliente varchar(255) NULL,        
    CONSTRAINT Platillos_pk PRIMARY KEY (id)
);