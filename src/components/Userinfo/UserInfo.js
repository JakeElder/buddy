import React from 'react';
import DetailsList from '../../components/DetailsList'
import SectionHeader from '../../components/SectionHeader'
import Link from '../../components/Link'
import icon from '../../images/icon.svg'
import s from './Userinfo.css'

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
