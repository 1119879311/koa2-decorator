"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _model = require("./model");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let index = class index {
    // 分组统计标签 (根据article)
    static async getGroup(option = {}) {
        // t_status,a_status
        // select t.*,count(a.id)
        // from tk_tab_article as ta inner join tk_tab as t on t.id=ta.t_id inner join tk_article as a on a.id=ta.a_id where a.status=2
        // group by ta.t_id having t.status=1;
        var { t_status, a_status } = option;
        var having = t_status == 0 ? {} : t_status ? { "t.status": t_status } : { "t.status": 1 };
        var where = a_status == 0 ? {} : a_status ? { "a.status": a_status } : { "a.status": 1 };
        // 第一种方式
        var res = await _model2.default.table("tk_tab as t").field("t.*,count(a.id) as count").join([{ join: "right", table: "tk_tab_article as ta", on: "t.id =ta.t_id" }, { join: "left", table: "tk_article as a", on: "a.id =ta.a_id" }]).where(where).group("ta.t_id").having(having).select();
        return await res;
    }
    // 
    static async getGropUidTab(where = {}) {
        return await _model2.default.where(where).MormToMorm({
            middleTable: "tk_tab_article", relateTable: "tk_tab", field: "id,name", rkey: "id", fkey: "a_id", rfkey: "t_id"
        });
    }
};
exports.default = index;