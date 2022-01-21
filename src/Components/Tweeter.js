import React, { useContext, useState } from 'react'

import styled from 'styled-components'

import { UserContext } from '../Context/UserContext'
import { ModalContext } from '../Context/ModalContext'

const Tweeting = styled.div`
  display: flex;
  justify-content: end;
  margin: 15px 0 0 0;
`

const Tweeter = () => {
  const { user } = useContext(UserContext)
  const [text, setText] = useState(null)
  const {visible, setVisible } = useContext(ModalContext)


  const handleTextarea = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    tweeter()

    if (visible) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  const tweeter = async () => {
    await fetch('http://localhost:5000/tweets', {
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
  }

  // console.log(user)
  return (
    <div>
      <div className='row border-bottom'>
        <div className='col-2'>
          <img 
            className='img-fluid rounded-circle'
            // style={{width: '50%'}}
            src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' 
          />
        </div>
        <div className='col-10 mb-3'>
          <form onSubmit={handleSubmit}>
            <div className="form-floating">
              <textarea 
                className="form-control" 
                placeholder="Leave a comment here" 
                id="floatingTextarea2" 
                style={{height: "100px", borderRight: "none", borderTop: "none", borderLeft: "none", borderRadius: "0"}}
                onChange={handleTextarea}
              ></textarea>
              <label htmlFor="floatingTextarea2">Text</label>
            </div>
            <Tweeting>
              <button 
                type="submit" 
                className="btn rounded-pill btn-primary"
                style={{width: "80px"}}
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