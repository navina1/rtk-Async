import {configureStore} from '@reduxjs/toolkit'
import loremSlice from '../features/lorem/loremSlice'

export const store=configureStore({
    reducer:{
        data:loremSlice
    }
})