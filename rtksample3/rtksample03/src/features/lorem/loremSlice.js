import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPost } from "../../store/userApi";
const initialState={
    posts:[],
    status:"idle"
}

export const fetchPostAsync =createAsyncThunk(
    "post/fetch",
    async()=>{
        return await fetchPost();
    }
)

const loremSlice=createSlice({
    name:"data",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPostAsync.pending,(state)=>{
            state.status="loading";
            state.posts=[];
        })
        .addCase(fetchPostAsync.fulfilled,(state,action)=>{
            state.status="loaded";
            state.posts=action.payload;
        })
    }

})


export default loremSlice.reducer;