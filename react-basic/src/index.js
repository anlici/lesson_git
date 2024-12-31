import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import {RouterProvider} from 'react-router-dom';

import router from './rooter';
import store from './store';
import {Provider} from 'react-redux';
// // 1.创建router 实例对象
// const router = createBrowserRouter([
//   {
//     path:'/login',
//     element: <div>登录页</div>
//   },
//   {
//     path:'/home',
//     element: <div>首页</div>
//   }
// ])
// // 2.创建路由规则
// // 3.渲染路由

// react-redux 连接redux和react

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provider 注入store */}
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
