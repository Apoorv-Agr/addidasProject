// import logo from './logo.svg';
import './App.css';
// import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPageComp from './components/LandingPage/LandingPageComp';
import LoginComp from './components/Login/LoginComp';
import useToken from './components/UseToken/useToken';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const { token, setToken } = useToken();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={() => <LoginComp setToken={setToken} />} />
          <PrivateRoute exact authed={token} path='/landingPage' component={LandingPageComp} />
        </Switch>
      </Router>

      {/* <LandingPageComp /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
