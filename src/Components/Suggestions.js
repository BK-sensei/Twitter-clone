import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import UserCard from './UserCard'

const Suggestions = () => {
  const [users, setUsers] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getUsers()
  },[])

  const getUsers = async () =>{

    const response = await fetch('http://localhost:5000/users', {
      credentials: "include"
    })
    const data = await response.json()
    if (data.error) {
        navigate('/login')
      } else {
        setUsers(data)
    }
  }

  if(!users) {
      return <h1>Chargement...</h1>
  }

  console.log(users)
  return (
    <div>
      {users.map(element => (
        <UserCard 
          key={element._id}
          name={element.name}
          username={element.username}
        />
      ))}
    </div>
  )
}

export default Suggestions