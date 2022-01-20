import React from 'react'

import styled from 'styled-components'

const Tweeting = styled.div`
  display: flex;
  justify-content: end;
  margin: 10px 0 0 0;
`

const Tweeter = () => {
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
          <div className="form-floating">
            <textarea 
              className="form-control" 
              placeholder="Leave a comment here" 
              id="floatingTextarea2" 
              style={{height: "100px", borderRight: "none", borderTop: "none", borderLeft: "none", borderRadius: "0"}}
            ></textarea>
            <label htmlFor="floatingTextarea2">Text</label>
          </div>
          <Tweeting>
            <button 
              type="button" 
              class="btn rounded-pill btn-primary"
              style={{width: "80px"}}
            >
              Tweet
            </button>
          </Tweeting>
        </div>
      </div>
    </div>
  )
}

export default Tweeter