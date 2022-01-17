import React, { useContext } from 'react'
import Modal from 'react-modal'

import { ModalContext } from '../Context/ModalContext'

import Login from './Login'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zindex: 20
    }
  }

const ModalComponent = () => {
    const { modalType, visible, setVisible } = useContext(ModalContext)

    const handleModal = () => {
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    console.log(modalType)
    return (
        <>
            <Modal 
                isOpen={visible}
                style={customStyles}
            >
                <button
                    type="button"
                    onClick={handleModal}
                    style={{position: "absolute"}}
                >
                    X
                </button>
                <div className='row d-flex '>
                    {modalType === "login" && 
                        <Login />
                    }
                </div>
            </Modal>
        </>

    )
}

export default ModalComponent; 