import React, { useState } from 'react'
import { Button } from '../../Fcomponents/Button/Button';
import Block from '../Block/Block';

export const Tour = ({tours, onAdded, hover}) => {
    
  return (
    <>
        {tours.map((tour, index) => {
            const {id, title, text, inherit, price} = tour;
            return (
                <div className='post' key={index}>
                    <header>
                        <h2 className='post_title'>{title}</h2>
                    </header>
                    <Block hover={hover} post={tour}/>
                    <div className='post_info'>
                        <span className='post_text'>{text}</span>
                        <ul>
                            <h6></h6>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <div className='post_price'>
                            <h4>{price} Gel</h4>
                            <Button value='Add new Tour' onClick={() => onAdded(id)}/>
                        </div>
                    </div>
                </div>  
            )
        })}
    </>
  )
}
