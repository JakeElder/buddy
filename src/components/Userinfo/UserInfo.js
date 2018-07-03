import React from 'react';
import DetailsList from '../DetailsList'
import SectionHeader from '../SectionHeader/SectionHeader'
import Link from '../Link'
import icon from '../../images/icon.svg'
import s from './UserInfo.css'

const UserInfo = () => (
  <div>
    <SectionHeader supplement={<Link>Log out</Link>}>
      Account
    </SectionHeader>
    <div className={s.avatarDetails}>
      <div className={s.avatarInfo}>
        <div className={s.avatar}>
          <img alt="" className={s.icon} src={icon} />
          <span className={s.iconText}>
            Moderator
          </span>
        </div>
      </div>
      <div className={s.userDetails}>
        <DetailsList
          entries={{
            "Email": "person@place.com",
            "Organisation": "Some Place"
          }}
        />
      </div>
    </div>
  </div>
)

export default UserInfo
