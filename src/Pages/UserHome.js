import React, { useContext } from 'react'

import styled from 'styled-components'

import Menu from '../Components/Menu'
import Tweeter from '../Components/Tweeter'
import Suggestions from '../Components/Suggestions'

import { UserContext } from '../Context/UserContext'

const Top = styled.div` 
  width: 100%;
  height: 53px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`

const UserHome = () => {
    const { user } = useContext(UserContext)

    console.log(user)
    return (
        <div className='row'>
            <div className='col-3 border-end p-4 d-flex flex-column' style={{height: "100%"}}>
                <Menu />
            </div>
            <div className='col-6'>
                <Top>
                    Home
                </Top>
                <Tweeter />
            </div>
            <div className='col-3 p-5 border-start'>
                <Suggestions />
            </div>
        </div>
    )
}

export default UserHome