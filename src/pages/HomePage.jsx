// import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function Home() {
//    const { isAuthenticated } = useAuth0()

    return (
        <div className='homepage-css' style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/lizziedetailed.png')`
        }}>
            <h1></h1>
        </div>
    )
}

export default Home


//////////////////Old Home////////////////////
// import React from 'react'
// // import { bounce } from 'react-animations'
// // import styled, { keyframes } from 'styled-components'
// function HomePage(){
// //  const Bounce = styled.div`animation 2s ${keyframes`${bounce}`}3`
//     return(
//         <div>
//             {/* <Bounce> */}
//                 <div className='homepage-css' style={{
//                 backgroundImage: `url('${process.env.PUBLIC_URL}/images/lizziedetailed.png')`
//             }}>
//             </div>
//             {/* </Bounce> */}
//         </div>
//     )
// }
// export default HomePage
////////////////////////////////////////////////////