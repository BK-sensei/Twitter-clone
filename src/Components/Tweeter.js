import React, { useContext, useState } from 'react'

import styled from 'styled-components'
import "../Styles/Components/Tweeter.css"

import { UserContext } from '../Context/UserContext'
import { FeedContext } from '../Context/FeedContext'
import { ModalContext } from '../Context/ModalContext'

const Tweeting = styled.div`
  display: flex;
  justify-content: end;
  margin: 15px 0 0 0;
`

const Tweeter = () => {
  const { user } = useContext(UserContext)
  const { feed, setFeed } = useContext(FeedContext)
  const { setVisible } = useContext(ModalContext)
  const [text, setText] = useState(null)

  const handleTextarea = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    tweeter()
  }

  const tweeter = async () => {
    const response = await fetch('http://localhost:5000/tweets', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        user: user._id,
        pinnedTweet: false,
        likes : 0,
        text : text,
        retweets : []
      })
    })
    const data = await response.json()
    const result = [
      data,
      ...feed
    ]
    setFeed(result)
    setVisible(false)
  }
  
  // console.log(result)
  return (
    <div>
      <div className='row border-bottom'>
        <div className='col-2'>
          <img 
            className='img-fluid rounded-circle'
            // style={{width: '50%'}}
            src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' 
            alt='default_profile'
          />
        </div>
        <div className='col-10 mb-3'>
          <form onSubmit={handleSubmit}>
            <div className="form-floating">
              <textarea 
                className="form-control" 
                placeholder="Leave a comment here" 
                maxLength="280"
                id="floatingTextarea2" 
                style={{height: "100px", borderRight: "none", borderTop: "none", borderLeft: "none", borderRadius: "0"}}
                onChange={handleTextarea}
              ></textarea>
              <label htmlFor="floatingTextarea2" className='whatsup'>Quoi de neuf ?</label>
            </div>
            <Tweeting>
              <button 
                type="submit" 
                className="btn rounded-pill tweet"
              >
                Tweet
              </button>
            </Tweeting>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Tweeter