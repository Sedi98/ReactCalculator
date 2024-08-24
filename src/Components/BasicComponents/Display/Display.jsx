import React from 'react'
import style from './Display.module.css'
import DisplayContext from '../../../Context/DisplayContext'
import { useContext } from 'react'

const Display = () => {
  const { display } = useContext(DisplayContext)
  return (
    <div className={style.display}>{display}</div>
  )
}

export default Display