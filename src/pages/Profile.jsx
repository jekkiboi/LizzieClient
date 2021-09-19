import React from 'react'
function Profile(){
    return(
        <div className='profile' 
            style={{
                backgroundImage: `url('${process.env.PUBLIC_URL}/images/homebw.jpeg')`
            }}>
        </div>
    )
}

export default Profile
