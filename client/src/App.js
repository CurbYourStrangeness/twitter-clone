import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './components/Layout/Main'
import Home from './components/Home'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
          </Main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
