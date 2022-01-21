import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ModalContext } from '../Context/ModalContext'

import ModalComponent from '../Components/ModalComponent'
import styled from 'styled-components'
import '../Styles/Components/Menu.css'

import { UserContext } from '../Context/UserContext'

const NavLogo = styled.div`
  display: flex;
  font-size: 20px;
  color: black;
`
const LoginLogo = styled.div`
    width: 30px;
    margin-left: 20px;
    margin-bottom: 30px;
`
const Menu = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const { setModalType, visible, setVisible } = useContext(ModalContext)

  const handleModal = (modalType) => {
    setModalType(modalType)
    if (visible) {
        setVisible(false)
    } else {
        setVisible(true)
    }
  }

  const handleLogoutClick = () => {
    fetch('http://localhost:5000/auth/logout', {
      method: 'delete',
      credentials: 'include'
    })
      .then(response => {
        navigate('/')
      })
  }

  console.log(user)
  return (
    <div className='sticky-top menu' >
        <LoginLogo>
          <svg viewBox="0 0 24 24" fill="#1C9CEF"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
        </LoginLogo>
        <nav className="nav flex-column">
          <Link to="/home" className="nav-link active" >
            <NavLogo className='currentPage'>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="" style={{height: "1.75rem", margin: "0 10"}}><g><path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path></g></svg>
              Home
            </NavLogo>
          </Link>
          <Link to="/explorer" className="nav-link" >
            <NavLogo>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="" style={{height: "1.75rem", margin: "0 10"}}><g><path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path></g></svg>
              Explorer
            </NavLogo>
          </Link>
          <Link to={`/user/${user._id}`} className="nav-link" >
            <NavLogo>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="" style={{height: "1.75rem", margin: "0 10"}}><g><path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path></g></svg>
              Profile
            </NavLogo>
          </Link>
        </nav>
      <div className='d-flex flex-column justify-content-between' style={{height: "65vh"}} >
        <button 
          type="button" 
          className="btn rounded-pill blue"
          onClick={() => handleModal("tweet")}
        >
          Tweeter
        </button>
        <button 
          type="button" 
          className="btn mt-auto mb-0 rounded-pill blue logout"
          onClick={handleLogoutClick}
        >
          Se déconnecter
        </button>
        <ModalComponent />
      </div>
    </div>
  )
}

export default Menu