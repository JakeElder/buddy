import React from 'react';
import s from './SectionHeader.css'

const SectionHeader = ({ children, supplement }) => (
  <header className={s.root}>
    <div className={s.heading}>
      {children}
    </div>
    {supplement &&
      <div className={s.supplement}>
        {supplement}
      </div>
    }
  </header>
)

export default SectionHeader
