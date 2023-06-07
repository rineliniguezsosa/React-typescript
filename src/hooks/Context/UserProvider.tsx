import React from 'react'
import { UserContext } from './UserContext'

type UserProviderprops = {
    children:React.ReactNode
}
export const UserProvider = ({children}:UserProviderprops) => {
  return (
    <div>UserProvider</div>
  )
}
