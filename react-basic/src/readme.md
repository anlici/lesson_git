## 

# useDispatch
    修改store 里面数据，hook函数useDispatch 生成提交对象的dispatch 函数，useSelector 生成获取对象的函数

- 哪个获取store数据
  useSelector
- 哪个修改store数据
  useDispatch
- 得到action对象
  执行store 模块导出的actionCreater方法

- 当你调用一个 action creator 时，它会返回一个 action 对象，这个 action 对象会被 dispatch 到 Redux store，然后 Redux store 会调用相应的 reducer 函数，并将当前的 state 和 action 对象作为参数传递给它。reducer 函数会根据 action 对象的 type 和 payload 属性来更新 state，并返回一个新的 state。