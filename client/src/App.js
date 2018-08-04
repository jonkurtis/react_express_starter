import React, { Component } from 'react';
import AppNavbar from "./components/AppNavbar";

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
//import Customers from './components/customers';

class App extends Component {
  render() {
    return (
      <div className="App">   
        <AppNavbar />
      </div>
    );
  }
}

export default App;
