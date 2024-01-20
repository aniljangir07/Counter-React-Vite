import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]  = useState(1);
  let [msg, setMsg]  = useState('');

  const addValue = ()=>{
    if(counter<10){
      setCounter(counter + 1);
      setMsg(msg='')
    }else{
      setMsg(msg='Value can increase decrease between 0-10');
    }
  };

  function removeValue(){
    if(counter>0){
      setCounter(counter-1);
      setMsg(msg='')
    }else{
      setMsg(msg='Value can increase decrease between 0-10')
    }
  };

  // const removeValue = ()=>{
  //   setCounter(counter -1)
  // };

  return (
    <>
      <h1>Chai or react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue} >Remove Value</button>
      <br />
      <small >{msg}</small>
    </>
  )
}

export default App
