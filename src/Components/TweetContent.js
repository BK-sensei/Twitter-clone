import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import SingleTweet from './SingleTweet';

const TweetContent = (props) => {
    const { id } = props
    const [ tweet, setTweet ] = useState(null)
    const [ comments, setComments ] = useState([])

    // Récupérer tous les commentaires d'un tweet selon son id 
    const getComments = async () => {
        const response = await fetch(`http://localhost:5000/comments/${id}`, {
            credentials: 'include'
        })
        const data = await response.json()
        setComments(data)
    }

    useEffect(() => {
        getTweet()
        getComments()
    }, [])

    // Récupérer un Tweet selon son id
    const getTweet = async () => {
        const response = await fetch(`http://localhost:5000/tweets/${id}`, {
            credentials: 'include'
        })
        const data = await response.json()
        setTweet(data)
    }

    if (!tweet && !comments) {
        return <h1>Chargement</h1>
    }

    console.log("tweet",tweet);

    return (
        <div className='d-flex flex-column'>
            <div className='topTweet d-flex flex-row align-items-center pe-3 ps-3'>
                <Link to="/home">
                    <div className='rounded-circle div-arrow'>
                        <svg fill="black" className='arrow'>
                            <path className='arrowDiv' d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                        </svg>
                    </div>
                </Link>
                <h3>Tweet</h3>
            </div>
            <div>
                {tweet && 
                <SingleTweet
                    key={tweet._id}
                    id={tweet._id}
                    userid={tweet.user._id}
                    name={tweet.user.name}
                    username={tweet.user.username}
                    createdAt={tweet.createdAt}
                    text={tweet.text}
                    numRetweets={tweet.retweets.length}
                    numComments={tweet.comments.length}
                    retweets={tweet.retweets}
                />
                }
            </div>
            <div>
                {comments.map(comment => {
                    <p>{comment.text}</p>
                })}

            </div>
        </div>
    );
};

export default TweetContent;