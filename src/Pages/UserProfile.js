import React from 'react'

import ProfileContent from '../Components/ProfileContent'
import Menu from '../Components/Menu'
import Suggestions from '../Components/Suggestions'

const UserProfile = () => {
    return (
        <>
            <div className='row'>
                <div className='col-3 p-5 border-end'>
                    <Menu />
                </div>
                <div className='col-6 p-0'>
                    <ProfileContent />
                </div>
                <div className='col-3 p-4 border-start'>
                    <Suggestions />
                </div>
            </div>
        </>
    );
};

export default UserProfile;