import * as mysql from 'mysql';

import { _ } from 'underscore'

import { SqlRepository } from "../repository/SqlRepository";

export class SqlSource implements SqlRepository {

  sql;

  constructor() {

    this.sql = mysql.createConnection({
      // host: "localhost",
      // user: "1015019_user",
      // password: "1015019",
      user: "root",
      password: "Mike1995.",
      database: "pddm01015019",
    });
  }

  isClienteAuth(email: string, password: string): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM exf_Clientes " +
        "WHERE nombre = '" + email + "' " +
        "AND nombre = '" + password + "';";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          resolve(1);
        } else resolve(-1);
      });
    });
  }

  saveAgencia(agencia: any): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO exf_Agencias " +
        "(nombre, direccion, imagen, telefono) " +
        "VALUES(" +
        "'" + agencia.nombre + "', " +
        "'" + agencia.direccion + "', " +
        "'" + agencia.imagen + "', " +
        "'" + agencia.telefono + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }
  setAgencia(agencia: any): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "UPDATE exf_Agencias " +
        "SET " +
        "nombre = '" + agencia.nombre + "', " +
        "direccion = '" + agencia.direccion + "', " +
        "imagen = '" + agencia.imagen + "', " +
        "telefono = '" + agencia.telefono + "' " +
        "WHERE id = '" + agencia.id + "'; ";              

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }
  getAgencia(agenciaId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM exf_Agencias " +
        ((agenciaId) ?
          ("WHERE id = " + agenciaId)
          : "");

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          resolve(result);
        } else resolve(null);
      });
    });
  }
  deleteAgencia(agenciaId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =        
        "DELETE FROM exf_Agencias " +
        "WHERE id = " + agenciaId + ";";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }

  saveViaje(viaje: any): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO exf_Viajes " +
        "(destino, descripcion, fotografia, precio) " +
        "VALUES(" +
        "'" + viaje.destino + "', " +
        "'" + viaje.descripcion + "', " +
        "'" + viaje.fotografia + "', " +
        "'" + viaje.precio + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }
  setViaje(viaje: any): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "UPDATE exf_Viajes " +
        "SET " +
        "destino = '" + viaje.destino + "', " +
        "descripcion = '" + viaje.descripcion + "', " +
        "fotografia = '" + viaje.fotografia + "', " +
        "precio = '" + viaje.precio + "' " +
        "WHERE id = '" + viaje.id + "'; ";              

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }
  getViaje(viajeId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM exf_Viajes " +
        ((viajeId) ?
          ("WHERE id = " + viajeId)
          : "");

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          resolve(result);
        } else resolve(null);
      });
    });
  }
  deleteViaje(viajeId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =        
        "DELETE FROM exf_Viajes " +
        "WHERE id = " + viajeId + ";";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }

  saveCliente(cliente: any): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO exf_Clientes " +
        "(nombre, apellido_paterno, apellido_materno, fotografia, contacto) " +
        "VALUES(" +
        "'" + cliente.nombre + "', " +
        "'" + cliente.apellido_paterno + "', " +
        "'" + cliente.apellido_materno + "', " +
        "'" + cliente.fotografia + "', " +
        "'" + cliente.contacto + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }
  setCliente(cliente: any): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "UPDATE exf_Clientes " +
        "SET " +
        "nombre = '" + cliente.nombre + "', " +
        "apellido_paterno = '" + cliente.apellido_paterno + "', " +
        "apellido_materno = '" + cliente.apellido_materno + "', " +
        "fotografia = '" + cliente.fotografia + "', " +
        "contacto = '" + cliente.contacto + "' " +
        "WHERE id = '" + cliente.id + "'; ";              

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }
  getCliente(clienteId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM exf_Clientes " +
        ((clienteId) ?
          ("WHERE id = " + clienteId)
          : "");

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          resolve(result);
        } else resolve(null);
      });
    });
  }
  deleteCliente(clienteId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =        
        "DELETE FROM exf_Clientes " +
        "WHERE id = " + clienteId + ";";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }

  saveFecha(fecha: any): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO exf_Fechas " +
        "(partida, regreso, transporte, duracion) " +
        "VALUES(" +
        "'" + fecha.partida + "', " +
        "'" + fecha.regreso + "', " +
        "'" + fecha.transporte + "', " +
        "'" + fecha.duracion + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }
  setFecha(fecha: any): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "UPDATE exf_Fechas " +
        "SET " +
        "partida = '" + fecha.partida + "', " +
        "regreso = '" + fecha.regreso + "', " +
        "transporte = '" + fecha.transporte + "', " +
        "duracion = '" + fecha.duracion + "' " +
        "WHERE id = '" + fecha.id + "'; ";              

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }
  getFecha(fechaId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM exf_Fechas " +
        ((fechaId) ?
          ("WHERE id = " + fechaId)
          : "");

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          resolve(result);
        } else resolve(null);
      });
    });
  }
  deleteFecha(fechaId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =        
        "DELETE FROM exf_Fechas " +
        "WHERE id = " + fechaId + ";";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }

  savePlatillo(platillo: any): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO exf_Platillos " +
        "(nombre, direccion) " +
        "VALUES(" +        
        "'" + platillo.fecha + "', " +
        "'" + platillo.cliente + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }
  setPlatillo(platillo: any): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "UPDATE exf_Platillos " +
        "SET " +        
        "fecha = '" + platillo.fecha + "', " +
        "cliente = '" + platillo.cliente + "' " +
        "WHERE id = '" + platillo.id + "'; ";              

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }
  getPlatillo(platilloId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM exf_Platillos " +
        ((platilloId) ?
          ("WHERE id = " + platilloId)
          : "");

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          resolve(result);
        } else resolve(null);
      });
    });
  }
  deletePlatillo(platilloId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =        
        "DELETE FROM exf_Platillos " +
        "WHERE id = " + platilloId + ";";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }


}

export default new SqlSource();