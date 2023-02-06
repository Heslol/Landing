import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../../Fcomponents/Button/Button';
import { Logotype } from '../../../Fcomponents/Logotype/Logotype';
import { User } from '../../User/User';

export const Header = ({onClickLogOut, image, accountName, isAuth, onClickHover}) => {

  return (
    <>
      <div className='header'>
        <Link to={'/'}>
          <Logotype image={image} title='time_Georgia' />
        </Link>
        {isAuth ?
          (<ul className='header_list'>
              <li className='header_list_item'>
                <Link to='/'>MainPage</Link>
              </li>
              <li className='header_list_item'>
                <Link to='/blogs'>Blogs</Link>
              </li>
              <li className='header_list_item'>
                <Link to='/propositions'>Tours</Link>
              </li>
              <li>
                <Link to='/post'><Button value='Add a post'/></Link>
              </li>
              <Link to='/'><User accountName={accountName} image={image} width={25} height={25}/></Link>
              <li>
                <Button value='Exit' onClick={() => onClickLogOut()}/>
              </li>
            </ul>
          ) : 
          (
            <>
              <Link to={'/login'}><Button value='Log in' onClick={() => onClickHover()}/></Link>
              <Link to={'/register'}><Button value='Register' onClick={() => onClickHover()}/></Link>
            </>
          )
        }
      </div>
    </>
  )
}
