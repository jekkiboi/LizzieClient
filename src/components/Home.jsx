import React, { Component } from 'react'
import { bounce } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const Bounce = styled.div`animation 2s ${keyframes`${bounce}`}3`

export default class HomePage extends Component{
 render(){
    return(
        <div>
            <Bounce><img className='bounce' src={process.env.PUBLIC_URL + '/images/lizziedetailed.png'} alt="" />
            </Bounce>
        </div>
    )
 }
}

