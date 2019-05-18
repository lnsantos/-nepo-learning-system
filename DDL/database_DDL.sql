create database escola_database;
use escola_database;

create table usuarios(
    codigo INTEGER PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(50) NOT NULL,
    email TEXT DEFAULT 'Sem informações',
    pass TEXT NOT NULL
);
