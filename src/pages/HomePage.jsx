// import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'


function Home() {
//    const { isAuthenticated } = useAuth0()
    return (
        <div>
        <div className='app-index' style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/GrassS.png')`,
            backgroundSize: "fill"
        }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img className='lizzie-sun' src={process.env.PUBLIC_URL + '/images/lizzieSun.png'} alt=""/>
            <h1 className='tagline'>(For Reptile Lovers Only)</h1>
            
        </div>
        </div>
    )
}
export default Home
