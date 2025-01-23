# useDispatch
    修改store 里面数据，hook函数useDispatch 生成提交对象的dispatch 函数，useSelector 生成获取对象的函数

- 哪个获取store数据
  useSelector
- 哪个修改store数据
  useDispatch
- 得到action对象
  执行store 模块导出的actionCreater方法

- 当你调用一个 action creator 时，它会返回一个 action 对象，这个 action 对象会被 dispatch 到 Redux store，然后 Redux store 会调用相应的 reducer 函数，并将当前的 state 和 action 对象作为参数传递给它。reducer 函数会根据 action 对象的 type 和 payload 属性来更新 state，并返回一个新的 state。

## 前端路由
- 一个path 对应一个组件component 当浏览器访问path，path 对应组件进行页面渲染
ReactRouter

## 路由导航
- 登入页

- 声明式导航
  - <Link to = "/home">
- 编程式导航
  - useNavigate()
  - history.push("/home")
## 传参
- searchParams 传参
- useSearchParams()

- params 传参
- 在rooter 中配置 ：name /:id

## 嵌套路由
- layout component 一级路由组件
- index component 二级路由组件，二级路由出口

children 属性配置路由嵌套
outlet 组件 二级路由出口
## 默认二级路由

只需要二级路由去掉path，设置index 属性为true
 
## 404 用户体验
- 路由配置中最后配置
- 左边notfound 右边*

## react 两种路由模式
- hash
- history