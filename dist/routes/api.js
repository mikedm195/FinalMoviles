"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AgenciaCtrl_1 = require("./controller/AgenciaCtrl");
var ClienteCtrl_1 = require("./controller/ClienteCtrl");
var FechaCtrl_1 = require("./controller/FechaCtrl");
var PlatilloCtrl_1 = require("./controller/PlatilloCtrl");
var ViajeCtrl_1 = require("./controller/ViajeCtrl");
var Api = /** @class */ (function () {
    function Api() {
        this.router = express_1.Router();
        this.agenciaCtrl = new AgenciaCtrl_1.default();
        this.clienteCtrl = new ClienteCtrl_1.default();
        this.fechaCtrl = new FechaCtrl_1.default();
        this.platilloCtrl = new PlatilloCtrl_1.default();
        this.viajeCtrl = new ViajeCtrl_1.default();
        this.init();
    }
    Api.prototype.init = function () {
        //this.router.get('/cliente/auth/', null);
        this.router.get('/agencia/', this.agenciaCtrl.getAgencia);
        this.router.post('/agencia/', this.agenciaCtrl.saveAgencia);
        this.router.put('/agencia/', this.agenciaCtrl.setAgencia);
        this.router.delete('/agencia/', this.agenciaCtrl.deleteAgencia);
        this.router.get('/cliente/', this.viajeCtrl.getViaje);
        this.router.post('/cliente/', this.clienteCtrl.saveCliente);
        this.router.put('/cliente/', this.clienteCtrl.setCliente);
        this.router.delete('/cliente/', this.clienteCtrl.deleteCliente);
        this.router.get('/fecha/', this.fechaCtrl.getFecha);
        this.router.post('/fecha/', this.fechaCtrl.saveFecha);
        this.router.put('/fecha/', this.fechaCtrl.setFecha);
        this.router.delete('/fecha/', this.fechaCtrl.deleteFecha);
        this.router.get('/platillo/', this.platilloCtrl.getPlatillo);
        this.router.post('/platillo/', this.platilloCtrl.savePlatillo);
        this.router.put('/platillo/', this.platilloCtrl.setPlatillo);
        this.router.delete('/platillo/', this.platilloCtrl.deletePlatillo);
        this.router.get('/viaje/', this.viajeCtrl.getViaje);
        this.router.post('/viaje/', this.viajeCtrl.saveViaje);
        this.router.put('/viaje/', this.viajeCtrl.setViaje);
        this.router.delete('/viaje/', this.viajeCtrl.deleteViaje);
        return this;
    };
    return Api;
}());
exports.Api = Api;
exports.default = new Api().init().router;
//# sourceMappingURL=api.js.map