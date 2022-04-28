// 新規登録処理



const mysql = require("mysql2/promise");
const config = require("../../config.js");
const { patch } = require("../../routes/api/index.js");

/**
 * タスクを新規登録する　API
 * 
 * @returns　レスポンス　JSON
 */
postTasks = async function(body){
    let connection = null;
  
try{
    connection = await mysql.createConnection(config.dbSetting);
    //ここにSQLを記述する
    const sql = 
    "insert into todoapp.t_task (task_name,deadline,category_id) values (?,?,?);";
    let d = [body.taskName,body.deadline,body.category];
    console.log(body);
    const[rows,fields] = await connection.query(sql,d);

    return rows;
}catch(err){
console.log(err);
}finally{
connection.end();
}
};
exports.postTasks = postTasks;

/**
 * タスクを一覧取得するAPI
 * 
 * @returns レスポンス　JSON
 */
getTasks = async function(){
    let connection = null;
    try{
        connection = await mysql.createConnection(config.dbSetting);
        //ここにSQLを記述する
        const sql=
        "SELECT t_task.id, t_task.category_id, m_category.category_name,t_task.task_name,t_task.deadline, t_task.task_status, t_task.updated_at, t_task.created_at, t_task.check FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.id;";
    const [rows,fields] = await connection.query(sql);
   
    return rows;
} catch(err) {
console.log(err);
}finally{
    connection.end();
}
};
exports.getTasks = getTasks;

/**
 * タスクを１件取得するAPI
 * 
 * @returns レスポンス　JSON
 */
getTasksId = async function(id){
    let connection = null;
    try{
    connection = await mysql.createConnection(config.dbSetting);
    //ここにSQLを記述する
    const sql =
    "SELECT t_task.id, t_task.category_id, m_category.category_name, t_task.task_name, t_task.deadline, t_task.task_status, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.id WHERE t_task.id = ?";
    let d = [id];
    const [rows,fields] = await connection.query(sql,d);
    return rows;
} catch (err){
    console.log(err);
}finally{
    connection.end();
}
};
exports.getTasksId = getTasksId;


//カテゴリを選択したときの検索　API 
getnumber = async function(id){
    let connection = null;
    try{
    connection = await mysql.createConnection(config.dbSetting);
    //ここにSQLを記述する
    const sql =
    "SELECTt task.category_id, m_category.category_name,  WHERE m_category.id = ?";
    let d = [id];
    const [rows,fields] = await connection.query(sql,d);
    return rows;
} catch (err){
    console.log(err);
}finally{
    connection.end();
}
};
exports.getTasksId = getTasksId;



/**
 * タスク１件更新するAPI
 * 
 * @returns レスポンス　JSON
 */
 patchTasksId = async function(id, body){
    let connection = null;
    try{
        connection = await mysql.createConnection(config.dbSetting);
        //ここにSQLを記述する
        const sql = 
            "UPDATE t_task SET task_name=?, deadline=?, category_id=?, task_status=?, updated_at=? WHERE id=?;";
            let d = [
                body.taskName,
                body.deadline,
                body.category,
                body.status,
                new Date(),
                id,
            ];
            const [rows, fields] = await connection.query(sql, d);
            return rows;
    }catch(err){
        console.log(err);
    }finally{
        connection.end();
    }
    
};
exports.patchTasksId=patchTasksId;

/**
 * タスクを１件削除するAPI
 * 
 * @returns レスポンス　JSON
 */
deleteTasksId = async function(id){
    let connection = null;
    try{
        connection = await mysql.createConnection(config.dbSetting);
        //ここにSQLを記述する
        const sql = "DELETE from t_task WHERE id = ?;"
        let d = [id];
        const [rows, fields] = await connection.query(sql, d);

        //console.log(rows);
        return rows;
    }catch (err){
        console.log(err);
    }finally{
        connection.end();
    }
};
exports.deleteTasksId = deleteTasksId;

