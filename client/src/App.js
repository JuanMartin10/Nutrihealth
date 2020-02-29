import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import Signup from './components/pages/auth/signup/Signup'
import Login from './components/pages/auth/login/Login'

import NavBar from './components/ui/NavBar'

import AuthServices from './services/auth.services'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: false }
    this.services = new AuthServices()
  }


  componentDidUpdate = (prevProps, prevState) => console.log("El estado de App se ha actualizado:", this.state)
  componentDidMount = () => this.fetchUser()


  setTheUser = userObj => this.setState({ loggedInUser: userObj })
  fetchUser = () => {
    this.services.loggedin()
      .then(theUser => this.setState({ loggedInUser: theUser }))
      .catch(() => this.setState({ loggedInUser: false }))
  }


  render() {
    return (
      <>
        <h1>Bienvenidos a nutrihealth</h1>
        <NavBar />
        <Switch>

          <Route path="/signup" render={() => <Signup setTheUser={this.setTheUser} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
        </Switch>
      </>
    );
  }
}

export default App;
