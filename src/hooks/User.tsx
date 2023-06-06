import { useState } from 'react';


export const User = () => {
  return (
    <div>
        <button onClick={handlelogin}>Login</button>
        <button onClick={handlelogout}>Logout</button>
        <span>El usuario es,email es</span>
    </div>
  )
}
