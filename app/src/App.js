import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav.js';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/Signup' component={Signup} />
          <Route path='/Homes' component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;