import React, { useState } from 'react'
import { Button } from '../../../Fcomponents/Button/Button'
import { Input } from '../../../Fcomponents/Input/Input'
import { links } from '../../../Share/data'
import { User } from '../../User/User'

export const Register = () => {
    const [value, setValue] = useState('');
    const [apps, setLinks] = useState(links);
   return (
    <div className='register_page'>
      <h3>Registration</h3>
      <User accountName='User' />
      <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Full name'/>
      <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Account name'/>
      <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder='E-mail'/>
      <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Password'/>
      <Button value='Registration' />
      <ul className='register_page_list'>
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
