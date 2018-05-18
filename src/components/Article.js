// React
import React, { Component } from 'react'

// Styled components
import styled from 'styled-components'



class Article extends Component {
  render() {
    const index = this.props.index

    if (this.props.login) {
      this.login = true
    } else {
      this.login = false
    }

    let indicator = this.props.details.visible ? <OnlineIndicator><i className="fa fa-circle"></i> En ligne</OnlineIndicator> :
      <OfflineIndicator><i className="fa fa-circle"></i> Hors-ligne</OfflineIndicator>

    indicator = this.login ? indicator : null

    if (this.props.details.visible || this.login) {
      return (
        <Container className="article" onClick={() => this.props.changeView(index)}>
          {indicator}
          <Title>{this.props.details.article}</Title>
          <img src={this.props.details.img} alt='article' width='60%' />
          <Preview>{this.props.details.preview}</Preview>
        </Container>
      )
    } else {
      return (
        null
      )
    }
  }
}

/* STYLE */
const OnlineIndicator = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  font-size: .8em;
  color: #81C784;
`

const OfflineIndicator = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  font-size: .8em;
  color: #FF8A80;
`

const Container = styled.div`
  font-size: 1.2em;
  color: black;
  width: fit-content;
  max-width: 600px;
  height: fit-content;

  border: 1px solid #F5F5F5;
  box-shadow: 20px 20px 40px lightgrey;
  transform: scale(.95);
  transition: .4s;

  &:hover {
      cursor: pointer;
      transform: scale(1);
      box-shadow: 30px 30px 120px lightgrey;
      transition: .4s;
  }
`

const Title = styled.h3`
  color: #212121;
  font-size: 2em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding: 5%;
`

const Preview = styled.p`
  text-align: center;
  font-family: 'Fira Sans', sans-serif;
  color: #212121;
  margin: auto;
  padding: 10%;
  width: 80%;
`

export default Article
