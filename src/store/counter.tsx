import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/getData";

// 异步请求数据
export const fetchUserInfo = createAsyncThunk(
  "counter/fetchUserInfo",
  async () => await API.getData()
);

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    title: "计算器",
    user: [],
    address: [],
  },
  reducers: {
    increment(state, action) {
      state.count = state.count + action.payload;
    },
    decrement(state, action) {
      state.count = state.count - action.payload;
    },
    getAsyncData(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.pending, () => {
      console.log("进行中");
    });
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.address = action.payload.data;
    });
    builder.addCase(fetchUserInfo.rejected, (state, err) => {
      console.log(err);
    });
  },
});

const { actions, reducer } = CounterSlice;

export const { increment, decrement, getAsyncData } = actions;

export default reducer;
