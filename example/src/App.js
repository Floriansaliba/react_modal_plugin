import React, { useState } from 'react'

import { Modal } from 'react-modal'
import 'react-modal/dist/index.css'

const App = () => {
  const [modal, setModal] = useState(false)
  return modal ? (
    <Modal
      text='Employee created !'
      closeModal={() => {
        setModal(false)
      }}
    />
  ) : (
    <h1
      onClick={() => {
        setModal(true)
      }}
    >
      Modal closed
    </h1>
  )
}

export default App
