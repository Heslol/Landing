import React, { useEffect, useState } from 'react';
import Block from '../../Components/Block/Block';
import { Button } from '../../Fcomponents/Button/Button';
import { Input } from '../../Fcomponents/Input/Input';

export const AddBlogPage = ({onAdded}) => {

    const [value, setTitle]  = useState('');
    const [valueId, setText] = useState('');
    const [hover, setHover]  = useState(true);

    const SubmitEvent = (e) => {
        e.preventDefault();
        setHover((prevState) => !prevState)
    };

    useEffect(() => {
        
    }, [value, valueId])

    return (
        <>
            <div className='new_blog'>
            {hover ?
                (<>
                    <div className='new_blog_title'>
                        <h2>Your title:</h2>
                        <Input name={value} onChange={((e) => setTitle(e.target.value))}/>
                    </div>
                    <div className='new_blog_subtitle'>
                        <h2>Your text:</h2>
                        <Input name={valueId} onChange={(e) => setText(e.target.value)}/>
                    </div>
                    <Block post={false} hover={true}/>
                    <Button value='Make a new post' onClick={(e) => SubmitEvent(e)}/>
                </>) :
                (
                    <div className='new_blog_news'>
                        <p>
                            <h5>Added successfully</h5>
                            <span className="material-symbols-outlined">done</span>
                        </p>
                    </div>
                )
            }
            </div>
        </>
    )
}
