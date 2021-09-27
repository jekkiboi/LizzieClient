import React from 'react';
import { Link } from 'react-router-dom'
// import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
      // If not looged in, show the login button
      navItems = ( <span className="drop-menu-login" onClick={() => loginWithRedirect()}>Log In</span> )
  }
 
  return (
    <div>
      <div className='header'>
        <span className='inlineheader'>
          <Link to="/">
            <img className='logobanner'src={`${process.env.PUBLIC_URL}/images/Ldot.png`}/>
          </Link>
          <span className="headerlinks">
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <NavDropdown.Divider />
                 
                    <NavDropdown title="" id="basic-nav-dropdown" >
                    { navItems }
                    <NavDropdown.Divider />
                    
                  </NavDropdown>
                  &nbsp;
                    <Link to="/about" className='public-header'>About</Link>
                    &nbsp;&nbsp;
                    <Link to="/articles" className='public-header'>Articles</Link>
                </Nav>
                
              </Navbar.Collapse>
            </Navbar>
            &nbsp; &nbsp;
          
          </span>
       
        </span>
        
      </div>
    </div>
      
   
  )
}
export default Header


