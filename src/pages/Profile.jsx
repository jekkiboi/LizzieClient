import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log(user)
    //user.sub is the unique identifier for the user
    //we want to use that and send it to the express server to create a user in the user model
    fetch(`${process.env.REACT_APP_SERVER_URL}/auth`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ auth0Id: user.sub })
    })
      .then(response => response.json())
      .then(data => {
        console.log('data here!', data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [user])

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <div className='app-index'
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg3leafless.png')`,
            backgroundPosition: "bottom",
            backgroundSize: "fill"
          }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="navigate">
            <div className='column-2'>
              <br />
              <img className='user-picture' src={user.picture} alt={user.name} />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h3 className='user-name'>Username: {user.name}</h3>
              <h3 className='user-email'>Email: {user.email}</h3>
              <div className='the-forum'>
                {isAuthenticated ? <Link to="/articles" className='the-forum'>Enter Forum</Link> : ""}
          </div>
            </div>
            <div className='column-1'>
              <h3 className='your-profile'>Your </h3>
              <h3 className='your-profile'> Profile</h3>
            </div>
          </div>
          
        </div>
        
      </div>
    )
  );
};
export default Profile;



