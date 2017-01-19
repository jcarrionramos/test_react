// @flow
import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar.js';
import Page from './Page/Page.js';

//CSS
import './App.scss';
//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Page />
      </div>
    );
  }
}

export default App;
