import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react';

function App() {

  const [elementDisplay, setElementDisplay] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='test-header'>Test Application</h1>
      </header>
      <div>
        <button className='click-me-btn' onClick={() => setElementDisplay(elementDisplay => !elementDisplay)}>Click me</button>
      </div>
      {elementDisplay && <p className='element-text'>Hello, World!!</p>}
    </div>
  );
}

export default App;
