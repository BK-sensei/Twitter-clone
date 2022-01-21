import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import UserCard from './UserCard'
import { UserContext } from '../Context/UserContext'


const Suggestions = () => {
  const [users, setUsers] = useState(null)
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    getUsers()
  },[])

  const getUsers = async () => {

    const response = await fetch('http://localhost:5000/users', {
      credentials: "include"
    })
    const data = await response.json()
    if (data.error) {
        navigate('/login')
      } else {
        const result = data.filter(element => element._id !== user._id)
        setUsers(result)
    }
  }

  if(!users) {
      return <h1>Chargement...</h1>
  }

  // console.log(user)
  return (
    <div>
      {users.map(element => (
        <UserCard 
          key={element._id}
          id={element._id}
          name={element.name}
          username={element.username}
          followings={user.followers}
        />
      ))}
    </div>
  )
}

export default Suggestions