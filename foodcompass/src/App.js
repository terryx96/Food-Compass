import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Option from './Option';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
