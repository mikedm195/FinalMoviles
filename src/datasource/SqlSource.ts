import * as mysql from 'mysql';

import { _ } from 'underscore'

import { SqlRepository } from "../repository/SqlRepository";

export class SqlSource implements SqlRepository {

  sql;

  constructor() {

    this.sql = mysql.createConnection({
      host: "localhost",
      user: "1015019_user",
      password: "1015019",
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
        "SET foreign_key_checks = 0; " +
        "UPDATE exf_Agencias " +
        "SET " +
        "nombre = '" + agencia.nombre + "', " +
        "direccion = '" + agencia.direccion + "', " +
        "imagen = '" + agencia.imagen + "', " +
        "telefono = '" + agencia.telefono + "' " +
        "WHERE id = '" + agencia.id + "'; " +
        "SET foreign_key_checks = 1;";

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
        (agenciaId) ?
        ("WHERE user_id = " + agenciaId)
        : "";

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
        "SET foreign_key_checks = 0; " +
        "DELETE FROM exf_Agencias " +
        "WHERE id = " + agenciaId + ";" +
        "SET foreign_key_checks = 1; ";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }

  saveViaje(viaje: any): Promise<number> {
    return null;
  }
  setViaje(viaje: any): Promise<void> {
    return null;
  }
  getViaje(viajeId: number): Promise<any> {
    return null;
  }
  deleteViaje(viajeId: number): Promise<void> {
    return null;
  }

  saveCliente(cliente: any): Promise<number> {
    return null;
  }
  setCliente(cliente: any): Promise<void> {
    return null;
  }
  getCliente(clienteId: number): Promise<any> {
    return null;
  }
  deleteCliente(clienteId: number): Promise<void> {
    return null;
  }

  saveFecha(fecha: any): Promise<number> {
    return null;
  }
  setFecha(fecha: any): Promise<void> {
    return null;
  }
  getFecha(fechaId: number): Promise<any> {
    return null;
  }
  deleteFecha(fechaId: number): Promise<void> {
    return null;
  }
  
  savePlatillo(platillo: any): Promise<number> {
    return null;
  }
  setPlatillo(latillo: any): Promise<void> {
    return null;
  }
  getPlatillo(platilloId: number): Promise<any> {
    return null;
  }
  deletePlatillo(platilloId: number): Promise<void> {
    return null;
  }


}

export default new SqlSource();