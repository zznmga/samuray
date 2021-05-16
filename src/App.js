import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Switch>
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
