import React from 'react';
import { Link } from 'react-router-dom'
import SocialSharer from '../components/SocialSharer'


function Footer(){
    return(
        <div className='footer'>
           <span className='inlinefooter'> 
                
                <Link to='./'><img className='logofooter' src={process.env.PUBLIC_URL + '/images/Lizzieinc.png'} alt="" /></Link>
                <span className='footerlinks'>
                    <div className='footerlinklist'>
                    <SocialSharer />
                    &nbsp;  
                    </div>
                </span>
            </span>
        </div>
    )
}
export default Footer