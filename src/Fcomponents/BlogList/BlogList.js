import React from 'react'
import { Blog } from '../../Components/Blog/Blog';

export const BlogList = ({blogs, onEdit, onDelete, onAdded}) => {

  return (
    <>
      {blogs.map((blog, index) => {
        const tags = ['Bagrati', 'Batumi', 'Tbilisi', 'Tschaltubo', 'Georgia','cheerful', 'history'];
        const day = `${Math.abs(new Date().getDate() - blog.date)} days ago`;
        console.log(day)
        return ( 
          <li key={index} className='blogs_list_item'>
            <Blog blog={blog} onDelete={onDelete} onEdit={onEdit} day={day} tags={tags} key={blog.id} onAdded={onAdded}/>
          </li> 
        )
      })}
    </>
  )
}

