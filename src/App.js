
import BestBooks from './components/ BestBooks'
// import React, { Component } from 'react'
import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import Content from './components/Content';
import Home from './components/Home';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
import { Component,Link } from 'react-router-dom';
import  './App.css';
import Form from './From';

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
        <Header />
        <nav>
          <ul>
            <li>
              <Link  to="/">Home</Link>
            </li>
            {
              this.props.auth0.isAuthenticated ?
                <>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                </> :
                <li>
                  <Link to="/login">Login</Link>
                </li>
            }
          </ul>
        </nav>
          <IsLoadingAndError>
          
            
            <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <LoginButton />
          </Route>
          <Route path='/logout'>
            <LogoutButton />
          </Route>
          <Route path='/profile'>
            <Profile />
            <Form/>
            <Content />
          </Route>
        </Switch>
        <BestBooks/>

       

            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
