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
              <Link to="/profile">Profile</Link>
              <span onClick={() => logout({ returnTo: window.location.origin })}>Log out</span>
          </>
       )
  }else{
      // If not looged in, show the login button
      navItems = (  <span onClick={() => loginWithRedirect()}>Log In</span> )
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
                    <Link to="/about" className='public-header'>About</Link>
                    &nbsp;
                    <Link to="/articles" className='public-header'>Articles</Link>
                    <NavDropdown title="Lizzie" id="basic-nav-dropdown" >
                       {/* <img className='tiny-logobanner'src={`${process.env.PUBLIC_URL}/images/EL.png`}/> */}
                    { navItems }
                    <NavDropdown.Divider />
                  </NavDropdown>

                </Nav>
              </Navbar.Collapse>
            </Navbar>

          </span>
        </span>
      </div>
    </div>
      
   
  )
}
export default Header




/////////////////Old Header//////////////////
// function Header(){
//   return(
//     <div className='header'>
//       <span className='inlineheader'> 
//         <Navbar.Brand href="/">
//             <img className='logobanner'src={`${process.env.PUBLIC_URL}/images/Ldot.png`}/>
//         </Navbar.Brand>
//       <span className="headerlinks">
//         <Navbar expand="lg">
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="me-auto">
//                 <Nav.Link href="/about">About</Nav.Link>
//                 <Nav.Link href="/articles">Articles</Nav.Link>
//                 <NavDropdown.Divider />
//                 <NavDropdown title="Login/Sign-Up" id="basic-nav-dropdown" >
//                 <NavDropdown.Item href="./login" className='lank'>Login</NavDropdown.Item>
//                 <NavDropdown.Item href="./signup" className='lank'>Sign-up</NavDropdown.Item>
//                 <NavDropdown.Divider />
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </span>
//       </span>
//     </div>
//   )
// }
// export default Header
//////////////End Old Header//////////////