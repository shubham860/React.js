import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import Functionclick from './components/functionclick'
import Classclicked from './components/Classclicked'
import Eventhandler from './components/Eventhandler'
import ParentComponent from './components/ParentComponent'

function App() {
  return (
    <div className="App">
      {<ParentComponent/>}
      {/*<Eventhandler/>*/}
      {/*<Classclicked/>*/}
      {/*<Functionclick/>*/}
      {/*<Counter/>*/}
      {/*<Message/>*/}
      {/*<Greet name="shubham" hobbies="cricket">
        <p>love to play cricket</p>
      </Greet>*/}
      {/*<Greet name="ritvik" hobbies="coding">
        <p>love to play with code</p>
      </Greet>*/}
      {/*<Greet name="shubham bhalu" hobbies="chess">
        <p>love to play chess</p>
      {/*<Welcome name="shubham" hobbies="cricket"/>
      </Greet>*/}
      {/*<Welcome name="ritvik" hobbies="coding"/>*/}
      {/*<Welcome name="shubham bhalu" hobbies="chess"/>*/}
    </div>
  )
}

export default App;
