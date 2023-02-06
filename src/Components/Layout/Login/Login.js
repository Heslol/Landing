import React, { useState } from 'react'
import { User } from '../../User/User';
import { Input } from '../../../Fcomponents/Input/Input';
import { Button } from '../../../Fcomponents/Button/Button';
import { links } from '../../../Share/data';

export const Login = ({accountName, password, image, onClickLogIn}) => {
  
  const [acName, setAccountName] = useState(accountName);
  const [passwordValue, setPassword] = useState(password)
  const [apps, setApps] = useState(links);

  return (
    <div className='login'>
      <h3>Have account?</h3>
      <User accountName='User' image={image}/>
      <Input value={acName} onChange={(e) => setAccountName(e.target.value)} placeholder='Account name'/>
      <Input value={passwordValue} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
      <Button value='Log in' onClick={() => onClickLogIn()}/>
      <ul className='login_list'>
      {apps.map((item) => {
        return (
          <li key={item.id}>
            <a href={item.link}>{item.text}</a>
          </li>
        )
      })}
      </ul>  
    </div>
  )
}
