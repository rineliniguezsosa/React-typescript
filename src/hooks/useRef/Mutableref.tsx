import { useState, useEffect, useRef } from 'react';


export const Mutableref = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)
  return (
    <div>
        Timer:{timer}
    </div>
  )
}
