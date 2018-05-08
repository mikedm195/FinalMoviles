"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var CtrlUtil_1 = require("./CtrlUtil");
var ViajeCtrl = /** @class */ (function () {
    function ViajeCtrl() {
    }
    ViajeCtrl.prototype.saveViaje = function (req, res, next) {
        var cart = {
            destino: req.body.destino,
            descripcion: req.body.descripcion,
            fotografia: req.body.fotografia,
            precio: req.body.precio
        };
        SqlSource_1.default.saveViaje(cart)
            .then(function (result) {
            var out = { id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    ViajeCtrl.prototype.getViaje = function (req, res, next) {
        var viajeId = req.query.id;
        SqlSource_1.default.getViaje(viajeId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendObject(res, result);
        });
    };
    ViajeCtrl.prototype.setViaje = function (req, res, next) {
        var cart = {
            id: req.body.id,
            destino: req.body.destino,
            descripcion: req.body.descripcion,
            fotografia: req.body.fotografia,
            precio: req.body.precio
        };
        console.log(JSON.stringify(cart));
        SqlSource_1.default.setViaje(cart)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    ViajeCtrl.prototype.deleteViaje = function (req, res, next) {
        var viajeId = req.query.id;
        SqlSource_1.default.deleteViaje(viajeId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return ViajeCtrl;
}());
exports.default = ViajeCtrl;
//# sourceMappingURL=ViajeCtrl.js.map