import { useState } from 'react';
import './App.css'

function App() {
  const [num,setNum] = useState(0);

  function inc(){
    setNum(num + 1);
  }
  function dec(){
    setNum(num - 1);
  }

  return (
    <>
      <div className='counter'>Counter : {num}</div>
      <br/>
      <button onClick={inc}>Increase counter</button>
      <button onClick = {dec}>Decrease counter</button>        

    </>
  )
}

export default App
