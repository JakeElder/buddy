import React from 'react';

const SectionHeader = ({ children, supplement }) => (
  <header className="SectionHeader">
    <div className="SectionHeader-heading">
      {children}
    </div>
    {supplement &&
      <div className="SectionHeader-supplement">
        {supplement}
      </div>
    }
  </header>
)

export default SectionHeader
