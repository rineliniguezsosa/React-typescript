import { useState, useEffect, useRef } from 'react';


export const Mutableref = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)

    const stoptimer = () =>{
       if(intervalRef.current) window.clearInterval(intervalRef.current)
    }

    useEffect(() => {
      intervalRef.current = window.setInterval(()=>{
        setTimer((timer)=> timer+1)
      },1000)
      return () =>{
        stoptimer()
      }
    }, [])
    
  return (
    <div>
        Timer:{timer}
        <button onClick={stoptimer}>Stop timer</button>
    </div>
  )
}
