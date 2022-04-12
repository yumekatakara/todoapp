var express = require("express");
var router = express.Router();

const create = require("../../scr/tasks/create.js");

/*タスクを登録するルーティング*/
router.post("/tasks",funvtion (req,res,next){
  console.log(req.body);
  const createTask=create.postCreate.postCreateTasks(req.body);
  res.send(createTask);
});
module.exports = router;
/* 商品一覧を取得するルーティング */
router.get("/items", function (req, res, next) {
  const itemsList = items.getListItem();
  res.send(itemsList);
});

/*１件の商品情報を取得するルーティング */
router.get("/items/:id", function (req, res, next) {
  const item = items.getItem(req.params.id);
  res.send(item);
});

module.exports = router;
