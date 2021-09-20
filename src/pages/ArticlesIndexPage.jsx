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

  componentDidMount = () => {
    console.log("mounted");
    //make fetch called here, or at least reference the game model which has it
    this.fetchData();
  };

  render() {
    console.log(this.state);
    return (
        <div
        className="cities-index"
        style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg1.png')`,
            backgroundPosition: "bottom",
        }}
        >
            <div className="main">

                <Link  to="/create"> 
                    <img className='plus-sign' src={`${process.env.PUBLIC_URL}/images/plussign.png`} />
                </Link>  
            </div>
        </div>
    );
  }
}

export default ArticlesIndexPage;
