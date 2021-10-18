import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'


function Home() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

 
    return (
        <div>
        <div className='home-index' style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/tropical.jpeg')`,
            backgroundPosition: "bottom",
            backgroundSize: "fill"
        }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img className='lizzie-sun' src={process.env.PUBLIC_URL + '/images/blah.png'} alt=""/>
            <h1 className='tagline'>A Place for Reptile Lovers</h1>
            <div>
                <br />
            <Link to='/profile'>
            <img className='loginlog'src={`${process.env.PUBLIC_URL}/images/login.png`}/>
            </Link>
            </div>
            
        </div>
        </div>
    )
}
export default Home
