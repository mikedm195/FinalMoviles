"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CtrlUtil = /** @class */ (function () {
    function CtrlUtil() {
    }
    CtrlUtil.sendOk = function (res) {
        res.send();
    };
    CtrlUtil.sendObject = function (res, result) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result ? result : {}));
    };
    return CtrlUtil;
}());
exports.CtrlUtil = CtrlUtil;
//# sourceMappingURL=CtrlUtil.js.map