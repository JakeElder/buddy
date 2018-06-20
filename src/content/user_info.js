import React, { Component } from 'react';
import icon from '../images/icon.svg'

const UserInfo = () => (
  <header className="Section-heading">
   <div className="Title">
    Account
    </div>
    <div className="LogOut">
    Log Out
    </div>
    <div className="Avatar">
    <span className="Avatar-icon">
      <img className="Avatar-icon-img" src={icon} />
    </span>
    <span className="Avatar-icon-text">
      Moderator
    </span>
    </div>
  </header>

)

export default UserInfo