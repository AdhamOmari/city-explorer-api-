import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyForm from './Forms.js';
export class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1> City Explorer </h1>
        </header>
        <MyForm/>
          
      </div>
    )
  }
}

export default App

