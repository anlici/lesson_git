
import { useSelector,useDispatch} from "react-redux";
import {add,sub} from "./store/modules/counterStore";
function App() {
  // counter 是 counterReducer 中的 state 
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(add())}>+</button>
      {count}
      <button onClick={() => dispatch(sub())}>-</button>
    </div>
  );
}

export default App;
