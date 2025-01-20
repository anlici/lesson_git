import {createSlice } from '@reduxjs/toolkit'

const billStore = createSlice({
    name: "billStore",
    // 数据状态
    initialState: {
        billList: []
    },
    reducers: {
        // 同步修改方法
        setBillList (state, action) {
            state.billList = action.payload
        }
    }
})  
// 解构
const {setBillList} = billStore.actions
// 导出reducer
const reducer = billStore.reducer
export {
    setBillList,
    reducer
}
export default billStore