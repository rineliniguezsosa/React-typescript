import { useState } from 'react';


export const User = () => {
    const [user, setUser] = useState(null)

    const handlelogin = () =>{
        setUser({
            usuario:'rinel',
            email:'rineliniguezsosa@gmail.com',
        })
    }
    const handlelogout = () =>{
        setUser(null)
    }
  return (
    <div>
        <button onClick={handlelogin}>Login</button>
        <button onClick={handlelogout}>Logout</button>
        <span>El usuario es,email es</span>
    </div>
  )
}
