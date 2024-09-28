import { useEffect, useState } from 'react'
import './App.css'
import Button from './Button'
import Display from './Display'

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    let interval;
    if(isRunning){
        interval = setInterval(()=>{
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    }

    return ()=> clearInterval(interval);

  },[isRunning])

  const startTimer = ()=>{
    console.log("Start")
    setIsRunning(true);
    console.log(isRunning)
  }
  
  const stopTimer = ()=>{
    console.log("Stop")
    setIsRunning(false);
    console.log(isRunning)
  }
  
  const resetTimer = ()=>{
    console.log("Reset")
    setIsRunning(false);
    setTime(0);
    setIsRunning(true);
    console.log(isRunning)
  }
  

  return (
    <>
      <div className="hero">
        <ul className='list p-4 bg-sky-600 flex flex-col items-center justify-center rounded'>
          <li className='header mb-8'><h1 className='header text-2xl font-bold'>Timer</h1></li>
          <li><Display time={time}/></li>
          <li>
            <ul className='flex flex-row'>
            <li className='mr-2'><Button text="START" color="green" onClick={startTimer}/></li>
            <li className='mr-2'><Button text="PAUSE" color="white" onClick={stopTimer}/></li>
            <li className='mr-2'><Button text="RESET" color="orange" onClick={resetTimer}/></li>
          </ul>
          </li>
        </ul>
        
        
        
      </div>
    </>
  )
}

export default App
