import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Option from './Option';
import Main from './Main';
import Sidebar from './Sidebar';

class App extends Component {
  state = {
    page: "0",
  }
  render() {
    return (
      <div>
        <Header name = {this.state.pageName}/>
        <Sidebar getPage = {this.getPage} />
        <Main page = {this.state.page} />
      </div>
    );
  }

  getPage = (page) => {
    this.setState({page})
  }


  
}

export default App;
