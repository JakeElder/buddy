import React from 'react'
import s from './Container.css'

const Container = ({ children }) => (
  <div className={s.root}>
    {children}
  </div>
)

export default Container
