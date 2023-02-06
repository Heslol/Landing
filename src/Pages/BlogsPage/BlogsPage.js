import React, { useEffect, useState }  from 'react';
import { CheckList } from '../../Components/CheckList/CheckList';
import { blogCard } from '../../Share/data';
import { BlogList } from '../../Fcomponents/BlogList/BlogList';

export const BlogsPage = () => {
  const [blogs, setBlogs] = useState(blogCard);
  const [hover, setHover] = useState(true)

  const deleteItem = (id) => {
    setBlogs((prevState) => {
      const idx = prevState.findIndex((item) => item.id === id)
      return [...prevState.slice(0, idx), ...prevState.slice(idx + 1)]
    });
  };

  const sortItem = () => {
    setBlogs((prevState) => [...prevState.sort((a, b) => a.date - b.date)])
  };
  const sortByLikes = () => {
    setBlogs((prevState) => [...prevState.sort((a, b) => b.likeCount - a.likeCount)])
  };

  const editItem = (id) => {
    setBlogs((prevState) => {
      const idx = prevState.findIndex((item) => item.id === id);
      const oldItem = prevState[idx];
      const newItem = {...oldItem, isDone : !oldItem.isDone};
      return [...prevState.slice(0, idx), newItem, ...prevState.slice(idx + 1)]
    });
  };

  const addItem = (id) => {
    setBlogs((prevState) => {
      const newItem = { title : 'Your title', text : 'Your text', likeCount : 0, views : 1, date : new Date().getDate()};
      const idx = prevState.findIndex((item) => item.id === id);
      return [...prevState.slice(0, idx + 1), newItem, ...prevState.slice(idx + 2)];
    });
  };

  return (
    <div className='blogs'>
      <CheckList daySort={sortItem} likeSort={sortByLikes}/>
      <BlogList blogs={blogs} onDelete={deleteItem} onEdit={editItem} onAdded={addItem} />
    </div>
  )
}
