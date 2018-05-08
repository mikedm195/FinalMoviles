"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var CtrlUtil_1 = require("./CtrlUtil");
var FechaCtrl = /** @class */ (function () {
    function FechaCtrl() {
    }
    FechaCtrl.prototype.saveFecha = function (req, res, next) {
        var cart = {
            partida: req.body.partida,
            regreso: req.body.regreso,
            transporte: req.body.transporte,
            duracion: req.body.duracion
        };
        SqlSource_1.default.saveFecha(cart)
            .then(function (result) {
            var out = { id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    FechaCtrl.prototype.getFecha = function (req, res, next) {
        var fechaId = req.query.id;
        SqlSource_1.default.getFecha(fechaId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendObject(res, result);
        });
    };
    FechaCtrl.prototype.setFecha = function (req, res, next) {
        var cart = {
            id: req.body.id,
            partida: req.body.partida,
            regreso: req.body.regreso,
            transporte: req.body.transporte,
            duracion: req.body.duracion
        };
        SqlSource_1.default.setFecha(cart)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    FechaCtrl.prototype.deleteFecha = function (req, res, next) {
        var fechaId = req.query.id;
        SqlSource_1.default.deleteFecha(fechaId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return FechaCtrl;
}());
exports.default = FechaCtrl;
//# sourceMappingURL=FechaCtrl.js.map