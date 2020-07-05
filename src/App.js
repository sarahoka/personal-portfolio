import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1> Hi, I'm <a href="/">Sarah Okamoto</a></h1>
        <h2>I 
          <a href="https://github.com/sarahoka"> develop</a>, 
          <a href="/"> design</a>, and 
          <a href="http://robotics.usc.edu/interaction/people/#"> research</a>.
        </h2>
        <h3>I'm a computer science undergraduate at the 
          <a href="https://www.cs.usc.edu/academic-programs/undergrad/">University of Southern California</a>, passionate about helping others through technology.</h3>
      </div>
    );
  }
}

export default App;
