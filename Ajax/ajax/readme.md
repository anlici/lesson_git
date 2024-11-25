then 是 Promise 对象的方法，用于处理异步操作成功后的操作。
箭头函数 res => {...} 是 then 方法的回调函数，简洁地定义了处理成功结果的逻辑。

## form-serializer 插件
 - 快速序列化表单数据

## config 和confirm 区别
 - config 是 webpack 的配置文件，用于定义构建过程的各种选项和规则。
 - confirm 是一个函数，用于在用户确认操作之前显示一个确认对话框。
    ```
    if (confirm("你确定要执行这个操作吗？")) {
        // 用户点击了确认按钮
        console.log("用户确认了操作");
    } 
    let config = {
        apiUrl: "https://example.com/api", //存储 url
        timeout: 5000 // 超时时间为 5 秒
    };
    ```