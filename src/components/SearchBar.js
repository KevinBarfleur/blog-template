// React
import React, { Component } from 'react'

// Styled components
import styled from 'styled-components'


class Search extends Component {
  constructor () {
    super()

    this.state = {  }
  } 

  search = value => {
    const search = value === '' ? true : false
    this.props.searchView(search, value)
  }

  render () {
    return (
        <div>
            <SearchBar placeholder='Rechercher' innerRef={x => this.searchInput = x} onChange={() => this.search(this.searchInput.value) }/>
        </div>
    )
  }
}

const SearchBar = styled.input`
    z-index: 1;
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: .8em;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";  
    text-align: center;
    width: 160px;
    height: 50px;
    color: grey;

    border: 1px solid #F5F5F5;
    background-color: #white;
    border-radius: 20px;
    transition: .3s;

    &:hover {
    cursor: text;
    }

    &:focus {
    background-color: #F5F5F5;
    transition: .3s;
    outline: none;
    }
`

export default Search
