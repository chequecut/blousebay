import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div>
            <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Basic Header</title>
        <link rel="stylesheet" href="assets/demo.css" />
        <link rel="stylesheet" href="assets/header-fixed.css" />
        <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css" />
        <header className="header-fixed">
          <div className="header-limiter">
            <h1><a href="#">Company<span>logo</span></a></h1>
            <nav>
              <a href="#">Home</a>
              <a href="#" className="selected">Blog</a>
              <a href="#">Pricing</a>
              <a href="#">About</a>
              <a href="#">Faq</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </header>
        {/* You need this element to prevent the content of the page from jumping up */}
        <div className="header-fixed-placeholder" />
        {/* The content of your page would go here. */}
        {/* Demo ads. Please ignore and remove. */}
      </div>
       </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
