import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Tweet from '../Components/Tweet'

const Explorer = () => {
    const [tweets, setTweets] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        getTweet()
    },[])

    const getTweet = async () =>{

        const response = await fetch('http://localhost:5000/tweets', {
          credentials: "include"
        })
        const data = await response.json()
        if (data.error) {
            navigate('/login')
          } else {
            setTweets(data)
        }
    }

    if(!tweets) {
        return <h1>Chargement...</h1>
    }

    console.log(tweets)
    return (
        <div>
            {tweets.map(element => (
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

export default Explorer;