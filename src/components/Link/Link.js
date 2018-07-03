import React from 'react'
import s from './Link.css'

const Link = ({ children, ...rest }) => (
  <a className={s.root} {...rest}>{children}</a>
)

export default Link
