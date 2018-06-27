import React from 'react'
import logo from '../../images/logo.svg'
import s from './Header.css'

const Header = () => (
  <header className={s.root}>
    <span className={s.logo}>
      <img alt="" className={s.img} src={logo} />
    </span>
    <span>Buddy</span>
  </header>
)

export default Header
