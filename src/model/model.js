// import modelMysql from "../lib/mysql/model";
const modelMysql =require("mysql-model-orm");
import { db } from '../config';
class model extends modelMysql{
    constructor(){
        super(db.mysql)
    }
    static instances(){
        if (!this.instance) {
            this.instance = new model();
        }
        return this.instance;
    }
}
export default model.instances();