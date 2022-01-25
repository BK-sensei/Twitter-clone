import React, { createContext, useState } from 'react'

const DeleteContext = createContext({})

const DeleteContextProvider = props => {
  const [deleted, setDeleted] = useState(null)

  const value = {
    deleted,
    setDeleted
  }

  return (
    <DeleteContext.Provider value={value}>
      {props.children}
    </DeleteContext.Provider>
  )
}

export {
  DeleteContextProvider,
  DeleteContext
}