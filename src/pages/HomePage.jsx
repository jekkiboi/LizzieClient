import React from 'react'
import { bounce } from 'react-animations'
// import styled, { keyframes } from 'styled-components'
function HomePage(){
//  const Bounce = styled.div`animation 2s ${keyframes`${bounce}`}3`
    return(
        <div>
            {/* <Bounce> */}
                <div className='homepage-css' style={{
                backgroundImage: `url('${process.env.PUBLIC_URL}/images/lizziedetailed.png')`
            }}>
            </div>
            {/* </Bounce> */}
        </div>
    )
}

export default HomePage