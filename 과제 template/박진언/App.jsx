import React, {useState, useEffect} from 'react';
import './App.css';


function App() {
  
  const [time, setTime] = useState(0);

  const increase = () => {
    if (time === 60)
      return
    setTime(time + 1);
  };

  const decrease = () => {
    if (time === 0)
      return
    setTime(time - 1);
  };

  useEffect(()=>{
    const startTimer = setInterval(()=>{
      if(time===0)
        return
      setTime(time-1);      
    },1000);

    return () => clearInterval(startTimer);
  }, [time]);

  
  return (
    <div className="content">

      <div className="clockContent">

        <div className="index">
          Round Timer
        </div>

        <div className="clock">
          <div className="clock-face">
            <div className="second-hand hand"></div>
          </div>
        </div>

        <div className="plusMinus">
          <button className="plus" onClick={increase}>+</button>
          <div className="time">{time}</div>
          <button className="minus" onClick={decrease}>-</button>
        </div>
        <div className="start">
          <button className="startButton">start</button>
        </div>
      </div>
    </div>
  ); 

}

export default App;
