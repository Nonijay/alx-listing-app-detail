import { ButtonProps } from '@/interfaces'
import React from 'react'

const Button: React.FC<ButtonProps> = ({style, title}) => {
  return (
    <div>
      <button className={style}>{title}</button>
    </div>
  )
}

export default Button
