import {createBrowserRouter} from 'react-router-dom'
import Layout from '../pages/Layout'
import Month from '../pages/Month'
import Year from '../pages/Year'
import New from '../pages/New'
// 导入定制主题文件
import '../theme.css'

const roots = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "month",
                element: <Month />,
                index: true
            },{
                path: "year",
                element: <Year />,
            }
        ]
        
    },{
        path: "/new",
        element: <New />,
    }
])

export default roots