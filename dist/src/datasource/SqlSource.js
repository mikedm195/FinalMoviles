"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var SqlSource = /** @class */ (function () {
    function SqlSource() {
        this.sql = mysql.createConnection({
            host: "localhost",
            user: "1015019_user",
            password: "1015019",
            database: "pddm01015019",
        });
    }
    SqlSource.prototype.isClienteAuth = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM exf_Clientes " +
                "WHERE nombre = '" + email + "' " +
                "AND nombre = '" + password + "';";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(1);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.saveAgencia = function (agencia) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO exf_Agencias " +
                "(nombre, direccion, imagen, telefono) " +
                "VALUES(" +
                "'" + agencia.nombre + "', " +
                "'" + agencia.direccion + "', " +
                "'" + agencia.imagen + "', " +
                "'" + agencia.telefono + "' " +
                ");";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setAgencia = function (agencia) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "UPDATE exf_Agencias " +
                "SET " +
                "nombre = '" + agencia.nombre + "', " +
                "direccion = '" + agencia.direccion + "', " +
                "imagen = '" + agencia.imagen + "', " +
                "telefono = '" + agencia.telefono + "' " +
                "WHERE id = '" + agencia.id + "'; ";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getAgencia = function (agenciaId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM exf_Agencias " +
                ((agenciaId) ?
                    ("WHERE id = " + agenciaId)
                    : "");
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(result);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deleteAgencia = function (agenciaId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "DELETE FROM exf_Agencias " +
                "WHERE id = " + agenciaId + ";";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    SqlSource.prototype.saveViaje = function (viaje) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO exf_Viajes " +
                "(destino, descripcion, fotografia, precio) " +
                "VALUES(" +
                "'" + viaje.destino + "', " +
                "'" + viaje.descripcion + "', " +
                "'" + viaje.fotografia + "', " +
                "'" + viaje.precio + "' " +
                ");";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setViaje = function (viaje) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "UPDATE exf_Viajes " +
                "SET " +
                "destino = '" + viaje.destino + "', " +
                "descripcion = '" + viaje.descripcion + "', " +
                "fotografia = '" + viaje.fotografia + "', " +
                "precio = '" + viaje.precio + "' " +
                "WHERE id = '" + viaje.id + "'; ";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getViaje = function (viajeId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM exf_Viajes " +
                ((viajeId) ?
                    ("WHERE id = " + viajeId)
                    : "");
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(result);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deleteViaje = function (viajeId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "DELETE FROM exf_Viajes " +
                "WHERE id = " + viajeId + ";";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    SqlSource.prototype.saveCliente = function (cliente) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO exf_Clientes " +
                "(nombre, apellido_paterno, apellido_materno, fotografia, contacto) " +
                "VALUES(" +
                "'" + cliente.nombre + "', " +
                "'" + cliente.apellido_paterno + "', " +
                "'" + cliente.apellido_materno + "', " +
                "'" + cliente.fotografia + "', " +
                "'" + cliente.contacto + "' " +
                ");";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setCliente = function (cliente) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "UPDATE exf_Clientes " +
                "SET " +
                "nombre = '" + cliente.nombre + "', " +
                "apellido_paterno = '" + cliente.apellido_paterno + "', " +
                "apellido_materno = '" + cliente.apellido_materno + "', " +
                "fotografia = '" + cliente.fotografia + "', " +
                "contacto = '" + cliente.contacto + "' " +
                "WHERE id = '" + cliente.id + "'; ";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getCliente = function (clienteId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM exf_Clientes " +
                ((clienteId) ?
                    ("WHERE id = " + clienteId)
                    : "");
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(result);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deleteCliente = function (clienteId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "DELETE FROM exf_Clientes " +
                "WHERE id = " + clienteId + ";";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    SqlSource.prototype.saveFecha = function (fecha) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO exf_Fechas " +
                "(partida, regreso, transporte, duracion) " +
                "VALUES(" +
                "'" + fecha.partida + "', " +
                "'" + fecha.regreso + "', " +
                "'" + fecha.transporte + "', " +
                "'" + fecha.duracion + "' " +
                ");";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setFecha = function (fecha) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "UPDATE exf_Fechas " +
                "SET " +
                "partida = '" + fecha.partida + "', " +
                "regreso = '" + fecha.regreso + "', " +
                "transporte = '" + fecha.transporte + "', " +
                "duracion = '" + fecha.duracion + "' " +
                "WHERE id = '" + fecha.id + "'; ";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getFecha = function (fechaId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM exf_Fechas " +
                ((fechaId) ?
                    ("WHERE id = " + fechaId)
                    : "");
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(result);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deleteFecha = function (fechaId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "DELETE FROM exf_Fechas " +
                "WHERE id = " + fechaId + ";";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    SqlSource.prototype.savePlatillo = function (platillo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO exf_Platillos " +
                "(nombre, direccion) " +
                "VALUES(" +
                "'" + platillo.fecha + "', " +
                "'" + platillo.cliente + "' " +
                ");";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setPlatillo = function (platillo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "UPDATE exf_Platillos " +
                "SET " +
                "fecha = '" + platillo.fecha + "', " +
                "cliente = '" + platillo.cliente + "' " +
                "WHERE id = '" + platillo.id + "'; ";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getPlatillo = function (platilloId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM exf_Platillos " +
                ((platilloId) ?
                    ("WHERE id = " + platilloId)
                    : "");
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(result);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deletePlatillo = function (platilloId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "DELETE FROM exf_Platillos " +
                "WHERE id = " + platilloId + ";";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    return SqlSource;
}());
exports.SqlSource = SqlSource;
exports.default = new SqlSource();
//# sourceMappingURL=SqlSource.js.map