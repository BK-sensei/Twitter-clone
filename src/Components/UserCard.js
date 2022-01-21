import React from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'

const UserCard = (props) => {
  const { name, username, id } = props

  return (
    <div>
      <div className="card mb-2 flex-row align-items-center" style={{width: "18rem"}}>
        <img 
            className='img-fluid rounded-circle ms-3'
            style={{width: '20%', height: '50px'}}
            alt='default_profile'
            src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' 
        />
        <div className="card-body">
          <Link to={`/user/${id}`}>
            <h5 className="card-title">{name}</h5>
          </Link>
          <h6 className="card-subtitle mb-2 text-muted">@{username}</h6>
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p> */}
        </div>
        <div className='me-3'>
          <Button text="Follow" width="50px"/>
        </div>
      </div>
    </div>
  )
}

export default UserCard