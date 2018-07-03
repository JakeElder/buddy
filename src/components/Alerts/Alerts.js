import React from 'react';
import SectionHeader from '../Header/SectionHeader'
import s from './Alerts.css';

const Badge = ({ children }) =>
  <span className={s.badge}>{children}</span>

const Alert = ({
  priority,
  theme,
  messageCount,
  timeAgo
}) => (
  <li className={s.alertsEntry}>
    <span
      className={`alertPriority Alert-priority-${priority}`}
    />
    <div className={s.alertMetaAndTime}>
      <div className={s.alertMessageount}>
        <span className={s.alert-theme}>{theme}</span>
        <span className={s.alertMessageCount}>{messageCount} messages</span>
      </div>
      <div className={s.alertTimeAgo}>
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
