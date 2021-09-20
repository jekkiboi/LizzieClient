import "../articleShowPage.css";
import React from "react";
import axios from "axios";
import ArticleModel from "../models/ArticleModel";
import { Link } from "react-router-dom";
// fetch data for the game in particular by it's id
/*
 */
class ArticleShowPage extends React.Component {
  state = {
    Article: "",
    // articlePreview: [],
  };


  /////////NEED BOTH DELETE FUNCTIONS/////////////
  handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/articles/${id}`)
    .then(() => {
     this.props.deleteArticle(id)
    })
  }

  deleteArticle = (id) => {
    console.log("delete article activated");
    const articleDataArray = this.state.articleData.filter((articleObj) => {
      console.log(this.articleObj._id, id);
      if (this.articleObj._id == id) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({ articleData: articleDataArray });
  };
//////////////////////////////

  componentDidMount() {
    const articleId = this.props.match.params.id;
    console.log(articleId);
    ArticleModel.show(articleId).then((data) => {
      console.log(data);

      this.setState({
        article: data.article
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
    return (
      <div className="" style={{
        backgroundColor: '#228B22',
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg1.png')`,
        backgroundPosition: "bottom",
        backgroundSize: "fill"
      }}>
        <div>
        <br/>
          <h1 className="">{this.state.article}</h1>
        <br/>
          <h2 className="">Find out more about {this.state.article}...</h2>
        <br/>
        <br/>
        <br/>
            <img className="" src={this.state.image} alt="" />

          <div className="">
            <h2>
                <p className="delete-button-wrapper">
                    <button className='delete-button submit-button' 
                    onClick={() => this.handleDelete(this.props.articleObj._id)}> 
                        Delete Article
                    </button> 
                </p>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
export default ArticleShowPage;
