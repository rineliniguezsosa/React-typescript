import React from 'react'
import { UserContext } from './UserContext'
import { useState } from 'react';

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
