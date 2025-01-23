import {createBrowserRouter} from 'react-router-dom'
import Layout from '@/pages/Layout'
import Article from '@/pages/Article'
import Home from '@/pages/Home'
import Login  from '@/pages/Login'
import { AuthRoute } from '@/components/AuthRoute'
// 导入定制主题文件
import '@/theme.css'

const roots = createBrowserRouter([
    {
        path: "/",
        element: <AuthRoute><Layout /></AuthRoute>,
        children: [
            
        ]
    },
    {
        path: "/login",
        element: <Login />,
    }
])

export default roots