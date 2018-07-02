import React from 'react'
import s from './Link.css'

const Link = ({ children, ...rest }) => (
  <a className={s.link} {...rest}>{children}</a>
)

export default Link
