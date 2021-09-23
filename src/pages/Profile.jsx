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
      method:'POST',
      mode: 'cors',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ auth0Id: user.sub})
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
      <div className='profile' 
            style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/homebw.jpeg')`
            }}>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      { isAuthenticated ? <Link to="/protectedPage">Your Articles</Link> : "" }
      </div>
    )
  );
};

export default Profile;



///////////////Old Home////////////
// import React from 'react'
// function Profile(){
//     return(
//         <div className='profile' 
//             style={{
//                 backgroundImage: `url('${process.env.PUBLIC_URL}/images/homebw.jpeg')`
//             }}>
//         </div>
//     )
// }
// export default Profile
///////////End Old Home////////////////