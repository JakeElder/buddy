import React from 'react';
import s from './DetailsList.css'

const DetailsList = ({ entries }) => (
  <ul className={s.detailsList}>
    {Object.keys(entries).map(k => (
      <li className={s.detailsListEntry}key={k}>
        <span className={s.detailsListKey}>{k}:</span>
        <span className={s.detailsListValue}>{entries[k]}</span>
      </li>
    ))}
  </ul>
)

export default DetailsList
