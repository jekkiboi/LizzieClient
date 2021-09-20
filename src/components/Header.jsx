import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className='header'>
           <span className='inlineheader'> 
                <Link to='./'><img className='logobanner' src={process.env.PUBLIC_URL + '/images/LizzieOpaque.png'} alt="" /></Link>
                <span className='headerlinks'>
                    <ul className='something'>
                <li className='Search'></li> &nbsp;
                <Link to='./signup' className='lank'> Sign-Up </Link> &nbsp;&nbsp;
                <Link to='./login' className='lank'> Login </Link> &nbsp;&nbsp;
                <li className='cities-link'><Link to='./articles' className='lank'>Articles</Link></li>&nbsp;&nbsp;
                <Link to='./about' className='lank'> About </Link> &nbsp;&nbsp;&nbsp;&nbsp;
                    </ul>
                </span>
            </span>
        </div>
    )
}
export default Header