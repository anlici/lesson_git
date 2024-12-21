import React  from "react";
import ReactDom from ' react-dom/client'; // 导入react-dom/client模块，为了使用createRoot方法

const root = ReactDom.createRoot(document.getElementById('root'));

let text = 'Day1 react'
root.render(
    <div>
        <p></p>
        <p></p>
        <p></p>
        <h1>{text}</h1>
    </div>
   
)

