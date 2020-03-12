import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom'

import Recipes from './components/pages/recipes-search/Recipes'
import Index from './components/pages/index/Index'


// import PreSignup from './components/pages/auth/signup/PreSignup'
import Signup from './components/pages/auth/signup/Signup'
import Login from './components/pages/auth/login/Login'
import Profile from './components/pages/profile/Profile'


import NavBar from './components/ui/NavBar/NavBar'

import SearchNutri from './components/pages/search-nutri/Search-nutri'
import Menu from './components/pages/profile/Menu/Menu'

import AuthServices from './services/auth.services'



class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authservices = new AuthServices()
  }



  componentDidMount = () => this.fetchUser()

  setTheUser = userObj => this.setState({ loggedInUser: userObj })


  fetchUser = () => {
    this.authservices.loggedin()
      .then(theUser => this.setState({ loggedInUser: theUser }))
      .catch(() => this.setState({ loggedInUser: false }))
  }


  render() {

    return (
      <div className="App">
        <NavBar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />

        <main>
          <Switch>
            <Route exact path="/recipes" render={() => <Recipes />} />

            <Route exact path="/" render={props => <Index setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} {...props} />} />
            <Route path="/search-nutri" render={props => <SearchNutri setTheUser={this.setTheUser} {...props} />} />

            {/* <Route path="/presignup" render={() => <PreSignup setTheUser={this.setTheUser} />} /> */}
            <Route path="/signup" render={props => <Signup setTheUser={this.setTheUser} {...props} />} />
            <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
            <Route path="/profile" render={() => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} setTheUser={this.setTheUser} /> : <Redirect to="/" />} />

            <Route path="/my-menu" render={props => this.state.loggedInUser ? <Menu loggedInUser={this.state.loggedInUser} setTheUser={this.state.setTheUser} {...props} /> : <Redirect to='/' />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
