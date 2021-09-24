import "../articleShowPage.css";
import React from "react";
import axios from "axios";
import ArticleModel from "../models/ArticleModel";
import { Link, Redirect } from "react-router-dom";
import { useState, useEffect } from "react"
import { useAuth0 } from '@auth0/auth0-react'


export default function ArticleShowPage(props) {
  console.log('this is them proppies', props)
  const { getAccessTokenSilently } = useAuth0()
  const [articleData, setArticleData] = useState([])
  const [redirect, setRedirect] = useState(false)

  /////////NEED BOTH DELETE FUNCTIONS/////////////
  async function deleteArticle() {
    const serverUrl = process.env.REACT_APP_SERVER_URL
    const token = await getAccessTokenSilently()
    axios.delete(`${process.env.REACT_APP_SERVER_URL}${props.location.pathname}`,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(data => {
        setRedirect(true)
      })
      .catch(err => {
        console.log('error')
      })
  }
  useEffect(() => {
    async function getArticles() {
      const serverUrl = process.env.REACT_APP_SERVER_URL
      const token = await getAccessTokenSilently()
      console.log(token)

      fetch(serverUrl + `${props.location.pathname}`, {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

        .then(response => response.json())
        .then(data => {
          setArticleData(data)
          // console.log(articleData)
        })
        .catch(err => {
          console.log(err)
        });
    };
    getArticles()
  }, [getAccessTokenSilently])
  if (redirect == true) {
    return (
      <Redirect to="/articles" />
    )
  }
  else {
    return (
      <div className="" style={{
        backgroundColor: '#228B22',
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg.png')`,
        backgroundPosition: "bottom",
        backgroundSize: "fill"
      }}>
        <div>
          <span className='title-line'>
            <h2>
              <p className="delete-button-wrapper">
                <button className='delete-button submit-button'
                  onClick={deleteArticle}>
                  Delete Article
                </button>
              </p>
            </h2>
          </span>
          <h1 className="">{articleData.title}</h1>
          <br />
          <h2 className="">{articleData.content}</h2>
          <br />
          <br />
          <br />
          <img className="article-pic" src={articleData.image} alt="" />

          <div className="">

          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }

}

