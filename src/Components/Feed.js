import React, { useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import Tweet from '../Components/Tweet'
import { FeedContext } from '../Context/FeedContext'

const Feed = () => {
  // const [feed, setFeed] = useState()
  const { feed, setFeed } = useContext(FeedContext)
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
          data.sort((a,b) =>{
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          }).reverse()
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
      ))}
    </div>
  )
}

export default Feed