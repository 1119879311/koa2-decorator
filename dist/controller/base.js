"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _auth_decorator = require("../util/auth_decorator");

var _auth_decorator2 = _interopRequireDefault(_auth_decorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _default = class _default {

    async __before(ctx, next) {
        var isUser = await _auth_decorator2.default.utilUser(ctx);
        if (isUser) return isUser;
        var isRole = await _auth_decorator2.default.utilRole(ctx);
        if (isRole) return isRole;
        return null;
    }
};

exports.default = _default;