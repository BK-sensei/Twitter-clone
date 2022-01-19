import React, { useContext } from 'react'

import Navbar from '../Components/Navbar'

import { UserContext } from '../Context/UserContext'

const UserHome = () => {
    const { user } = useContext(UserContext)

    console.log(user)
    return (
        <div className='row'>
            <div className='col-3 p-5 border-end'>
                <Navbar />
            </div>
            <div className='col-6'>
                middle
            </div>
            <div className='col-3'>
                right
            </div>
        </div>
    )
}

export default UserHome