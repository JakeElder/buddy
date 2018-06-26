import React from 'react'
import logo from '../images/logo.svg'

const Header = () => (
  <header className="Header">
    <span className="Header-logo">
      <img alt="" className="Header-logo-img" src={logo} />
    </span>
    <span className="Header-logo-text">
      Buddy
    </span>
  </header>
)

export default Header
