import React from 'react'
import '../../scss/Layout.scss'
import { Header } from './Header/Header'
import { Footer} from './Footer/Footer'
import { Login } from './Login/Login'
import { Register } from './Register/Register'

export const Layout = ({isAuth, onClickLogOut, onClickHover}) => {
  return (
    <>
        <div className='layout'>
          <Header isAuth={isAuth} onClickLogOut={onClickLogOut} onClickHover={onClickHover}/>
          <Footer/>
        </div>
    </>
  )
}
