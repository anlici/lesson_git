// 1.安装
const mongoose = require('mongoose');

// 2.连接数据库    数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/atgugu');

//设置回调 
// once 只执行一次，on 可以执行多次
mongoose.connection.once('open',() => {
   // 创建文档结果对象
   let BookSchema = new mongoose.Schema({
      name: String,
      author: String,
      price:Number,
      text:mongoose.Schema.Types.ObjectId,// 外键  关联集合
      time:Date,
      isHot:Boolean

   });
   // 4.创建模型对象  集合名称  文档结果对象
   let BookModel = mongoose.model('books',BookSchema);
   // 5.新增
   BookModel.create({
      name: '红楼梦',
      author: '曹雪芹',
      price: 100,
      isHot: true,//写错ishotss，忽视
      time: new Date(),
      text: '5f051540646523001413424a' 
   },(err,data) => {
      if(err){
         console.log(err);
         return;
      }
      console.log(data);
      // 6.关闭数据库,运行时候不会设置关闭
     //  mongoose.disconnect();

   })
})
mongoose.connection.on('error',() => {
  console.log('数据库连接失败');
})
mongoose.connection.on('close',() => {
  console.log('数据库断开连接');
})


// 3.获取连接对象
const conn = mongoose.connection;

