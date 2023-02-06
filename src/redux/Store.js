import { configureStore } from '@reduxjs/toolkit'
import { blogsReducer } from './slices/blogs'

const store = configureStore({
    reducer : {
        blogs : blogsReducer,
    }
});

export default store;