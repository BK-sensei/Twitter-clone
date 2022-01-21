import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import moment from "moment"
import 'moment/locale/fr'
import "../Styles/Components/ProfileContent.css"

import { UserContext } from '../Context/UserContext'
import { ModalContext } from '../Context/ModalContext'

const ProfileContent = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const [userProfile, setUserProfile] = useState(null)
    const { setModalType, visible, setVisible } = useContext(ModalContext)

    useEffect(() => {
        getUser()
    },[id, user])
  
    const getUser = async () =>{
  
        const response = await fetch(`http://localhost:5000/users/${id}`, {
          credentials: "include"
        })
        const data = await response.json()
        if (data.error) {
            navigate('/login')
          } else {
            setUserProfile(data)
        }
    }
  
    if(!userProfile) {
        return <h1>Chargement...</h1>
    }

    moment.locale("fr")

    const handleModal = (modalType) => {
        setModalType(modalType)
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    return (
        <>
            <div className='top'>
                <Link to="/home">
                    <div className='rounded-circle div-arrow'>
                        <svg fill="black" className='arrow'>
                            <path className='arrowDiv' d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                        </svg>
                    </div>
                </Link>
                <div>
                    <h3>{userProfile.name}</h3>
                    <p>{userProfile.tweets.length} Tweets</p>
                </div>
            </div>

            <div>
                <div className='background-image'>
                    {/* Background Image */}
                </div>

                <div className='profile'>
                    <div className='edit d-flex justify-content-between'>
                        <img src="https://i.pinimg.com/564x/7e/f2/c3/7ef2c3686d046a856ee66b26145e77b6.jpg" class="rounded-circle profile-picture" alt="..." />
                        <button 
                            type="button" 
                            className="btn rounded-pill edit-btn"
                            onClick={() => handleModal("editProfile")}
                        >Éditer le profil
                        </button>
                    </div>

                    <div className='name-username'>
                        <h3>{userProfile.name}</h3>
                        <p>@{userProfile.username}</p>
                    </div>
                    <div className='bio'>
                        <p>{userProfile.bio}</p>
                    </div>

                    <div className='info'>
                        <div className='location icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <p>{userProfile.location}</p>
                        </div>
                        <div className='website icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                            </svg>
                            <p>{userProfile.website}</p>
                        </div>
                        <div className='birthdate icon'>
                            <svg viewBox="0 0 24 24" className='bday-icon'> 
                                <path d="M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z"></path>
                                <path d="M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"></path>
                            </svg>
                            <p>Naissance le {moment(userProfile.birthday).format('LL')}</p>
                        </div>
                        <div className='inscription-date icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>
                            <p>A rejoint Twitter en {moment(userProfile.createdAt).format('MMMM YYYY')}</p>
                        </div>
                    </div>

                    <div className='d-flex'>
                        <p><span className='number'>{userProfile.followings.length}</span>abonnements</p>
                        <p><span className='number'>{userProfile.followers.length}</span>abonnés</p>
                    </div>
                </div>

                <div className='userTweets border-bottom'>
                    <h4>Tweets</h4>
                    <h4>Retweet</h4>
                    <h4>Réponses</h4>
                    <h4>J'aime</h4>
                </div>
            </div>
        </>
    )
}

export default ProfileContent