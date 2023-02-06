import React  from 'react'
import { Button } from '../../Fcomponents/Button/Button'

export const CheckList = ({daySort, likeSort}) => {
  return (
    <div className='blogs_span'>
      <h4>Filter the blogs:</h4>
      <div className='blogs_content'>
        <Button value='By days'  onClick={daySort}/>
        <Button value='By likes' onClick={likeSort}/>
      </div>
    </div>
  )
}
