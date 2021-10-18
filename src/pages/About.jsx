import React from "react";


function About(){
    return(
        <div
      className="app-index"
      style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/Grassreverse.png')`,
          backgroundSize: "fill",
      }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="who-we-are">Who We Are</h1>
            
            <h4 className='about-body'>Lizzie is an app designed for reptile lovers everywhere. 
                 We hope that this app allows you to 
                connect, find friends, and be a little more of a knowledgable pet owner.
            </h4>
        </div>
    )
}
    
export default About