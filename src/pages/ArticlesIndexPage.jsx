import { Component } from "react";
import ArticleModel from "../models/ArticleModel";
import ArticleShowPage from "../pages/ArticleShowPage";
import { Link } from "react-router-dom";
// const axios = require('axios').default;
import axios from "axios";

// Steps to render the list of Articles
// - Create a component for each Article
// - Need to access the database to get the data
// - Add state to maintain list of all data
class ArticlesIndexPage extends Component {
  state = {
    articleData: []
  };

  fetchData = () => {
    ArticleModel.all().then((data) => {
      console.log(data);
      this.setState({ articleData: data });
    });
  };

//lifecycle method the runs automatically when the component loads
  componentDidMount = () => {
    console.log("mounted");
    //make fetch called here, or at least reference the game model which has it
    this.fetchData();
  };

  render() {
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
              {this.state.articleData.map((articleObj, i)=> {
                  return<Link to={`/articles/${articleObj._id}`} key={i}>{articleObj.title}</Link>
              })}
            </div>
        </div>
    );
  }
}

export default ArticlesIndexPage;
