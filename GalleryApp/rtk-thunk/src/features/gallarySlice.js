import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotos=createAsyncThunk(
    'photos/getphotos',
    async () =>{
        const response =await fetch('https://picsum.photos/v2/list?page=3&limit=9');
        const formattedResponse=await response.json();
        return formattedResponse;
    }
)

const initialState={
    photos:[],
    isLoading:false
}
export const gallarySlice=createSlice({
    name:"gallery",
    initialState,
    reducer:{},
    extraReducers:{
        [getPhotos.pending]: (state) => {
            state.isLoading=true;
        },
        [getPhotos.fulfilled]:(state,action)=>{
            state.photos=action.payload;
            state.isLoading=false;
        }
    }

})
export default gallarySlice.reducer;