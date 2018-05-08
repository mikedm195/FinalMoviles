"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var CtrlUtil_1 = require("./CtrlUtil");
var AgenciaCtrl = /** @class */ (function () {
    function AgenciaCtrl() {
    }
    AgenciaCtrl.prototype.saveAgencia = function (req, res, next) {
        var cart = {
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            imagen: req.body.imagen,
            telefono: req.body.telefono
        };
        SqlSource_1.default.saveAgencia(cart)
            .then(function (result) {
            var out = { id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    AgenciaCtrl.prototype.getAgencia = function (req, res, next) {
        var agenciaId = req.query.id;
        SqlSource_1.default.getAgencia(agenciaId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendObject(res, result);
        });
    };
    AgenciaCtrl.prototype.setAgencia = function (req, res, next) {
        var cart = {
            id: req.body.id,
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            imagen: req.body.imagen,
            telefono: req.body.telefono
        };
        SqlSource_1.default.setAgencia(cart)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    AgenciaCtrl.prototype.deleteAgencia = function (req, res, next) {
        var agenciaId = req.query.id;
        SqlSource_1.default.deleteAgencia(agenciaId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return AgenciaCtrl;
}());
exports.default = AgenciaCtrl;
//# sourceMappingURL=AgenciaCtrl.js.map