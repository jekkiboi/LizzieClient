import { Link } from 'react-router-dom'

function Home() {
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
                <img className='lizzie-sun' src={process.env.PUBLIC_URL + '/images/liz.png'} alt=""/>
                <h1 className='tagline'>A Place for Reptile Lovers</h1>
            <br />
                <div>
                    <Link to='/profile'>
                        <img className='loginlog'src={`${process.env.PUBLIC_URL}/images/login.png`} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home