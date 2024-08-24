import React from 'react'
import style from './Button.module.css'
import { useContext } from 'react'
import  DisplayContext  from '../../../Context/DisplayContext'

const Button = ({type, value}) => {

  const {handleClick} = useContext(DisplayContext)
  return (
    <div className={style.button} onClick={(e) => handleClick(e.target.innerText,type)}>
      <span style={{color: type !== 'number' && '#4e54c8' }} >{value? value : '1'}</span>
    </div>
  )
}

export default Button