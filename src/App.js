import React, { Component } from 'react';

import Landing from './Components/Landing.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
