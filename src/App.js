import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            {/* <Redirect from="/" to="/profile" /> */}
            <Route path="/messages" component={Dialogs} />
            <Route path="/profile" component={Profile} />
            <Route component={Profile} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
