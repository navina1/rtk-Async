import {configureStore} from '@reduxjs/toolkit';
import gallarySlice from '../features/gallarySlice';

export const store=configureStore({
    reducer:{
        gallery:gallarySlice
    }
})