import React, { useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import Tweet from '../Components/Tweet'
import { FeedContext } from '../Context/FeedContext'
import { DeleteContext } from '../Context/DeleteContext'

const Feed = () => {
  const { feed, setFeed } = useContext(FeedContext)
  const { deleted } = useContext(DeleteContext)
  const navigate = useNavigate()

  useEffect(() => {
      getFeed()
  },[deleted])

  const getFeed = async () =>{
      const response = await fetch('http://localhost:5000/tweets/feed', {
        credentials: "include"
      })
      const data = await response.json()
      console.log(data)
      if (data.error) {
          navigate('/login')
        } else {
          data.sort((a,b) =>{
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          }).reverse()
          setFeed(data)
      }
  }

  if(!feed) {
      return <h1>Chargement...</h1>
  }

  // console.log(feed)
  return (
    <div>
      {feed.map(element => (
<<<<<<< HEAD
        <Link to={`/tweet/${element._id}`}>
          <Tweet 
              key={element._id}
              id={element._id}
              userid={element.user._id}
              name={element.user.name}
              username={element.user.username}
              createdAt={element.createdAt}
              text={element.text}
              numRetweets={element.retweets.length}
              numComments={element.comments.length}
          />
        </Link>
=======
        <Tweet 
            key={element._id}
            id={element._id}
            userid={element.user._id}
            name={element.user.name}
            username={element.user.username}
            createdAt={element.createdAt}
            text={element.text}
            numRetweets={element.retweets.length}
            numComments={element.comments.length}
            retweets={element.retweets}
        />
>>>>>>> 3aa2bdbde93da90372aebd4560c45c193a7ddde5
      ))}
    </div>
  )
}

export default Feed