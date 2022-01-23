import React from 'react';
import { Link } from 'react-router-dom'

import Tweet from '../Components/Tweet';

const TweetContent = (props) => {
    const { id, name, username, userid, createdAt, text, numRetweets, numComments } = props

    return (
        <>
            <div className='topTweet d-flex align-items-center pe-3 ps-3'>
                <Link to="/home">
                    <div className='rounded-circle div-arrow'>
                        <svg fill="black" className='arrow'>
                            <path className='arrowDiv' d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                        </svg>
                    </div>
                </Link>
                <h3>Tweet</h3>
            </div>
            <Tweet>
                
            </Tweet>
            <p>{name}</p>
                {/* // key={element._id}
                // id={element._id}
                // userid={element.user._id}
                name={props.name}
                username={props.username}
                createdAt={createdAt}
                text={text}
                numRetweets={numRetweets}
                numComments={numComments} */}
        </>
    );
};

export default TweetContent;