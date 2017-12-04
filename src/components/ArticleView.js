// React
import React, { Component } from 'react'

// Components
import PlainTextEditor from './PlainTextEditor'
import ReadTextEditor from './ReadTextEditor'

// Styled components
import styled from 'styled-components'

/* STYLE */
const Container = styled.div`
  width: 60vw;
  height: 100vh;
  background-color: white;
`

class ArticleView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      content: props.content,
      selected: props.selected,
      //save: false
    }
  }

  // Autosave
  // componentDidMount () {
  //   this.timer = setInterval(() => {
  //     console.log('okok')
  //   }, 50)
  // }

  // componentWillUnmount () {
  //   clearInterval(this.timer)
  // }

  render () {
    if (this.props.login) {
      return(
          <Container className="articleView">
            <Button onClick={ this.props.quitEditor }><i className="fa fa-angle-left"></i> Retour</Button>
            <DeleteButton onClick={() => this.props.deleteArticle(this.state.selected) }><i className="fa fa-trash"></i> Supprimer article</DeleteButton>
            <PlainTextEditor content={ this.props.content } 
                            selected={ this.props.selected }
                            saveArticleHtmlToBase={ this.props.saveArticleHtmlToBase }
                            saveArticleTitle={ this.props.saveArticleTitle }
                            updateTitle={ this.props.updateTitle }
                            updateImage={ this.props.updateImage }
                            updatePresentation={ this.props.updatePresentation }
                            uploadArticle={ this.props.uploadArticle }
                            updateKeywords={ this.props.updateKeywords } />
          </Container>
      )
    } else {
      return (
        <Container className="articleView">
          <Button onClick={ this.props.changeView }><i className="fa fa-angle-left"></i> Retour</Button>
          <Title> { this.props.content.article } </Title>
          {/* <div dangerouslySetInnerHTML={{ __html: this.state.content.htmlContent }}></div> */}
          <ReadTextEditor content={ this.props.content }/>
        </Container>
      )
    }
  }
}

const Title = styled.h3`
  color: #212121;
  text-align: center;
  font-size: 5em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding: 10%;
`

const Button = styled.button`
position: fixed;
top: 20px;
right: 20px;

font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";  

width: 150px;
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

const DeleteButton = Button.extend`
  background-color: #FF8A80;
  color: white;
  top: 80px;

  &:hover {
    cursor: pointer;
    background-color: #FF5252;
    transition: .3s;
  }
`

export default ArticleView
