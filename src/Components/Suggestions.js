import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import UserCard from './UserCard'
import '../Styles/Components/Suggestion.css'

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
      <div className='rounded-pill research'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="darkgray" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        <input 
          type="search" 
          id="site-search" 
          className="border-0"
          placeholder='Recherche Twitter'
          name="q"
          aria-label="Search through site content" 
        />
      </div>

      <div className='suggestion'>
        <h3 className='suggestTitle'>Suggestions</h3>
        {users.map(element => (
          <UserCard 
            key={element._id}
            name={element.name}
            username={element.username}
          />
        ))}
      </div>
    </div>
  )
}

export default Suggestions