import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";
const channelStore = createSlice( {
    name: "channel",
    initialState: {
        channelList: [],
    },
    reducers: {
        setChannels(state,action) {
            state.channelList = action.payload;
        }
    }
})


// 异步请求
const fetchChannelList = () => {
    // 使用 '' 模板字符串
    const url = 'http://geek.itheima.net/v1_0/channels';
    // 异步完成，dispatch分发action，执行reducer，更新state
    return async (dispatch) => {
        const res = await axios.get(url)
        // dispatch
        dispatch(setChannels(res.data.data.channels))
    }
}

export {fetchChannelList}
export const {setChannels} = channelStore.actions;
export default channelStore.reducer;
