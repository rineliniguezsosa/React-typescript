import { useState, useEffect, useRef } from 'react';


export const Mutableref = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)

    const stoptimer = () =>{
        
    }
  return (
    <div>
        Timer:{timer}
        <button onClick={stoptimer}>Stop timer</button>
    </div>
  )
}
