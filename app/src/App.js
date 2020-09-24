import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav.js';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/Signup' component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;