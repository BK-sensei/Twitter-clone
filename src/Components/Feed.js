import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Tweet from '../Components/Tweet'

const Feed = () => {
  const [feed, setFeed] = useState()
  const navigate = useNavigate()

    useEffect(() => {
      getFeed()
  },[])

  const getFeed = async () =>{

      const response = await fetch('http://localhost:5000/tweets/feed', {
        credentials: "include"
      })
      const data = await response.json()
      if (data.error) {
          navigate('/login')
        } else {
          setFeed(data)
      }
  }

  if(!feed) {
      return <h1>Chargement...</h1>
  }

  console.log(feed)
  return (
    <div>
      {feed.map(element => (
        <Tweet 
            key={element._id}
            id={element._id}
            name={element.user.name}
            username={element.user.username}
            createdAt={element.createdAt}
            text={element.text}
            numRetweets={element.retweets.length}
            numComments={element.comments.length}
        />
      ))}
    </div>
  )
}

export default Feed