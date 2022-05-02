import './App.css';
import ReactDom from 'react-dom'
import Counter from './components/counter.js'
import React from 'react';
class  App extends React.Component {
  render() {
  return <div className="App">
      <Counter/>
    </div>
  };
}

export default App;
