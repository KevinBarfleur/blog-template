
// React
import React from 'react'
import ReactQuill from 'react-quill'

// Styled components
import styled from 'styled-components'

import './style/quillSnow.css'

class PlainTextEditor extends React.Component {
  constructor(props) {
    super(props)

    const htmlContent = this.props.content.htmlContent ? this.props.content.htmlContent : null
    const title = this.props.content.article ? this.props.content.article : null
    const img = this.props.content.img ? this.props.content.img : null
    const keywords = this.props.content.keywords ? this.props.content.keywords : null
    const preview = this.props.content.preview ? this.props.content.preview : null

    this.state = { 
      articleHTML: htmlContent,
      articleTitle: title,
      articleImage: img,
      articlePresentation: preview,
      keywords: keywords,
      visible: false,
      theme: 'snow'
     } // You can also pass a Quill Delta here

    this.saveEditorState = this.saveEditorState.bind(this)
  }

  uploadArticle = visible => {
    const index = this.props.selected
    this.setState({visible: visible}, this.props.uploadArticle(index, visible))
  }

  updateAll = () => {
    const index = this.props.selected
    this.props.updateKeywords(index, this.keywordRef.value)
    this.props.updateTitle(index, this.state.articleTitle)
    this.props.updateImage(index, this.state.articleImage)
    this.props.updatePresentation(index, this.state.articlePresentation)
  }

  saveEditorState() {
    const value = this.refs.editor.state.value
    this.setState({ articleHTML: value }, () => {
      this.props.saveArticleHtmlToBase(this.props.selected, this.state.articleHTML)
      this.updateAll()
    })
  }

  setTitle = () => {
    const title = this.titleRef.value
    this.setState({ articleTitle: title }, () => {
      this.updateAll()
    })
  }

  setImage = () => {
    const image = this.imageRef.value
    this.setState({ articleImage: image }, () => {
      this.updateAll()
    })
  }

  setPresentation = () => {
    const presentation = this.previewRef.value
    this.setState({ articlePresentation: presentation }, () => {
      this.updateAll()
    })
  }

  render() {
    const visible = this.props.content.visible
    const onlineButton = visible ?  <OfflineButton onClick={() => this.uploadArticle(visible) }><i className="fa fa-cloud-download"></i> Mettre hors-ligne</OfflineButton> :
                                    <UploadButton onClick={() => this.uploadArticle(visible) }><i className="fa fa-cloud-upload"></i> Mettre en ligne</UploadButton>
    return (
      <div>
        <SaveButton onClick={ this.saveEditorState }><i className="fa fa-floppy-o"></i> Sauvegarder</SaveButton>
        { onlineButton }
        <InputContainer>
          <Label>Titre <Input innerRef={x => {this.titleRef = x}}  defaultValue={ this.state.articleTitle } onChange={() => this.setTitle(this.state.articleTitle) }></Input></Label>
          <Label>Image de l'article <Input innerRef={x => {this.imageRef = x}}  defaultValue={ this.state.articleImage } onChange={() => this.setImage(this.state.articleImage) }></Input></Label>
          <Label>Mots-clefs <Input innerRef={ x => this.keywordRef = x } defaultValue={ this.state.keywords } placeholder='#motclef1 #motclef2 #motclef3...'></Input></Label>
          <PreviewInput placeholder="Présentation de l'article" 
                        defaultValue={ this.state.articlePresentation }
                        onKeyUp={() => this.setPresentation(this.state.articlePresentation) }
                        innerRef={x => {this.previewRef = x}} 
                        className='article-presentation' 
                        name="explanation" 
                        dirname="explanation.dir"/>          
        </InputContainer>
          <ReactQuill value={ this.state.articleHTML }
                    placeholder='Editez ici...'
                    ref='editor'
                    theme={this.state.theme}
                    modules={PlainTextEditor.modules}
                    formats={PlainTextEditor.formats}
                    bounds={'.app'}/>
      </div>
    )
  }
}


const SaveButton = styled.button`
  position: fixed;
  top: 200px;
  right: 20px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";  

  width: 150px;
  height: 50px;
  color: white;

  border: 1px solid #F5F5F5;
  background-color: #81C784;
  border-radius: 20px;
  transition: .3s;

  &:hover {
    cursor: pointer;
    background-color: #4CAF50;
    transition: .3s;
  }

  &:focus {
    outline: none;
  }
`

const UploadButton = SaveButton.extend`
  top: 140px;
  right: 20px;
  background-color: #90CAF9;

  &:hover {
    cursor: pointer;
    background-color: #42A5F5;
    transition: .3s;
  }

  &:focus {
    outline: none;
  }
`

const OfflineButton = SaveButton.extend`
  top: 140px;
  right: 20px;
  background-color: #90CAF9;
  width: 150px;
  font-size: .9em;

  &:hover {
    cursor: pointer;
    background-color: #42A5F5;
    transition: .3s;
  }

  &:focus {
    outline: none;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  margin: auto;
  width: 400px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid #F5F5F5;
  text-align: center;
  margin-bottom: 20px;
  margin-left: 20px;
  padding: 0 30px;
`

const PreviewInput = styled.textarea`
  border-radius: 20px;
  border: 1px solid #F5F5F5;
  padding: 20px 20px;
  width: 600px;
  height: 150px;
  margin-bottom: 80px;
  resize: none;
`

const Label = styled.label`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";  
  font-style: italic;
`

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */

PlainTextEditor.modules = {
  syntax: true,
  toolbar: [
    // [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    // [{size: []}],
    // ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    // [{'list': 'ordered'}, {'list': 'bulledivContainer'}],
    // ['link', 'image', 'video'],
    // ['clean']
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['link', 'image', 'video'],
  
    ['clean']                                         // remove formatting button
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
PlainTextEditor.formats = [
  'code-block', 'align',
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

export default PlainTextEditor