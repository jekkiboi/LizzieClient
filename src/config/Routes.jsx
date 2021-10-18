import React from 'react';
import HomePage from '../pages/HomePage';
import ArticlesIndexPage from '../pages/ArticlesIndexPage';
import ArticleShowPage from '../pages/ArticleShowPage';
import { Switch, Route } from 'react-router-dom';
import CreateArticle from '../pages/CreateArticle';
import About from '../pages/About';
import Profile from '../pages/Profile';
import ProtectedPage from '../pages/ProtectedPage';
import ProtectedRoute from '../auth/ProtectedRoute'
import NotFound from '../pages/NotFound';


function Routes(props){
  
    return(
        <Switch>

        <Route exact path='/' component={HomePage}/>

        <ProtectedRoute path='/articles/:id'component={ArticleShowPage} />
        
        <ProtectedRoute path='/articles' component={ArticlesIndexPage} />

        <ProtectedRoute exact path='/profile' component={Profile}/>

        <ProtectedRoute exact path='/protectedPage' component={ProtectedPage}/>

        <Route exact path='/about' component={About} />

        <ProtectedRoute path='/create' component={CreateArticle} />

        <Route path="*" component={NotFound}/>

      </Switch>
        
    )
}

export default Routes;