import React, { useContext } from 'react'
import Modal from 'react-modal'

import { ModalContext } from '../Context/ModalContext'

import Login from './Login'
import Signup from './Signup'
import Tweeter from './Tweeter'
import EditProfile from './EditProfile'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 20,
      width: '500px',
      borderRadius: '10px',
      position: 'absolute'
    }
  }
const Xbutton = {
    content: {
        display: 'block',
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

    // console.log(modalType)
    return (
        <>
            <Modal 
                isOpen={visible}
                style={customStyles}
                ariaHideApp={false}
            >
                <button
                    type="button"
                    onClick={handleModal}
                    style={Xbutton}
                >
                    X
                </button>

                    {modalType === "login" && 
                        <Login />
                    }
                    {modalType === "signup" && 
                        <Signup />
                    }
                    {modalType === "tweet" && 
                        <Tweeter />
                    }
                    {modalType === "editProfile" &&
                        <EditProfile />
                    }

            </Modal>
        </>

    )
}

export default ModalComponent; 