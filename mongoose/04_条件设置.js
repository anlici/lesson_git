// 1.安装
const mongoose = require('mongoose');

// 2.连接数据库    数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/atgugu');

//设置回调 
// once 只执行一次，on 可以执行多次
mongoose.connection.once('open',() => {
   // 创建文档结果对象
   let BookSchema = new mongoose.Schema({
      name: {
         type:String,
         required:true,
         unique:true, //唯一值,需要新的集合不能产生重复
      },
   });
   // 4.创建模型对象  集合名称  文档结果对象
   let BookModel = mongoose.model('books',BookSchema);
   // 条件
   BookModel.find({$nor:[{name:'三国演义'},{name:'西游记'}]},(err,data) => {
      if(err){
         console.log(err);
         return;
      }
      console.log(data);})
    // 正则表达式
    //查询条件
    let queryCondition = { name: /^红/ };
    // 使用regexp 可以在变量中找到
    queryCondition.name = { $regex: /^红/ };
    queryCondition = {name:new RegExp('^宏')}
    // 投影条件
    const projection = { name: 1, _id: 0 };
    BookModel.find(queryCondition,projection,(err,data) => {
      if(err){
         console.log(err);
         return;
      }
      console.log(data);})
 
})
mongoose.connection.on('error',() => {
  console.log('数据库连接失败');
})
mongoose.connection.on('close',() => {
  console.log('数据库断开连接');
})


// 3.获取连接对象
const conn = mongoose.connection;

