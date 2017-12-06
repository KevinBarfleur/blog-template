// React
import React, { Component } from 'react'

// Styled components
import styled, { keyframes } from 'styled-components'

import { fadeIn } from 'react-animations'

class SearchResult extends Component {
  constructor () {
    super()

    this.state = {  }
  } 

  render () {
    const index = this.props.index
    const currentSearch = this.props.currentSearch
    

    if(this.props.details.keywords) {
        if(this.props.details.keywords.includes(currentSearch)) {
            return (
                <Container className="searchResult" onClick={() => this.props.changeViewFromSearch(index) }>
                    <h3>{ this.props.details.article }</h3>
                    <img src={ this.props.details.img } alt='image article' width='60%'/>
                </Container>
            )
        }
    }    
    return (
         null
    )
  }
}

// const Fade = ({ in: inProp }) => (
//     <Transition in={inProp} timeout={duration}>
//       {(state) => (
//         <div style={{
//           ...defaultStyle,
//           ...transitionStyles[state]
//         }}>
//         </div>
//       )}
//     </Transition>
//   )

// const duration = 300;
  
// const defaultStyle = {
//     transition: `opacity ${duration}ms ease-in-out`,
//     opacity: 0
// }

// const transitionStyles = {
//     entering: { opacity: 0 },
//     entered: { opacity: 1 },
// }


const fadeInAnimation = keyframes`${fadeIn}`

const Container = styled.div`
    font-size: 1.2em;
    color: black;
    width: fit-content;
    max-width: 300px;
    height: fit-content;

    border: 1px solid #F5F5F5;
    box-shadow: 5px 5px 10px lightgrey;
    transform: scale(.95);
    transition: .4s;

    text-align: center;
    padding: 5% 0%;

    &:hover {
        cursor: pointer;
        transform: scale(1);
        box-shadow: 10px 10px 50px lightgrey;
        transition: .4s;
    }

    animation: .5s ${fadeInAnimation}
`

export default SearchResult
