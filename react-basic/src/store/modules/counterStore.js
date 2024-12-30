import {createSlice} from "@reduxjs/toolkit";

const counterStore = createSlice ({
    name: "counter",
    // 初始state
    initialState: {
        count: 0,
        title: "计数器"
    },
    // 改变state的方法 同步方法 支持直接修改
    reducers: {
        add(state) {
            state.count++
        },
        sub: (state) => {
            state.count--
        },
        // 异步方法 不支持直接修改 必须通过action.payload
        // action 是一个对象 包含type和payload
        addNum(state, action) {
            state.count += action.payload
        }
    }
})

// 按需导出
export const {add, sub,addNum} = counterStore.actions;
// 获取reducer
const reducer = counterStore.reducer;
// 默认导出
export default reducer;
