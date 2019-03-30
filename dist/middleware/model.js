"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _model = require("../model/model");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (ctx, next) => {
    ctx.model = _model2.default;
    await next();
};