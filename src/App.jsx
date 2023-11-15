import { useState } from 'react'
import './App.css'

function App() {
  const [ power, setPower] = useState( true);
  const [ power2, setPower2] = useState(  false);
  
  const [ name ,setName ] = useState ("axror");
  const [ name2 ,setName2 ] = useState ("muslima");

  const [num , setNum] =useState (10);
  const [num2 , setNum2] =useState (11);
  

  return (
    <>
        <h2>{power ? ' privet ': 'poka'}</h2>
        <h2>{power2 ? 'hello ': 'bye'}</h2>
      <h2>{name}</h2>
      <h2>{name2}</h2>

      <h2>{num}</h2>
      <h2>{num2}</h2>

     
    </>
  )
}

export default App
