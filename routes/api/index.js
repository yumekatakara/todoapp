var express = require("express");
var router = express.Router();

const tasks = require("../../src/tasks/create.js");

/*タスクを登録するルーティング*/
router.post("/tasks",async function (req,res,next){
 
  const postTasks=await tasks.postTasks(req.body);
  res.send(postTasks);
});
module.exports = router;

//タスク一覧を取得するルーティング
router.get("/tasks", async function (req, res, next){
  const getTasks = await tasks.getTasks();
  res.send(getTasks);
});

//タスク 1件を取得するルーティング
router.get("/tasks/:id", async function(req, res, next){
  const getTasksId = await tasks.getTasksId(req.params.id);
  res.send(getTasksId);
});

router.get ("/")

//タスクを１件更新するルーティング
router.patch("/tasks/:id", async function(req, res, next){
  const patchTasksId = await tasks.patchTasksId(req.params.id, req.body);
  res.send(patchTasksId);
});

/*タスク一覧削除するルーティング*/
router.delete("/tasks/:id", async function(req, res, next){
  const deleteTasksId = await tasks.deleteTasksId(req.params.id);
  res.send(deleteTasksId);
});








