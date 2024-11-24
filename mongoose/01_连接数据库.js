// 1.安装
const mongoose = require('mongoose');

// 2.连接数据库    数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/atgugu');

//设置回调
mongoose.connection.on('open',() => {
  console.log('数据库连接成功');
})
mongoose.connection.on('error',() => {
  console.log('数据库连接失败');
})
mongoose.connection.on('close',() => {
  console.log('数据库断开连接');
})


// 3.获取连接对象
const conn = mongoose.connection;

