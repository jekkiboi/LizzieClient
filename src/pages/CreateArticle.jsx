//UPLOAD CARE API KEY= `4a022e7b929332d401c9`
import { render } from '@testing-library/react'
import React from 'react'
import { Component } from "react";
import axios from "axios";
class CreateArticle extends Component{
    state={
        articleData: [],
        inputVal: "",
        content: "",
        // selectedFile: null,
        inputImage: ""
    }
      handleChange = (event) => {
        this.setState({ inputVal: event.target.value });
      };
      handleContentChange = (event) => {
        this.setState({content: event.target.value})
      }
      handleImageChange = (event) => {
        this.setState({ inputImage: event.target.value });
      };
      handleFormSubmit = (event) => {
        event.target.value = ""


///////////////////////////////////////////
        // service firebase.storage {
        //   match /b/{bucket}/o {
        //     match /{allPaths=**} {
        //       allow read, write: if request.auth != null;
        //     }
        //   }
        // }
/////////////////////////////////////////////

      // const { initializeApp } = require('firebase/app');
      // const { getFirestore, collection, getDocs } = require('firebase/firestore');

      // fileSelectedHandler = event => {
      //   this.setState({
      //     selectedFile: event.target.files[0]
      //   })
      // }
      // fileUploadHandler = event => {
      //   const fd = new FormData();
      //   fd.append('upload', this.state.selectedFile, this.state.selectedFile.name)
      //     axios.post('gs://lizzie-37310.appspot.com', fd, {
      //       onUploadProgress: progressEvent => {
      //         console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
      //       }
      //     })
      //   .then(res =>{
      //     console.log(res)
      //   })
      // }
/////////////////////////////////////////////////

        event.preventDefault();
        console.log("form was submitted");
        // start out by making the axios api call to ur db in the backend, 
        //need to hit the POST route and create a new article, need the underlying route 
        //to match what is set up in the express server
        axios
          .post(`${process.env.REACT_APP_SERVER_URL}/api/articles`, {
            //pass in the object of the new article, containing the actual data that is to be 
            //added, for now it is only the name of the article.
            title: this.state.inputVal,
            content: this.state.content,
            // upload: this.state.selectedFile,
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
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg.png')`,
        backgroundPosition: "bottom",
        backgroundSize: "fill"}}
        >
            <h1>Create Post</h1>
            <h2>Title:</h2>
            { 
            <form onSubmit={this.handleFormSubmit}>
                <input
                className="input-text"
                type="text"
                value={this.state.inputVal}
                onChange={this.handleChange}
                />
            <h2></h2>
            <textarea
            rows="4"
            className="input-content"
            type="text"
            value={this.state.content}
            onChange={this.handleContentChange}
            />
 

          {/* <h2>Upload a Pic</h2>
          <div className="upload-pic">
            <input style={{display: 'none'}} type="file" onChange={this.fileSelectedHandler}
            ref={fileInput => this.fileInput = fileInput}/>
            <button onClick={() => this.fileInput.click()}>Pick File</button>
            <button onClick={this.fileUploadHandler}>Upload</button>
          </div> */}




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