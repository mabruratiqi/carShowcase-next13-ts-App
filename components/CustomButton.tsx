'use client'
import { CustomButtonProps } from '@/types'
import React from 'react'

function CustomButton({type, title, customBtnStyles, disabled, handleClick} : CustomButtonProps) {
  return (
      <button
        type={type}
        className={`custom-button ${customBtnStyles}`}
        disabled={disabled}
        onClick={
            () => {}
        }
      >
        <span className={`flex-1 px-4 py-4`}>{title}</span>
      </button>
  )
}

export default CustomButton