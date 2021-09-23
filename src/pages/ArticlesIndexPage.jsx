import { Component } from "react";
import ArticleModel from "../models/ArticleModel";
import ArticleShowPage from "../pages/ArticleShowPage";
import { Link } from "react-router-dom";
// const axios = require('axios').default;
import axios from "axios";
// import React, { useEffect } from "react";
import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react";


export default function ArticlesIndexPage(){
  const { getAccessTokenSilently } = useAuth0()
  const [articleData, setArticleData] = useState([])

  async function handleSubmit(e){
    const token = await getAccessTokenSilently()
    e.preventDefault()

  fetch(`${process.env.REACT_APP_SERVER_URL}/articles`, {
    //This code was what was here before 
    //I need to use the article model sooo...ya:
    //ArticleModel.all().then((data) => { },
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
    },
    body: JSON.stringify({ data: articleData }),
  })
      .then(response => response.json())
      .then(data => {
          console.log(data)
      })
      .catch(err => {
          console.log(err)
    });
  };

//lifecycle method the runs automatically when the component loads
  // componentDidMount = () => {
  //   console.log("mounted");
  //   //make fetch called here, or at least reference the game model which has it
  //   this.fetchData();
  // };

    return (
        <div
        className="main"
        style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg.png')`,
            backgroundPosition: "bottom",
        }}
        >
          <span className='add-article'> 
            <h3 className='add-article-title'>Add an Article</h3>
            <div>
                <Link  to="/create"> 
                    <img className='plus-sign' src={`${process.env.PUBLIC_URL}/images/plussign.png`} />
                </Link>  
            </div>
            </span>
            <div className="generated-articles">
              {articleData.map((articleObj, i)=> {
                  return<Link to={`/articles/${articleObj._id}`} key={i}>{articleObj.title}</Link>
              })}
            </div>
        </div>
    )};
  




// Steps to render the list of Articles
// - Create a component for each Article
// - Need to access the database to get the data
// - Add state to maintain list of all data
//////////////Old Articles Index Page///////////////
// class ArticlesIndexPage extends Component {
//   state = {
//     articleData: []
//   };

  // fetchData = () => {
  //   ArticleModel.all().then((data) => {
  //     console.log(data);
  //     this.setState({ articleData: data });
  //   });
  // };

// //lifecycle method the runs automatically when the component loads
//   componentDidMount = () => {
//     console.log("mounted");
//     //make fetch called here, or at least reference the game model which has it
//     this.fetchData();
//   };

//   render() {
//     return (
//         <div
//         className="main"
//         style={{
//             backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg.png')`,
//             backgroundPosition: "bottom",
//         }}
//         >
//           <span className='add-article'> 
//             <h3 className='add-article-title'>Add an Article</h3>
//             <div>
//                 <Link  to="/create"> 
//                     <img className='plus-sign' src={`${process.env.PUBLIC_URL}/images/plussign.png`} />
//                 </Link>  
//             </div>
//             </span>
//             <div className="generated-articles">
//               {this.state.articleData.map((articleObj, i)=> {
//                   return<Link to={`/articles/${articleObj._id}`} key={i}>{articleObj.title}</Link>
//               })}
//             </div>
//         </div>
//     );
//   }
// }

// export default ArticlesIndexPage;
