import React from 'react';

const Badge = ({ children }) =>
  <span className="Badge">{children}</span>

const Alert = ({
  priority,
  theme,
  messageCount,
  timeAgo
}) => (
  <li className="Alerts-entry">
    <span
      className={`Alert-priority Alert-priority-${priority}`}
    />
    <div className="Alert-meta-and-time">
      <div className="Alert-theme-and-message-count">
        <span className="Alert-theme">{theme}</span>
        <span className="Alert-message-count">{messageCount} messages</span>
      </div>
      <div className="Alert-time-ago">
        <Badge>{timeAgo}</Badge>
      </div>
    </div>
  </li>
)

const Alerts = ({ alerts }) => (
  <div>
    <header className="Alert-heading">
      <div className="Alert-title">
        Alerts
      </div>
    </header>
    <ul className="Alerts">
      {alerts.map(alert =>
        <Alert key={`${alert.theme}-${alert.messageCount}`} {...alert} />
      )}
    </ul>
  </div>
)

export default Alerts
