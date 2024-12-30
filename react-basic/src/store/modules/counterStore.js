import {createSlice} from "@reduxjs/toolkit";

const counterStore = createSlice ({
    name: "counter",
    // 初始state
    initialState: {
        count: 0,
    },
    // 改变state的方法 同步方法 支持直接修改
    reducers: {
        add(state) {
            state.count++
        },
        sub: (state) => {
            state.count--
        }
    }
})

// 按需导出
 const {add, sub} = counterStore.actions;
// 获取reducer
const reducer = counterStore.reducer;
// 默认导出
export default reducer;
export {add, sub}