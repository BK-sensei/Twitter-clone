import React, { useContext } from 'react'

import styled from 'styled-components'
import Navbar from '../Components/Navbar'

import { UserContext } from '../Context/UserContext'

const Left = styled.div`
    width: 30%;
`
const Middle = styled.div`
    width: 40%;
`
const Right = styled.div`
    width: 30%
`

const UserHome = () => {
    const { user } = useContext(UserContext)

    console.log(user)
    return (
        <div className='d-flex'>
            <Left>
                <Navbar />
            </Left>
            <Middle>
                Middle
            </Middle>
            <Right>
                Right
            </Right>
        </div>
    )
}

export default UserHome