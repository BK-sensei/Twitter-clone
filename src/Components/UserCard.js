import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../Context/UserContext'

const UserCard = (props) => {
  const { name, username, id } = props
  const { user, setUser } = useContext(UserContext)

  const handleFollowings = (id) => {
    const newFollowings = [...user.followings, id]
    updateFollowings(newFollowings)
  }
  const updateFollowings = async (newFollowings) => {
    const response = await fetch(`http://localhost:5000/users/${user._id}`, {
      method: 'put',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        followings: newFollowings
      })
    })
    const data = await response.json()
    setUser(data)
  }

  // console.log(user.followings)
  return (
    <>
      <div className="mb-4 d-flex flex-row justify-content-between align-items-center">
        <div className='d-flex flex-row'>
          <img 
              className='img-fluid rounded-circle me-2'
              style={{width: '50px', height: '50px'}}
              alt='default_profile'
              src='https://64.media.tumblr.com/1e5b47b37acbf39ed06ea0076b95e14c/1a332bd0df30b373-86/s500x750/828896df7f73508fdabb5fd9c186d16bb6b0d33a.png' 
          />
          <div className='d-flex flex-column'>
              <h6 className="card-title fw-bold" style={{width:'100px', fontSize:'16px', textOverflow: 'ellipsis', overflow: 'hidden'}}>{name}</h6>
              <h6 className="card-subtitle mb-2 text-muted" style={{width:'100px', textOverflow: 'ellipsis', fontSize:'14px'}}>@{username}</h6>
          </div>
        <div >
        {user.followings.includes(id) ? 
          <button
          type='button'
            className='btn rounded-pill btn-dark fw-bold'
            style={{width:'75px', fontSize:'13px'}}
          >
            unSuivre
          </button>
          :
          <button
          type='button'
            className='btn rounded-pill btn-dark fw-bold'
            style={{width:'75px', fontSize:'13px'}}
            onClick={() => handleFollowings(id)}
          >
            Suivre
          </button> 
          }

        </div>
      </div>
    </div>
    </>
  )
}

export default UserCard