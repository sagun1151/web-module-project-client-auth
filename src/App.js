import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import AddFriend from './components/AddFriend';
import FriendList from './components/FriendList';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h2>FRIENDS DATABASE</h2>
        <ul>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/friends">FRIENDLIST</Link>
          </li>
          <li>
            <Link to="/friends/add">ADDFRIEND</Link>
          </li>
          <li>
          <Link to="/logout">LOGOUT</Link>
          </li>
        </ul>
      </header>

      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={FriendList} />
        <PrivateRoute exact path="/friends/add" component={AddFriend} />
        <Route path="/logout" component={Logout} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
