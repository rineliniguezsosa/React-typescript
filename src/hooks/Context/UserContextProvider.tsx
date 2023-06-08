import React from 'react'
import { UserContext } from './UserContext'
import { useState } from 'react';

type UserContextProviderprops = {
    children:React.ReactNode
}

export type Authuser = {
    name:string,
    email:string
}

export const UserContextProvider = ({children}:UserContextProviderprops) => {
    const [user, setUser] = useState<Authuser | null>(null)
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
