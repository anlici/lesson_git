import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 import textJsx from './components/text.jsx'
import Props from './components/Props.jsx'
import Context from './components/Context.jsx'

import Effect from './components/effect.jsx'
let x = 10
let y = 20

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    {/* <App />
    <textJsx /> */}
    {/* <Props /> */}
    {/* <Context /> */}
    <Effect />
    </>
    
    // <>
    //     <h2 className="title">10.24早安</h2>
    //     <div className="box">
    //         <span>{x}</span>
    //         <br />
    //         <span>{y}</span>
    //     </div>
    // </>
    
//   <React.StrictMode> 
//     {/*  启用严格模式 */}
   

)
