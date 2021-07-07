import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import './App.css';
import LogIn from './auth/LogIn';
import UserList from './users/UserList';


function App() {

  return (
    <div className="App">
    <header>
     <nav>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/login">Login</NavLink>
     </nav>
     </header>
     <div>
        <Route path='users' component={UserList}/>
        <Route path='login' component={LogIn}/>
     </div>
    </div>
  );
}

export default withRouter(App);
