//UPLOAD CARE API KEY= `4a022e7b929332d401c9`
import { render } from '@testing-library/react'
import React from 'react'
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class CreateArticle extends Component{
    state={
        articleData: [],
        inputVal: "",
        inputImage: ""
    }
    handleChange = (event) => {
        this.setState({ inputVal: event.target.value });
      };
      handleImageChange = (event) => {
        this.setState({ inputImage: event.target.value });
      };
      handleFormSubmit = (event) => {
        event.target.value = ""
        
        event.preventDefault();
        console.log("form was submitted");
        // start out by making the axios api call to ur db in the backend, need to hit the POST route and create a new article, need the underlying route to match what is set up in the express server
        axios
          .post(`localhost:3000/api/articles`, {
            //pass in the object of the new article, containing the actual data that is to be added, for now it is only the name of the article
            article: this.state.inputVal,
            image: this.state.inputImage,
            // the .then() returns our response from the server, the response is the data containing the new article
          })
          .then((response) => {
            // because it's buried in some data we have to dig a bit to find it, look in the components tab in the google tools
            // Spread operator (...) allows us to take all the properties of an existing array and place them in a new array, low key allows you to avoid the PUSH method, which is problematic in react
            //store new array in new variable
            let updatedArticleData = [...this.state.articleData, response.data];
            // set state array of articleData to new data in new variable
            this.setState({ articleData: updatedArticleData });
                this.props.history.push('/articles')
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    
    render(){
        
    return(
    <div>
     
        <div className="" style={{
        backgroundColor: '#228B22',
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg1.png')`,
        backgroundPosition: "bottom",
        backgroundSize: "fill"}}
        >
            <h2>Create Post</h2>

            { <form onSubmit={this.handleFormSubmit}>
                <input
                className="input-text"
                type="text"
                value={this.state.inputVal}
                onChange={this.handleChange}
                />
            <h2>Add a picture by inserting the url below</h2>
                <input
                className="input-text"
                type="text"
                value={this.state.inputImage}
                onChange={this.handleImageChange}
                />
                <p />
                <input className="submit-button" type="submit" />
            </form> }
        </div>  
    </div>
    )}
}

export default CreateArticle