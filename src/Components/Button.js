import React from 'react'

import styled from 'styled-components'

const ButtonStyled = styled.div`
  width: 300px;

`

const Button = props => {
  const { text } = props

  return (
    <div>
        <button
          type="button" 
          className="btn rounded-pill btn-outline-secondary"
        >
          <ButtonStyled>
            {text}
          </ButtonStyled>
        </button>
    </div>
  )
}

export default Button