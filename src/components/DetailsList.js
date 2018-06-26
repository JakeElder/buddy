import React from 'react';

const DetailsList = ({ entries }) => (
  <ul className="DetailsList">
    {Object.keys(entries).map(k => (
      <li className="DetailsList-entry" key={k}>
        <span className="DetailsList-key">{k}:</span>
        <span className="DetailsList-value">{entries[k]}</span>
      </li>
    ))}
  </ul>
)

export default DetailsList
