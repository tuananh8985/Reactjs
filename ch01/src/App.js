import React, { Component } from 'react';
import Course from './Components/Course';
class App extends Component {
  render() {
    return (
      <div className="row">
            <Course> </Course>
            <Course/>
            <Course/>
      </div>
    );
  }
}

export default App;
