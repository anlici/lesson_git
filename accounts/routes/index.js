var express = require('express');
const { listen } = require('../app');
var router = express.Router();
// 导入lowdb
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(__dirname + '/../data/db.json');
// 获取对象
const db = low(adapter);
//导入shortid 生成唯一id
const shortid = require('shortid');
/* 记账本列表 */
router.get('/account/list', function(req, res, next) {
  //list.ejs 文件渲染到页面
  res.render('list');
});

// 添加记录
router.get('/account/create', function(req, res, next) {
  let accounts = db.get('accounts').value();
 
  res.render('create',{accounts:accounts});

});
//新增
router.post('/account',function(req,res) {
  //获取请求体数据 因为app.js中已经配置了body-parser 所以可以直接获取
  //console.log(req.body);
  // 生成id 
  let id = shortid.generate();
  // 向数据库中添加数据 ，...扩展展开
  db.get('accounts').push({id:id,...req.body}).write();
  // 成功提醒

  res.render('success',{msg:'添加成功~~~~~',url:'/account'});
  //res.render('create');
}
)
module.exports = router;
