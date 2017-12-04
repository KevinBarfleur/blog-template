// React
import React, { Component } from 'react'

// Styled components
import styled, { keyframes } from 'styled-components'


class LoginButton extends Component {
  render () {
    return (
      <div className="loginButton">
        <Button onClick={ this.props.displayLoginScreen }><i className="fa fa-cog"></i> Connexion</Button>    
      </div>
    )
  }
}

/* STYLE */

const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

const Button = styled.button`
  z-index: 1;
  position: fixed;
  top: 80px;
  left: 20px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";  

  width: 160px;
  height: 50px;

  border: 1px solid #F5F5F5;
  border-radius: 20px;
  transition: .3s;

  &:hover {
    cursor: pointer;
    background-color: #F5F5F5;
    transition: .3s;
  }

  &:focus {
    outline: none;
  }

  animation: ${fadeIn} .3s ease;
`

export default LoginButton
