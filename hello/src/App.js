import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
    <Counter/>
  <Message/>
      <Greet name="shubham" hobbies="cricket">
        <p>love to play cricket</p>
      </Greet>
      <Greet name="ritvik" hobbies="coding">
        <p>love to play with code</p>
      </Greet>
      <Greet name="shubham bhalu" hobbies="chess">
        <p>love to play chess</p>
      </Greet>
      <Welcome name="shubham" hobbies="cricket"/>
      <Welcome name="ritvik" hobbies="coding"/>
      <Welcome name="shubham bhalu" hobbies="chess"/>
    </div>
  )
}

export default App;
