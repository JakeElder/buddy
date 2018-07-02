import React from 'react';
import s from './SectionHeader.css'

const SectionHeader = ({ children, supplement }) => (
  <header className={s.sectionHeader}>
    <div className={s.sectionHeaderHeading}>
      {children}
    </div>
    {supplement &&
      <div className={s.sectionHeaderSupplement}>
        {supplement}
      </div>
    }
  </header>
)

export default SectionHeader
