// 用户状态
import {createSlice} from '@reduxjs/toolkit';
import request from '@/utils/request';

const userSlice =  createSlice({
    name:'user',
    // 数据状态
    initialState:{
        token:localStorage.getItem('token_key') || '' // 后端string类型
    },
    reducers:{
        setToken:(state,action)=>{
            state.token = action.payload // paload 载荷赋值给token
            localStorage.setItem('token_key',action.payload)
        },
        clearToken:(state)=>{
            state.token = ''
        }
    }
})
// 解构出actionCreater
const {setToken,clearToken} = userSlice.actions
// 获取reducer
const userReducer = userSlice.reducer
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
export {setToken,clearToken,fetchLogin}
export default userReducer
