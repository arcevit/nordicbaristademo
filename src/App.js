import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home'
import Default from './Default'
import Blogs from './Blogs'
import ReadMore from './ReadMore'
import Footer from './Footer';


function App() {
  return (
    <div className='container-fluid pb-5 px-0'>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/blogs' component={Blogs}></Route> 
        <Route exact path='/blogs/:publishedAt' component={ReadMore}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
