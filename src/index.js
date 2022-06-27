import React from 'react'

export const Modal = ({ text, closeModal }) => {
  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <p className='modal-text'>{text}</p>
        <p
          className='modal-btn'
          onClick={() => {
            closeModal()
          }}
        >
          X
        </p>
      </div>
    </div>
  )
}
