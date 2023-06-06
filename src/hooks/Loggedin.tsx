import { useState } from 'react';


export const Loggedin = () => {
    const handlelogin = () =>{
        setIsloggin(true)
    }
    const handlelogout = () =>{
        setIsloggin(false)
    }

    const [isloggin, setIsloggin] = useState(false)
  return (
    <div>
        <button onClick={handlelogin}>Login</button>
        <button onClick={handlelogout}>Logout</button>
        <span>El usuario esta autenticado/logout</span>
    </div>
  )
}
