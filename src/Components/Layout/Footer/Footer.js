import React from 'react'
import { Logotype } from '../../../Fcomponents/Logotype/Logotype'
import { ProfileIcon } from '../../../Fcomponents/ProfileIcon/ProfileIcon';
import fbIcon from '../../../Images/facebook.png'
import instaIcon from '../../../Images/instagram.png' 
import { Link } from 'react-router-dom';

export const Footer = ({image}) => {

  const year = new Date().getFullYear();

  return (
    <>
      <div className='footer'>
        <Link to='/'><Logotype image={image} title='time_Georgia'/></Link>
        <div className='footer_content'>
          <ul className='footer_content_list'>
            <li>
              <a href={'https://instagram.com/time.georgia?igshid=YmMyMTA2M2Y='}>
                <ProfileIcon image={instaIcon} width={30} height={30}/>
              </a>
            </li>
            <li>
              <a href={'https://vk'}>
                <ProfileIcon image={fbIcon} width={30} height={30}/>
              </a>
            </li>
          </ul>
        </div>
        <div className='footer_info'>
          <span>{year}</span>
          <Link to='#'>
            General license
          </Link>
          <span>All rights are reserved<br/>Coryrighting is aborted</span>
        </div>
      </div>
    </>
  )
}
