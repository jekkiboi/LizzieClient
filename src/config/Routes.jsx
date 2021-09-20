import React from 'react';
import HomePage from '../pages/HomePage';
import ArticlesIndexPage from '../pages/ArticlesIndexPage';
import ArticleShowPage from '../pages/ArticleShowPage';
import { Switch, Route } from 'react-router-dom';
import CreateArticle from '../pages/CreateArticle';
import ArticleModel from '../models/ArticleModel'

import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage'

// import Header from '../components/Header'


function Routes(){
  
    return(
        <Switch>

        <Route path='/' exact component={HomePage}/>
          
        {/* <Route path='/articles/:id' exact component={ArticleShowPage} /> */}

        <Route exact path='/articles/:id'render={(props)=> <ArticleShowPage {...props} />} />
        
        <Route path='/articles' component={ArticlesIndexPage} />

        <Route path='/create' render={(props) => <CreateArticle {...props} /> } />

        <Route path='/signup' render={(props) => <SignupPage {...props} /> } />

        <Route path ='/login' render={(props) => <LoginPage {...props} /> } />

      </Switch>
        
    )
}

export default Routes;