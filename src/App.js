import { useState } from 'react'

import './index.css';
import Square from './Square'
import Input from './Input'


function App() {
  const [colorValue,setColorValue]=useState('')
  const [hexValue,setHexValue]=useState('')
  const [isDarkText,setIsDarkText]=useState(true)

  return (
    <div className="App">
      <h1>Hello</h1>
      <Square
      colorValue={colorValue}
      hexValue={hexValue}
      isDarkText={isDarkText}
      
      />
      <Input
      colorValue={colorValue}
      setColorValue={setColorValue}
      setHexValue={setHexValue}
      setIsDarkText={setIsDarkText}
      
      />
    </div>
  );
}

export default App;
