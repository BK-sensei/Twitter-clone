import { useParams } from 'react-router-dom'
import Menu from '../Components/Menu'
import Suggestions from '../Components/Suggestions'
import TweetContent from '../Components/TweetContent'

const Tweet = () => {

    return (
        <>
            <div className='row'>
                <div className='col-3 p-5 border-end'>
                    <Menu />
                </div>
                <div className='col-6 p-0'>
                    <TweetContent />
                </div>
                <div className='col-3 p-4 border-start'>
                    <Suggestions />
                </div>
            </div>
        </>
    )
}

export default Tweet