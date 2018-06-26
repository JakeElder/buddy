import React from 'react';
import { Badge } from 'reactstrap';

const Alerts = () => (
  <div>
    <header className="Alert-heading">
      <div className="Alert-title">
        Alerts
      </div>
    </header>
    <div className="Alert-body">
      <div className="Grooming-theme-color">
        <div className="Alert-theme-and-message-count">
          <div className="Alert-theme">
            Grooming
          </div>
          <div className="Alert-message-count">
            33 messages
          </div>
          <div className="Alert-time">
            <Badge>12 minutes ago</Badge>
          </div>
        </div>
      </div>
    </div>
    <div className="Alert-body">
      <div className="Abuse-theme-color">
        <div className="Alert-theme-and-message-count">
          <div className="Alert-theme">
            Abuse
          </div>
          <div className="Alert-message-count">
            22 messages
          </div>
          <div className="Alert-time">
            <Badge>35 minutes ago</Badge>
          </div>
        </div>
      </div>
    </div>
    <div className="Alert-body">
      <div className="Self-harm-theme-color">
        <div className="Alert-theme-and-message-count">
          <div className="Alert-theme">
            Self-harm
          </div>
          <div className="Alert-message-count">
            112 messages
          </div>
          <div className="Alert-time">
            <Badge>40 minutes ago</Badge>
          </div>
        </div>
      </div>
    </div>
    <div className="Alert-body">
      <div className="Harassment-theme-color">
        <div className="Alert-theme-and-message-count">
          <div className="Alert-theme">
            Harassment
          </div>
          <div className="Alert-message-count">
            18 messages
          </div>
          <div className="Alert-time">
            <Badge>41 minutes ago</Badge>
          </div>
        </div>
      </div>
    </div>
    <div className="Alert-body">
      <div className="Fraud-detection-theme-color">
        <div className="Alert-theme-and-message-count">
          <div className="Alert-theme">
            Fraud-detection
          </div>
          <div className="Alert-message-count">
            87 messages
          </div>
          <div className="Alert-time">
            <Badge>46 minutes ago</Badge>
          </div>
        </div>
      </div>
    </div>
    <div className="Alert-body">
      <div className="Hate-speech-theme-color">
        <div className="Alert-theme-and-message-count">
          <div className="Alert-theme">
            Hate-speech
          </div>
          <div className="Alert-message-count">
            15 messages
          </div>
          <div className="Alert-time">
            <Badge>46 minutes ago</Badge>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Alerts
