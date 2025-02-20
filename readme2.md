- flex:1 
  是一个复合属性，能够尽可能将父容器的剩余空间分配给该元素。
  包含flex-grow：1,flex-shrink:1,flex-basis：0
- display: flex或overflow: hidden等属性触发BFC，实现一栏固定宽度，另一栏自适应剩余宽度的布局
- 浏览器渲染：
    - 网络请求和资源加载
    - 2，html解析和dom树构建
    - 3，css解析和cssdom树构建
    - 4，渲染树构建
    - 5，布局计算
    - 6，绘制，价格每个元素绘制到屏幕
    - 7，合成绘制，每个图层独立绘制后何曾在一起

- 重绘：
  重排：改变dom结构，比如：删除dom元素，修改元素内容等
  transform
- 减少内联，和过多使用！important‘
- 减少直接对dom进行操作，批量进行合并操作
- 使用虚拟dom，

- 双线程：
  - 主线程，单线程的，所有同步任务（如 JavaScript 执行、DOM 操作）
  - 渲染线程，责页面的布局（Layout）、绘制（Painting）和合成（Compositing），需要依赖主线程生成的 DOM 和 CSSOM 数据

### js 执行机制：
- 变量作用域：全局和局部作用域（有函数作用域和块级作用域）
- 作用域链：js 变量查找的机制，当访问一个变量属性或方法时，先
  从最内侧作用域找，如果没有找到 逐级向上找找，直到全局作用域
  闭包：函数嵌套函数，内部可以访问外部的函数变量
- this 指向
  - 全局上下文：window global
  - 函数调用：全局对象，严格模式下是undefined
  - 方法调用：this 指向调用者，对象
  - 构造函数：this 指向构造函数的实例对象
  - 箭头函数： 捕获上下文 this 值

- 原型链：js 对象继承机制。每个对象有原型对象，直接从原型对象继承属性和方法
  查找机制：1，先从自身查找，2，从原型对象查找，3，从原型对象的原型对象查找，4，从 Object.prototype 找，5，到 undefined

## 普通和箭头函数区别：
- 形式上：普通使用function 箭头函数使用 =>
- this 指向：普通函数 this 指向调用者，
  箭头函数 this 捕获所在上下文的this 值
- arguments：普通函数 arguments 是一个数组，
  箭头函数没有 arguments，但可以通过参数列表直接访问参数

- 变量提升：在函数或全局 顶部 声明变量，但变量值 undefined
   let const
###  如何判断一个对象是否继承自另一个对象
  - 判断对象继承关系可以通过 instanceof、isPrototypeOf() 和 Object.getPrototypeOf() 实现。

- intanceof 操作符 检查对象原型链是否有 构造函数的prototype 属性
```js
A() => {}
B() => {}
B.prototype = Object.create(A.prototype)


```
- 下载段模型，

- 