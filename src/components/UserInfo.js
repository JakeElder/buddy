import React from 'react';
import DetailsList from './DetailsList'
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
            <img alt="" className="Avatar-icon" src={icon} />
            <span className="Avatar-icon-text">
              Moderator
            </span>
          </div>
        </div>
        <div className="UserInfo-details">
          <DetailsList
            entries={{
              "Email": "person@place.com",
              "Organisation": "Some Place"
            }}
          />
        </div>
      </div>
    </div>
  </div>
)

export default UserInfo
