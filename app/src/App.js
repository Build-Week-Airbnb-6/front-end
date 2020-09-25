import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { UserContext } from './utils/UserContext'
import PrivateRoute from './utils/PrivateRoute'
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard'
function App() {
  const [userid, setUserid] = useState(0)
  return (
    <UserContext.Provider value={{userid, setUserid}}>
      <Router>
        <div className='App'>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}
export default App;