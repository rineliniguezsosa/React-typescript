import { createContext } from 'react'
import { Authuser } from './UserContextProvider';

type UserContexttype = {
    user:Authuser | null,
    setUser:React.Dispatch<React.SetStateAction<Authuser | null>> //tipando la accion
}

export const UserContext = createContext<UserContexttype | null>(null)