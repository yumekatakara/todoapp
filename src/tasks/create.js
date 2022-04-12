// 新規登録処理

const Connection = require("mysql2/typings/mysql/lib/Connection");
const { post } = require("../../routes/api");

const mysql = require(mysql2/promise);
const config = require(../../config.js);

/**
 * タスクを新規登録する　API
 * 
 * @returns　レスポンス　JSON
 */
postCreateTasks = async function(body){
try{
    Connection = await mysql.createConnection(config.dbSetting);
    //ここにSQLを記述する
    const sql = 
    "insert into 'todoapp".'t_task'
}

}catch(err){

}