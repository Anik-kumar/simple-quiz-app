
import {useEffect, useState} from 'react';

export default function QuestionTimer({timeout, onTimeout, mode}) {

  const [remainingTime, setRemainingTime] = useState(timeout); 
  
  useEffect(() => {
    console.log("Timeout");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    }
  }, [timeout, onTimeout]); 

  useEffect(() => {
    console.log("Interval");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 25);
    }, 25);
  
    return () => {
      clearInterval(interval);
    }

  }, []); 


  return (
    <progress id='question-time' max={timeout} value={remainingTime} className={mode} />
  )
}
