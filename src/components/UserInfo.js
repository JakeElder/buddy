import React from 'react';
import DetailsList from './DetailsList'
import SectionHeader from './SectionHeader'
import Link from './Link'
import icon from '../images/icon.svg'

const UserInfo = () => (
  <div>
    <SectionHeader supplement={<Link>Log out</Link>}>
      Account
    </SectionHeader>
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
