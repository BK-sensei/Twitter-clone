import React from 'react';
import { useParams } from 'react-router-dom';

import Menu from '../Components/Menu';
import TweetContent from '../Components/TweetContent';
import Suggestions from '../Components/Suggestions';

const Tweet = () => {
    const { id } = useParams()
    // console.log("id2", id)
    return (
        <>
            <div className='row'>
                <div className='col-3 border-end p-4 d-flex flex-column'>
                    <Menu />
                </div>
                <div className='col-6'>
                    <TweetContent 
                        id={id}
                    />
                </div>
                <div className='col-3 p-4 border-start'>
                    <Suggestions />
                </div>
            </div>
        </>
    );
};

export default Tweet;