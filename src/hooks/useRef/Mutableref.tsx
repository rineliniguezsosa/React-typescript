import { useState, useEffect, useRef } from 'react';


export const Mutableref = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)

    const stoptimer = () =>{

    }

    useEffect(() => {
      intervalRef.current = window.setInterval(()=>{
        setTimer((timer)=> timer+1)
      },1000)
    }, [])
    
  return (
    <div>
        Timer:{timer}
        <button onClick={stoptimer}>Stop timer</button>
    </div>
  )
}
