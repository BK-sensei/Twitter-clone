import React from 'react'
import styled from 'styled-components'

import { useFormik } from 'formik'

import Button from './Button'
import { useNavigate } from 'react-router-dom'

const LoginLogo = styled.div`
    width: 50px;
    color: blue;
`
const Separator = styled.div`
    border-top: 1px solid rgb(207, 217, 222);
    width: 100%;
`

const Login = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            username: "String",
            password: "password"
        },
        onSubmit: values => {
            login(values)
        }
    })
    const login = async values => {
        const response = await fetch('http://localhost:5000/auth/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(values)
        })
    
        if (response.status >= 400) {
          alert(response.statusText)
        } else {
          navigate('/home')
        }
    }

    // console.log(formik.values)
    return (
        <>
            <div className='row d-flex my-1'>
                <div className='col-12 d-flex justify-content-center'>
                    <LoginLogo>
                        <svg viewBox="0 0 24 24" aria-label="Twitter" className=""><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                    </LoginLogo>
                </div>
            </div>
            <div className='row d-flex my-3'>
                <div className='col-12 d-flex justify-content-center'>
                    <Button text="Se connecter avec Google" />

                </div>
            </div>
            <div className='row d-flex my-3'>
                <div className='col-12 d-flex justify-content-center'>
                    <Button text="Se connecter avec Apple" />
                </div>
            </div>
            <div className='row d-flex my-3 d-flex justify-content-center'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <div className='col-3 '>
                        <Separator />
                    </div>
                    <div className='col-3 text-center'>
                        ou
                    </div>
                    <div className='col-3 '>
                        <Separator />
                    </div>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className='row d-flex my-3'>
                    <div className='col-12'>
                        <div className="input-group input-group-lg">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="username"
                                name="username"
                                placeholder="Username"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                            {formik.errors.username}
                        </div>
                    </div>
                </div>
                <div className='row d-flex my-3'>
                    <div className='col-12'>
                        <div className="input-group input-group-lg">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="password"
                                name="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.errors.password}
                        </div>
                    </div>
                </div>
                <div className='row d-flex my-3'>
                    <div className='col-12'>
                        <div className='col-12 d-flex justify-content-center'>
                            <button 
                                type="submit" 
                                className="btn rounded-pill btn-dark" 
                                style={{ width: "330px" }}
                            >
                                Suivant
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <div className='row d-flex my-3'>
                <div className='col-12 d-flex justify-content-center'>
                    <Button text="Mot de passe oublié?" />
                </div>
            </div>
            <div className='row d-flex my-3'>
                <div className='col-12 d-flex justify-content-center'>
                    Vous n'avez pas de compte ? Inscrivez-vous
                </div>
            </div>
        </>
    )
}

export default Login