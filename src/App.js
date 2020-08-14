import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Data from './Data';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header Data={Data}/>
        <About Data={Data}/>
        <Resume Data={Data}/>
        <Projects Data={Data}/>
        <ContactMe Data={Data}/>
        <Footer Data={Data}/>
      </div>
    );
  }
}

export default App;