import React from 'react'
import { Route, Routes} from 'react-router-dom';
import { BlogsPage } from '../../Pages/BlogsPage/BlogsPage';
import { MainPage } from '../../Pages/MainPage/MainPage';
import { Likes } from '../../Pages/Likes/Likes'
import { FullBlog } from '../../Pages/FullBlog/FullBlog';
import { Login } from '../../Components/Layout/Login/Login';
import { AddBlogPage } from '../../Pages/AddBlogPage/AddBlogPage';
import { Register } from '../../Components/Layout/Register/Register';

export const Navigation = () => {
  return (
    <Routes>
        <Route path='/' element={< MainPage/>} />
        <Route path='/blogs' element={< BlogsPage/>}/>
        <Route path='/post' element={<AddBlogPage/>}/>
        <Route path='/propositions' element={< Likes/>}/>
        <Route path='/posts/:id' element={<FullBlog/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}
