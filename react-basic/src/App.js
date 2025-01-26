// import React, {useEffect} from "react";
// import {useSelector,useDispatch} from "react-redux";
// import {add,sub,addNum } from "./store/modules/counterStore";
// import {fetchChannelList} from "./store/modules/channelStore";
// function App() {
//   // counter 是 counterReducer 中的 state 
//   const { count } = useSelector((state) => state.counter);
//   const {channelList } = useSelector((state) => state.channel);
//   const dispatch = useDispatch();
//   // useEffect 触发异步
// useEffect( () => {
//   dispatch(fetchChannelList())
// },[dispatch])
//   return (
//     <div className="App">
//       <button onClick={() => dispatch(add())}>+</button>
//       {count}
//       <button onClick={() => dispatch(sub())}>-</button>
//       <button onClick={() => dispatch(addNum(10))}>+10</button>
//       <ul>
//         {
//           channelList.map((item) => {
//             return <li key={item.id}>{item.name}</li>
//           })
//         }
//       </ul>
//     </div>
//   );
// }

// export default App;

// 1.定义useReducer
function reducer (state,action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'sub':
      return state - 1
    case 'addNum':
      return state + action.num
    default:
      return state
  }
}
// 2.定义useReducer

// 3.调用dispatch({type: 'add'} ) 触发reducer,更新新的state
function App() {
  const [state,dispatch] = useReducer(reducer,0)
  return (
    <div>
      <h1>当前求和为:{state}</h1>
      <button onClick={() => dispatch({type: 'add'})}>+1</button>
      <button onClick={() => dispatch({type: 'sub'})}>-1</button>
      <button onClick={() => dispatch({
        type: 'addNum',
        num: 10
      })} >+10</button>
    </div>
  )
}