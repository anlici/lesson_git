import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Article from '../pages/Article';
import Board from '../pages/Board';
import About from '../pages/About';
import Layout from '../pages/Layout';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // 默认二级路由
      {
        // path:'/board',
        index: true,
        element: <Board />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/article',
    // path: '/article/:id/:name',
    element: <Article />,
    
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
