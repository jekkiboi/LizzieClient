//UPLOAD CARE API KEY= `4a022e7b929332d401c9`
// import { render } from '@testing-library/react'
import React from 'react'
import Upload from '../components/Upload'
import { useState } from "react"
import { useAuth0 } from '@auth0/auth0-react'
import { Redirect } from 'react-router-dom'

export default function CreateArticle() {
  const { getAccessTokenSilently } = useAuth0()
  const [articleData, setArticleData] = useState([])
  const [inputVal, setInputVal] = useState('')
  const [content, setContent] = useState('')
  const [inputImage, setInputImage] = useState('')
  const [redirect, setRedirect] = useState(false)

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value)
  }
  const handleImageChange = (e) => {
    setInputImage(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault()
    const token = await getAccessTokenSilently()

    fetch(`${process.env.REACT_APP_SERVER_URL}/articles`, {
      method: 'POST',
      mode: 'cors',
      title: inputVal,
      content: content,
      image: inputImage,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title: inputVal, content: content, image: inputImage }),
    })
      .then(response => response.json())
      .then(data => {
        setRedirect(true)
      })
      .catch(err => {
        console.log(err)
      })
  }
  if(redirect == true){
    return(
     <Redirect to="/articles" /> 
    )
  } 
  else{
    return (
      <div>
        <div className="" style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "fill"
        }}
        >
          <h1>Create Post</h1>
          <h2>Title:</h2>
  
          <form onSubmit={handleSubmit}>
            <input
              className="input-text"
              type="text"
              value={inputVal}
              onChange={handleChange}
            />
            <h2></h2>
            <textarea
              rows="4"
              className="input-content"
              type="text"
              value={content}
              onChange={handleContentChange}
            />
            <h2>Add a picture by inserting the url below</h2>
            <input
              className="input-text"
              type="text"
              value={inputImage}
              onChange={handleImageChange}
            />
            <p />
            <input className="submit-button" type="submit" />
            <h2>
              <Upload />
            </h2>
          </form>
        </div>
      </div>
    )
  }
}


