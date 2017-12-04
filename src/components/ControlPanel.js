// React
import React, { Component } from 'react'

// Styled components
import styled, { keyframes } from 'styled-components'


class ControlPanel extends Component {
  render () {
    return (
      <ControlPanelContainer className="controlPanel" >
        <Logout onClick={ this.props.disconnect }>
        <i className="fa fa-cog"></i> Déconnexion
        </Logout>
        <AddArticle onClick={ this.props.displayCreateArticlePanel }>
        <i className="fa fa-file-text-o"></i>  Ajouter un article
        </AddArticle>
      </ControlPanelContainer>
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

const ControlPanelContainer = styled.div`
  z-index: 999;
  animation: ${fadeIn} .8s ease;
`

const Logout = styled.button`
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
`

const AddArticle = styled.button`
  position: fixed;
  top: 140px;
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
`

export default ControlPanel
