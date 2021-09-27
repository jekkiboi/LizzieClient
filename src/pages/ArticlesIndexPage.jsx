import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";


export default function ArticlesIndexPage(){
  const { getAccessTokenSilently } = useAuth0()
  const [articleData, setArticleData] = useState([])

  useEffect (() => {

  async function getArticles() {
    const serverUrl = process.env.REACT_APP_SERVER_URL
    const token = await getAccessTokenSilently()
    console.log(token)

    fetch(serverUrl + '/articles', {headers: { 'Authorization': `Bearer ${token}` }  })
        .then(response => response.json())
        
        .then(data => {
          setArticleData(data)
          console.log(data)
        })
        .catch(err => {
            console.log(err)
        });
    }
    getArticles()
  }, [getAccessTokenSilently])


    return (
        <div
        className="app-index"
        style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg3leaf.png')`,
            backgroundSize: 'cover',
          }}
        >
          <div className='article-index-body'>
            <br />
          <span className='add-article'> 
           
            <h3 className='add-article-title'>The Forum</h3>
            <div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link  to="/create"> 
                    <img className='plus-sign' src={`${process.env.PUBLIC_URL}/images/plussign.png`} />
                </Link>  
            </div>
            </span>
           
          
            <div className="generated-articles">
              

              <ul className= 'articles-again'>
              {articleData.map((articleObj, i)=> {
                  return<Link to={`/articles/${articleObj._id}`} key={i}>{articleObj.title}</Link>
              })}
              </ul>
              <div></div>
              <div></div>
            </div>
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
