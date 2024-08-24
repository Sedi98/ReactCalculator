import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer}> © 2024{ new Date().getFullYear() > 2024 ? `-${new Date.getFullYear()}` : ''} <a href="https://github.com/Sedi98" target="_blank">Sadi Mammadov</a>. All rights reserved. </div>
  )
}

export default Footer