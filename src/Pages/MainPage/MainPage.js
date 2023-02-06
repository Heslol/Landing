import React, { useState} from 'react'
import { posts} from '../../Share/data';
import Block from '../../Components/Block/Block';


export const MainPage = () => {

  const [postChanel, setPostChanel] = useState(posts);

  return (
    <>
      <div className='mainPage'>
        <ul className='main_list'>
        {postChanel.map((post, index) => {
          return (
              <li className='main_list_item' key={index}>
                <Block post={post} hover={true}/>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
