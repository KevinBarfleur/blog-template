// React
import React, { Component } from 'react'

// Styled components
import styled from 'styled-components'


class Loader extends Component {
  constructor () {
    super()

    this.state = {  }
  } 

  render () {
    return (
        <LoaderDiv>
            <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-ellipsis">
                <circle cx="84" cy="50" r="0.0883226" fill="#212121">
                    <animate attributeName="r" values="10;0;0;0;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="4s" repeatCount="indefinite" begin="0s"></animate>
                    <animate attributeName="cx" values="84;84;84;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="4s" repeatCount="indefinite" begin="0s"></animate>
                </circle>
                <circle cx="83.6997" cy="50" r="10" fill="#90caf9">
                    <animate attributeName="r" values="0;10;10;10;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="4s" repeatCount="indefinite" begin="-2s"></animate>
                    <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="4s" repeatCount="indefinite" begin="-2s"></animate>
                </circle>
                <circle cx="49.6997" cy="50" r="10" fill="#f48fb1">
                    <animate attributeName="r" values="0;10;10;10;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="4s" repeatCount="indefinite" begin="-1s"></animate>
                    <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="4s" repeatCount="indefinite" begin="-1s"></animate>
                </circle>
                <circle cx="16" cy="50" r="9.91168" fill="#FFF9C4">
                    <animate attributeName="r" values="0;10;10;10;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="4s" repeatCount="indefinite" begin="0s"></animate>
                    <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="4s" repeatCount="indefinite" begin="0s"></animate>
                </circle>
                <circle cx="16" cy="50" r="0" fill="#212121">
                    <animate attributeName="r" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="4s" repeatCount="indefinite" begin="0s"></animate>
                    <animate attributeName="cx" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="4s" repeatCount="indefinite" begin="0s"></animate>
                </circle>
            </SVG>
        </LoaderDiv>
    )
  }
}

const LoaderDiv = styled.div`
    z-index: 999;
    background-color: white;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
`

const SVG = styled.svg`
    width: 200px;
    height: 200px;
    background: none;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`

export default Loader
