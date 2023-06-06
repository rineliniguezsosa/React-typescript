import { useState } from 'react';


export const Loggedin = () => {
    const handlelogin = () =>{}
    const handlelogout = () =>{}
  return (
    <div>
        <button onClick={handlelogin}>Login</button>
        <button onClick={handlelogout}>Logout</button>
        <span>El usuario esta autenticado/logout</span>
    </div>
  )
}
