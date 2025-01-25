// 用户状态
import {createSlice} from '@reduxjs/toolkit';
import {request} from '@/utils';
import { setToken as _setToken,getToken } from '@/utils';


const userSlice =  createSlice({
    name:'user',
    // 数据状态
    initialState:{
        // token:localStorage.getItem('token_key') || '' // 后端string类型
        token:getToken() || '',
        userInfo:{}
    },
    reducers:{
        setToken:(state,action)=>{
            state.token = action.payload // paload 载荷赋值给token
            //localStorage.setItem('token_key',action.payload)
            _setToken(action.payload)
        },
        // 获取个人信息
        setUserInfo:(state,action)=>{ 
            state.userInfo = action.payload 
        }
    }
})
// 解构出actionCreater
const {setToken,setUserInfo} = userSlice.actions
// 异步 完成获取token
const fetchLogin = (loginForm:{ username: string; password: string }) => {
    return async (dispatch:any) => {
        try {
            // 1.异步请求
            const res = await request.post('/authorizations',loginForm)
            // 2.同步aciton获取token
            const token = res.data.token
            // 3.保存token
            dispatch(setToken(token))
            
        }catch (error) {
            console.log(error);
        }
    }
}
// 获取个人信息
const fetchUserInfo = () => {
    return async(dispatch:any) => {
        try {
           const res = request.get('/user/profile')
           // 提交action
           dispatch(setUserInfo(res.data))
        }
        catch (error) {
            console.log(error); 
        }
    }
}

// 获取reducer
const userReducer = userSlice.reducer

export {setToken,fetchLogin,fetchUserInfo,setUserInfo}
export default userReducer
