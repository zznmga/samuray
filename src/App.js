import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Switch>
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.dialogPage} />}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                state={props.state.profilePage}
                addPost={props.addPost}
                changePost={props.changePost}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
