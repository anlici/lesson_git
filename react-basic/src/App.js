import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {add,sub,addNum } from "./store/modules/counterStore";
import {fetchChannelList} from "./store/modules/channelStore";
function App() {
  // counter 是 counterReducer 中的 state 
  const { count } = useSelector((state) => state.counter);
  const {channelList } = useSelector((state) => state.channel);
  const dispatch = useDispatch();
  // useEffect 触发异步
useEffect( () => {
  dispatch(fetchChannelList())
},[dispatch])
  return (
    <div className="App">
      <button onClick={() => dispatch(add())}>+</button>
      {count}
      <button onClick={() => dispatch(sub())}>-</button>
      <button onClick={() => dispatch(addNum(10))}>+10</button>
      <ul>
        {
          channelList.map((item) => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
