// React
import React, { Component } from 'react'

// Styled components
import styled, { keyframes } from 'styled-components'


class CreateArticlePanel extends Component {
  render () {
    return (
      <Container className="createArticlePanel createPanelElement">
        <Hero className='createPanelElement'>
          <h3 className='createPanelElement'>Ajouter un article.</h3>
        </Hero>
        <Quit onClick={ this.props.quitCreateArticlePanel } className='createPanelElement'><i className="fa fa-angle-double-left"></i></Quit>
        <Form onSubmit={ event => this.props.addArticle(event, this.articleTitle.value, this.articleImage.value, this.preview.value) } className='createArticleForm createPanelElement'>
            <TitleInput required placeholder="Nom de l'article" innerRef={x => {this.articleTitle = x}} className='article-name createPanelElement'/>
            <ImageInput required placeholder="Image de carte de l'article" innerRef={x => {this.articleImage = x}} className='article-image createPanelElement'/>
            <PreviewInput placeholder="Présentation de l'article" 
                          innerRef={x => {this.preview = x}} 
                          className='article-presentation createPanelElement' 
                          name="explanation" 
                          dirname="explanation.dir"/>         
            <Submit type="submit" className='createPanelElement'>Ajouter</Submit>
        </Form>
      </Container>
    )
  }
}

/* STYLE */
const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateX(-70%);
}

to {
  opacity: 1;
  transform: translateX(0%);
}
`;

const Container = styled.div`
  z-index: 999;
  width: calc(100vw - 250px);
  height: 100vh;

  position: fixed;
  top: 0px;
  left: 250px;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  animation: .3s ${fadeIn};
`

const Hero = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100px;

  background-color: #212121;

  h3 {
    font-size: 2em;
    color: white;
    text-align: center;
    margin-top: 30px;
  }
`

const Form = styled.form`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: start;
  margin-top: auto 20%;
`

const TitleInput = styled.input`
  margin: auto;
  width: 200px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid #F5F5F5;
  text-align: center;
  margin-bottom: 20px;
`
const ImageInput = styled.input`
  margin: auto;
  width: 200px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid #F5F5F5;
  text-align: center;
  margin-bottom: 20px;
`
const PreviewInput = styled.textarea`
  border-radius: 20px;
  border: 1px solid #F5F5F5;
  padding: 20px 20px;
  width: 600px;
  height: 150px;
  resize: none;
`

const Submit = styled.button`
  margin: auto;
  margin-top: 40px;
  text-align: center;
  width: 80px;
  height: 40px;
  background-color: #212121;
  color: white;

  border: 1px solid #F5F5F5;
  border-radius: 20px;
  transition: .4s;

  &:hover {
    cursor: pointer;
    transition: .4s;
  }

  &:focus {
    outline: none;
  }
`

const Quit = styled.div`
  position: absolute;
  top: 40px;
  right: 80px;
  border: none;
  color: white;
  transform: scale(2);

  transition: .4s;

  &:hover {
    cursor: pointer;
    transform: scale(2.6);
    transition: .4s;
  }
  &:focus {
    outline: none;
  }
`

export default CreateArticlePanel
