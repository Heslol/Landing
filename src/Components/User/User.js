import React from 'react'
import { ProfileIcon } from '../../Fcomponents/ProfileIcon/ProfileIcon'
import avatar from '../../Images/avatar.png'

export const User = ({image, accountName, width, height, ...user}) => {
  return (
    <div className='user'>
      <ProfileIcon image={avatar || image} width={25 || width} height={25 || height}/>
      <span>{accountName || 'Heslol'}</span>
    </div>
  )
}
