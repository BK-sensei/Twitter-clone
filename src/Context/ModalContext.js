import React, { createContext, useState } from 'react';

const ModalContext = createContext({})

const ModalContextProvider = props => {
    const [visible, setVisible] = useState(false)
    const [modalType, setModalType] = useState(null)

    const value = {
        visible,
        setVisible,
        modalType,
        setModalType
    }

    return (
        <ModalContext.Provider value={value}>
            {props.children}
        </ModalContext.Provider>
    )
}

export {
    ModalContextProvider,
    ModalContext
}