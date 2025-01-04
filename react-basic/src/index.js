import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import {RouterProvider} from 'react-router-dom';

import router from './rooter';
import store from './store';
import {Provider} from 'react-redux';

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
