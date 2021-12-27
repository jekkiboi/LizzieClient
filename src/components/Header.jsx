import React from 'react';
import { Link } from 'react-router-dom'
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  let navItems;
  //If logged in, show the profile and nav buttons.
  if(isAuthenticated){
      navItems = (
          <>
              &nbsp;&nbsp;
              <Link className="drop-menu" to="/profile">Profile</Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="drop-menu" onClick={() => logout({ returnTo: window.location.origin })}>Logout</span>
              &nbsp;&nbsp;
          </>
       )
  }else{
      //If not logged in, show the login button
      navItems = ( <span className="drop-menu-login" onClick={() => loginWithRedirect()}>Log In</span> )
  }
  return (
    <div>
      <div className='header'>
        <span className='inlineheader'>
          <Link to="/">
            <img className='logobanner'src={`${process.env.PUBLIC_URL}/images/Ldot.png`} alt="background"/>
          </Link>
          <span className="headerlinks">
                      <div className='public-header1'>
                      { navItems }
                      </div>
                    &nbsp; &nbsp;
                    <Link to="/about" className='public-header'>About</Link>
                    &nbsp;&nbsp;
                    <Link to="/articles" className='public-header'>Articles</Link>
            &nbsp; &nbsp;
          </span>
        </span>
      </div>
    </div>
  )
}
export default Header