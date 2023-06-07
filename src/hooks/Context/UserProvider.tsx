import React from 'react'
import { UserContext } from './UserContext'

type UserProviderprops = {
    children:React.ReactNode
}
type Authuser = {
    name:string,
    email:string
}
export const UserProvider = ({children}:UserProviderprops) => {
  return (
    <UserContext.Provider>
        {children}
    </UserContext.Provider>
  )
}
