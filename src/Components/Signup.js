import React from 'react'

import styled from 'styled-components'

const SignupTitle = styled.h2`
  font-weight: normal;
`
const Birthday = styled.p`
  font-weight: normal;
  font-size: 20px;
`
const InfoBirthday = styled.div`
  font-size: 10px;
`

const Signup = () => {
  return (
  <>
    <div className='row d-flex my-1'>
      <div className='col-12 d-flex justify-content-center'>
        <svg viewBox="0 0 24 24" aria-label="Twitter" className="" style={{width: "50px"}}><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
      </div>
    </div>
    <div className='row d-flex my-1'>
      <SignupTitle>
        Créer votre compte
      </SignupTitle>
      <div className='col-12 mb-2'>
          <div className="input-group input-group-lg">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Nom et prénom"
              />
          </div>
      </div>
      <div className='col-12 my-2'>
        <div className="input-group input-group-lg">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Username"
            />
        </div>
      </div>
      <div className='col-12 my-2'>
        <div className="input-group input-group-lg">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Email"
            />
        </div>
      </div>
      <div className='col-12 my-2'>
        <div className="input-group input-group-lg">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Mot de passe"
            />
        </div>
      </div>
      <div className='col-12 my-2'>
        <div className="input-group input-group-lg">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Confirmer votre mot de passe"
            />
        </div>
      </div>
      <div className='col-12 my-2'>
        <Birthday>
          Date de naissance
        </Birthday>
        <InfoBirthday>
          Cette information ne sera pas affichée publiquement. Confirmez votre âge, même si ce compte est pour une entreprise, un animal de compagnie ou autre chose.
        </InfoBirthday>
      </div>
      <div className='col-12'>
        <input 
          type="date" 
          className="form-control" 
          placeholder=""
        />
      </div>
      <div className='col-12 my-3'>
        <button 
            type="submit" 
            className="btn rounded-pill btn-dark" 
            style={{ width: "460px" }}
        >
            Suivant
        </button>
      </div>
    </div>
  </>
  )
}

export default Signup