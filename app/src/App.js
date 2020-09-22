import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path='properties/:id'>
          <Property/>
        </Route>

        <Route path='/dashboard'>
          <Dashboard/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
