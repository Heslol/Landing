import React, { useState } from 'react'
import Block from '../Block/Block';
import { User } from '../User/User';
import { Button } from '../../Fcomponents/Button/Button';
import { Input } from '../../Fcomponents/Input/Input';
import { NavLink } from 'react-router-dom';


export const Blog = ({blog, onDelete, onEdit, tags, accountName, day}) => { 

    const [value, setValue] = useState('');
    const [valueId, setValueId] = useState('');
    const [likes, setLikes] = useState(blog.likeCount);

    const likeClick = () => {
        setLikes((prevState) => {
            if(likes === blog.likeCount) {
                return prevState + 1
            } else {
                return prevState - 1
            }
        });
    };

    return (
    <>  
        <div className='blog' key={blog.id}>
            <header>
                <User accountName={accountName} />
                <Button value='Delete' onClick={() => onDelete(blog.id)}/>
                <Button value='Edit' onClick={(e) => onEdit(blog.id, e)}/>
            </header>
            <div className='blog_content'>
                <h2 className='blog_content_title'>{blog.isDone ? (<Input name={value} placeholder='Enter your title' onChange={(e) => setValue(e.target.value)}/>) : blog.title}</h2>
                <ul className='blog_content_list'>
                    {tags.map((name) => (
                    <li key={name} className='blogs_content_list_item'><NavLink onClick={(e) => e.preventDefault()} to={`/tag/${name}`}>#{name.toUpperCase()}</NavLink></li>
                ))}
                </ul>
                {blog.imageUrl && (<Block post={blog}/>)}
                <div className='blog_content_subtitle'>
                    <span>{blog.isDone ? (<Input name={valueId} placeholder={valueId} onChange={(e) => setValueId(e.target.value)}/>) : blog.text}</span>
                </div>
                <div className='blog_content_icons'>
                    <p className='blog_content_icons_like'>
                        <span className="material-symbols-outlined" onClick={() => likeClick()}>favorite</span><span>{likes}</span>
                    </p>
                    <p className='blog_content_icons_view'>
                        <span className='material-symbols-outlined'>visibility</span><span>{blog.views}</span>
                    </p>
                    <span className='blog_content_time'>Was posted {day}</span>
                </div> 
            </div>
        </div>
    </>
    )
}