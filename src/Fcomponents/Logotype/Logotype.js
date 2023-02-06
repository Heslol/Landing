import React from 'react'
import { ProfileIcon } from '../ProfileIcon/ProfileIcon'
import icon from '../../Images/Logo.jpeg'

export const Logotype = ({title, image}) => {
  return (
    <>
        <div className='logo'>
          <ProfileIcon image={icon} width={30} storyBorder='logo'/>
          <span>{title}</span>
        </div>
    </>
  )
}
