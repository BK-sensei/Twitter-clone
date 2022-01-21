import React from 'react'
import styled from 'styled-components'
import "../Styles/Components/Tweeter.css"
// import { UserContext } from '../Context/UserContext'
// import { useContext } from 'react/cjs/react.development'

const Tweeting = styled.div`
  display: flex;
  justify-content: end;
  margin: 15px 0 0 0;
`

const Tweeter = () => {
//   const {user} = useContext(UserContext)

  return (
    <div>
      <div className='row border-bottom'>
        <div className='col-2'>
          <img 
            className='img-fluid rounded-circle'
            alt=''
            // style={{width: '50%'}}
            src='https://i.pinimg.com/564x/7e/f2/c3/7ef2c3686d046a856ee66b26145e77b6.jpg'
          />
        </div>
        <div className='col-10 mb-3'>
          <div className="form-floating">
            <textarea 
              className="form-control" 
              // placeholder="Leave a comment here" 
              id="floatingTextarea2" 
              style={{height: "100px", borderRight: "none", borderTop: "none", borderLeft: "none", borderRadius: "0"}}
            ></textarea>
            <label htmlFor="floatingTextarea2" className='whatsup'>Quoi de neuf ?</label>
          </div>
          <Tweeting>
            <button 
              type="button" 
              className="btn rounded-pill tweet"
            >
              Tweeter
            </button>
          </Tweeting>
        </div>
      </div>
    </div>
  )
}

export default Tweeter