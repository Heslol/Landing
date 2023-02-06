import React from 'react'
import { Login } from '../../Components/Layout/Login/Login'
import { Register } from '../../Components/Layout/Register/Register'

export const FirstPage = ({hover, onClickLogIn}) => {



  return (
    <>
      <div className='FirstPage'>
        {hover && (<Login onClickLogIn={onClickLogIn}/>)} 
        {!hover && (<Register onClickLogIn={onClickLogIn}/>)}
      </div>
    </>
  )
}
