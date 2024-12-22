import { useState } from 'react'
import React from 'react'
import createElement from './index.jsx'
let flag = false;
let styObj = {
  fontSize: '20px',
  color: 'red'
}

function App() {
  // useState 钩子函数，两个状态变量，count 是状态值，setCount 是更新状态值的函数
    const  [count, setCount] = useState(0)
    const increment = () => {
      // setCount(count + 1)
      // setCount(preCount => preCount + 1)
      setCount(preCount  => {return 
        preCount + 1
      });
    }
    return(
      <>
        {/* <button type="button" 
        style={{
          display: flag ? 'block': 'none'
        }}>按钮</button>
        <br />
        {flag ? <button> 按钮</button>: null}
        <br />
        {/* {new Array(5).fill(1).map((_,index) => {
           return(
            <button key={index}>按钮{index+1}</button>
           )
        })} */}
        
        
        <button type="button" onClick={() => {
              setCount(count + 1)
        }}>按钮{count}</button> 
        <br />
        <h2 style={styObj}>12.22早安,舒服！！</h2>
        {React.createElement('button',null,'按钮')}
      </>
    )
    
}
console.log(
  createElement(
    React.Fragment,
    null,
    createElement(
      "button",
      {
        type: "button",
        style: {
          display: "block"
        }
      },
      "按钮"
    ),
    createElement(
       "h2",
       {style: styObj},
       "12.22早安,舒服！！"
    )
  )
);
export default App
