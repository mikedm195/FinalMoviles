"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var CtrlUtil_1 = require("./CtrlUtil");
var ClienteCtrl = /** @class */ (function () {
    function ClienteCtrl() {
    }
    ClienteCtrl.prototype.isClienteAuth = function (req, res, next) {
        var email = req.query.email;
        var password = req.query.password;
        SqlSource_1.default.isClienteAuth(email, password)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendObject(res, { id: result });
        });
    };
    ClienteCtrl.prototype.saveCliente = function (req, res, next) {
        var cart = {
            nombre: req.body.nombre,
            apellido_paterno: req.body.apellido_paterno,
            apellido_materno: req.body.apellido_materno,
            fotografia: req.body.fotografia,
            contacto: req.body.contacto
        };
        SqlSource_1.default.saveCliente(cart)
            .then(function (result) {
            var out = { id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    ClienteCtrl.prototype.getCliente = function (req, res, next) {
        var clienteId = req.query.id;
        SqlSource_1.default.getCliente(clienteId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendObject(res, result);
        });
    };
    ClienteCtrl.prototype.setCliente = function (req, res, next) {
        var cart = {
            id: req.body.id,
            nombre: req.body.nombre,
            apellido_paterno: req.body.apellido_paterno,
            apellido_materno: req.body.apellido_materno,
            fotografia: req.body.fotografia,
            contacto: req.body.contacto
        };
        console.log(JSON.stringify(cart));
        SqlSource_1.default.setCliente(cart)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    ClienteCtrl.prototype.deleteCliente = function (req, res, next) {
        var clienteId = req.query.id;
        SqlSource_1.default.deleteCliente(clienteId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return ClienteCtrl;
}());
exports.default = ClienteCtrl;
//# sourceMappingURL=ClienteCtrl.js.map