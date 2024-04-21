import React from 'react'

import Home from './components/Home/Home';
import PostCreateUpdate from './components/Posts/PostCreateUpdate';
import PostDetail from './components/Posts/PostDetail';
import PostTable from './components/Posts/PostTable';

import Error from './components/Error/Error';
import {
    BrowserRouter as Router,
    Switch,
    Route
 
  
  } from "react-router-dom";

function RoutesAll() {
  return (
    
     <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/PostList' component={PostTable}/>
        <Route  exact path='/PostCreateUpdate' component={PostCreateUpdate}/>
        <Route  exact path='/PostCreateUpdate/:id' component={PostCreateUpdate}/>
        <Route  exact path='/PostDetail/:id' component={PostDetail}/>
             {/* comodin */}
       <Route  exact path="*" component={Error} />  
        
      </Switch>
   </Router>


  )
}

export default RoutesAll



       {/*  <Route exact path="/PostDetail"   children={<PostDetail/>}/>   */}
   