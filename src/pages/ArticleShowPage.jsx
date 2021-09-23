import "../articleShowPage.css";
import React from "react";
import axios from "axios";
import ArticleModel from "../models/ArticleModel";
import { Link, Redirect } from "react-router-dom";
// fetch data for the  in particular by it's id
/*
 */
class ArticleShowPage extends React.Component {
  state = {
    title: "",
    content: "",
    image: "",
    shouldRedirect: false
    // articlePreview: [],
  };
  /////////NEED BOTH DELETE FUNCTIONS/////////////
  handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/articles/${id}`)
    .then(() => {
      this.setState({shouldRedirect: true})
    })
  }
  
  // deleteArticle = (id) => {
  //   console.log("delete article activated");
  //   const articleDataArray = this.state.article.filter((articleObj) => {
  //     console.log(this.articleObj._id, id);
  //     if (this.articleObj._id == id) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });
  //   this.setState({ articleData: articleDataArray });
  // };
//////////////////////////////
//mounting component setting state and article is set inside state
//this fetches data
  componentDidMount() {
    const articleId = this.props.match.params.id;
    console.log(articleId);
    ArticleModel.show(articleId).then((data) => {
      console.log('yippe data');
      console.log(data);

      this.setState({
        article: data
      });
    });
  }
//   renderArticles = () => {
//     let articlesJSX = this.state.articles.map((article) => {
//       return (
//         <div className="">
//           <ul>
//             <li>
//               <a href={`/articles/${this.props.match.params.id}/${article._id}`}>
//                 {article.content}
//               </a>
//               {/* render as links to article */}
//               {/* {article.content} */}
//             </li>
//           </ul>
//         </div>
//       );
//     });
//     return articlesJSX;
//   };
  render() {
    if(this.state.shouldRedirect===true){
      return(
      <Redirect to={`/articles`} />
      )}
    if(!this.state.article){
      return <h1>No posts yet!</h1>
    }
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
                    onClick={() => this.handleDelete(this.state.article._id)}> 
                        Delete Article
                    </button> 
                </p>
            </h2>
          </span>
          <h1 className="">{this.state.article.title}</h1>
        <br/>
          <h2 className="">{this.state.article.content}</h2>
        <br/>
        <br/>
        <br/>
            <img className="article-pic" src={this.state.article.image} alt="" />

          <div className="">
         
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
export default ArticleShowPage;
