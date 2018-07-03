import React from 'react';
import s from './DetailsList.css'

const DetailsList = ({ entries }) => (
  <ul className={s.root}>
    {Object.keys(entries).map(k => (
      <li className={s.entry}key={k}>
        <span className={s.key}>{k}:</span>
        <span className={s.value}>{entries[k]}</span>
      </li>
    ))}
  </ul>
)

export default DetailsList
