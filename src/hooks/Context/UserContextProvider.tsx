import React from 'react'
import { UserContext } from './UserContext'
import { useState } from 'react';

type UserContextProviderprops = {
    children:React.ReactNode
}
type Authuser = {
    name:string,
    email:string
}

type UserContexttype = {
  user:Authuser | null,
  setUser:React.Dispatch<React.SetStateAction<Authuser | null>> //tipando la accion
}

export const UserContextProvider = ({children}:UserContextProviderprops) => {
    const [user, setUser] = useState<Authuser | null>(null)
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
