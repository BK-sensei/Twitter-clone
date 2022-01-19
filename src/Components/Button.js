import React from 'react'

import styled from 'styled-components'

const ButtonStyled = styled.div`
  width: ${props => props.width};
`

const Button = props => {
  const { text, width } = props

  return (
    <div>
        <button
          type="button" 
          className="btn rounded-pill btn-outline-secondary"
        >
          <ButtonStyled width={`${width}`}>
            {text}
          </ButtonStyled>
        </button>
    </div>
  )
}

export default Button