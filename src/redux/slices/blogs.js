import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogs : {
        items : [],
        status : 'loading'
    },
    tags : {
        items : [],
        status : 'loading'
    },
};

const blogsSlice = createSlice({
    name : 'blogs',
    initialState,
    reducer : {}
});

export const blogsReducer = blogsSlice.reducer