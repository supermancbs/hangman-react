import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const {main} = this.props
    return (
        <div className="top">
          {main}
        </div>
    );
  }
}

export default App;
