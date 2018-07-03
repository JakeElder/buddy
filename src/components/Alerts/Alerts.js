import React from 'react';
import classnames from 'classnames'
import SectionHeader from '../Header/SectionHeader'
import s from './Alerts.css';

console.log(s)

const Badge = ({ children }) =>
  <span className={s.badge}>{children}</span>

const Alert = ({
  priority,
  theme,
  messageCount,
  timeAgo
}) => (
  <li className={s.entry}>
    <span
      className={classnames(s.priority, s[`priority-${priority}`])}
    />
    <div className={s.metaAndTime}>
      <div className={s.themeAndMessageCount}>
        <span className={s.theme}>{theme}</span>
        <span className={s.messageCount}>{messageCount} messages</span>
      </div>
      <div>
        <Badge>{timeAgo}</Badge>
      </div>
    </div>
  </li>
)

const Alerts = ({ alerts }) => (
  <div>
    <SectionHeader>Alerts</SectionHeader>
    <ul className={s.alerts}>
      {alerts.map(alert =>
        <Alert key={`${alert.theme}-${alert.messageCount}`} {...alert} />
      )}
    </ul>
  </div>
)

export default Alerts
