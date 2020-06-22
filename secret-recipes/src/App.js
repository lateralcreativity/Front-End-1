import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>

        {/* <PrivateRoute exact path='/home' component={Home} /> */}

        <Route exact path='/home' component={Home} />

        <Route exact path='/register' component={Register} />

        <Route exact path='/' component={Login} />

      </Switch>
    </div>
  );
}

export default App;
