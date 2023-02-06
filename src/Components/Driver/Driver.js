import React, { useState } from 'react'
import { ProfileIcon } from '../../Fcomponents/ProfileIcon/ProfileIcon';

export const Driver = ({driver}) => {

    const {photo, id, name, car, carPhoto, isReady, experience} = driver;

    return (
    <div className='driver'>
        <ProfileIcon image={photo} width={80} height={60} storyBorder='logo'/>
        <header>
            <h2>{name}</h2>
        </header>
        <div className='driver_car'>
            <h4>Car: {car}</h4>
            <div className='driver_car_photo'>
                <ProfileIcon image={carPhoto}/>
                <ProfileIcon image={carPhoto}/>
            </div>
        </div>
        <div className='driver_info'>
            <p>Hi! My name is {name}, I am professional driver with <b>{experience}</b> years of experience. Let`s get a great trip!</p>
            <span className='driver_status'>status: {isReady && !isReady}</span>
        </div>
    </div>
  )
}
