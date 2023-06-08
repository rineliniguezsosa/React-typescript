import { useState } from 'react';

type Userauth = {
    usuario:string,
    email:string
}

export const User = () => {
    const [user, setUser] = useState<Userauth | null>(null) //future value

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
        <span>El usuario es {user?.usuario},email es {user?.email}</span>
    </div>
  )
}
