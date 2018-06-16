import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Option from './Option';
import Main from './Main';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Main />
      </div>
    );
  }

  
}

export default App;
