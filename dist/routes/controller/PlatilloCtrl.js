"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var CtrlUtil_1 = require("./CtrlUtil");
var PlatilloCtrl = /** @class */ (function () {
    function PlatilloCtrl() {
    }
    PlatilloCtrl.prototype.savePlatillo = function (req, res, next) {
        var cart = {
            fecha: req.body.fecha,
            cliente: req.body.cliente
        };
        SqlSource_1.default.savePlatillo(cart)
            .then(function (result) {
            var out = { id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    PlatilloCtrl.prototype.getPlatillo = function (req, res, next) {
        var platilloId = req.query.id;
        SqlSource_1.default.getPlatillo(platilloId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendObject(res, result);
        });
    };
    PlatilloCtrl.prototype.setPlatillo = function (req, res, next) {
        var cart = {
            id: req.body.id,
            fecha: req.body.fecha,
            cliente: req.body.cliente
        };
        SqlSource_1.default.setPlatillo(cart)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    PlatilloCtrl.prototype.deletePlatillo = function (req, res, next) {
        var platilloId = req.query.id;
        SqlSource_1.default.deletePlatillo(platilloId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return PlatilloCtrl;
}());
exports.default = PlatilloCtrl;
//# sourceMappingURL=PlatilloCtrl.js.map