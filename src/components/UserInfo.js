import React, { Component } from 'react';
import icon from '../images/icon.svg'

const UserInfo = () => (
  <div>
    <header className="UserInfo-heading">
      <div className="UserInfo-title">
        Account
      </div>
      <div className="UserInfo-logout">
        Log Out
      </div>
    </header>
    <div className="UserInfo-body">
      <div className="UserInfo-avatar-and-details">
        <div className="UserInfo-avatar">
          <div className="Avatar">
            <img className="Avatar-icon" src={icon} />
            <span className="Avatar-icon-text">
              Moderator
            </span>
          </div>
        </div>
        <div className="UserInfo-details">
          <div className="DetailsList">
            <div id="email">
              <label for="weight">Email:</label>person@place.com
            </div>
            <div id="organisation">
              <label for="weight">Organisation:</label>Some Place
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default UserInfo
