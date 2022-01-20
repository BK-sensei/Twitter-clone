import React, { useContext } from 'react'

import Menu from '../Components/Menu'

import { UserContext } from '../Context/UserContext'

const UserHome = () => {
    const { user } = useContext(UserContext)

    console.log(user)
    return (
        <div className='row'>
            <div className='col-3 border-end p-4 d-flex flex-column' style={{height: "100%"}}>
                <Menu />
            </div>
            <div className='col-6'>
                middle
            </div>
            <div className='col-3 p-5 border-start'>
                right
            </div>
        </div>
    )
}

export default UserHome