import React from 'react'

const Link = ({ children, ...rest }) => (
  <a className="Link" {...rest}>{children}</a>
)

export default Link
