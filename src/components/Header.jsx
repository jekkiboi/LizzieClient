import React from 'react';
// import { Link } from 'react-router-dom'
// import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header(){
    return(
        <div className='header'>
           <span className='inlineheader'> 
           <Navbar.Brand href="/">
                <img className='logobanner'src={`${process.env.PUBLIC_URL}/images/Ldot.png`}/>
            </Navbar.Brand>
           <span className="headerlinks">
            <Navbar expand="lg">
        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/articles">Articles</Nav.Link>

                <NavDropdown.Divider />
                <NavDropdown title="Login/Sign-Up" id="basic-nav-dropdown" >
                  <NavDropdown.Item href="./login" className='lank'>Login</NavDropdown.Item>
                  <NavDropdown.Item href="./signup" className='lank'>Sign-up</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </span>













               {/* /////////////////////////////////////
                <Link to='./'><img className='logobanner' src={process.env.PUBLIC_URL + '/images/Ldot.png'} alt="" /></Link>
                <span className='headerlinks'>
                    <ul className='something'>
                <li className='Search'></li> &nbsp;
                <Link to='./signup' className='lank'> Sign-Up </Link> &nbsp;&nbsp;
                <Link to='./login' className='lank'> Login </Link> &nbsp;&nbsp;
                <li className='cities-link'><Link to='./articles' className='lank'>Articles</Link></li>&nbsp;&nbsp;
                <Link to='./about' className='lank'> About </Link> &nbsp;&nbsp;&nbsp;&nbsp;
                    </ul>
                </span> */}
            </span>
        </div>
    )
}
export default Header