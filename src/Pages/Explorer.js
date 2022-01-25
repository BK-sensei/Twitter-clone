import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Tweet from '../Components/Tweet'
import Menu from '../Components/Menu'
import Suggestions from '../Components/Suggestions'

import { UserContext } from '../Context/UserContext'

const Explorer = () => {
    const { user } = useContext(UserContext)
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
            const result = data.filter(element => element.user._id !== user._id)
            result.sort((a,b) =>{
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
              }).reverse()
            setTweets(result)
        }
    }

    if(!tweets) {
        return <h1>Chargement...</h1>
    }

    // console.log(tweets)
    return (
        <div className='row'>
            <div className='col-3 border-end p-4 d-flex flex-column'>
                <Menu />
            </div>
            <div className='col-6'>
                {tweets.map(element => (
                    <Tweet 
                        key={element._id}
                        id={element._id}
                        userid={element.user._id}
                        name={element.user.name}
                        username={element.user.username}
                        createdAt={element.createdAt}
                        text={element.text}
                        retweets={element.retweets}
                        numRetweets={element.retweets.length}
                        numComments={element.comments.length}
                    />
                ))}
            </div>
            <div className='col-3 p-4 border-start'>
                <Suggestions />
            </div>
        </div>
    )
}

export default Explorer;