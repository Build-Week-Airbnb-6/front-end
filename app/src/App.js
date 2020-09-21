import React from 'react';
import './styles.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav.js';
import Form from './components/Form.js';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route exact path='/' component={Login} />
        <Route path='/Form' component={Form} />
        <Route path='/Signup' component={Signup} />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/Form' component={Form} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;