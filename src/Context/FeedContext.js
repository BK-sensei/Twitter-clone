import React, { createContext, useState } from 'react'

const FeedContext = createContext({})

const FeedContextProvider = props => {
  const [feed, setFeed] = useState(null)

  const value = {
    feed,
    setFeed
  }

  return (
    <FeedContext.Provider value={value}>
      {props.children}
    </FeedContext.Provider>
  )
}

export {
  FeedContextProvider,
  FeedContext
}