import { useContext} from 'react'
import { UserContext } from './UserContext'

export const User = () => {
    const usercontext = useContext(UserContext)
    const handlelogin = () =>{
        if(usercontext){
          usercontext.setUser({
            name:'Rinel',
            email:'rineliniguezsosa@gmail.com'
          })
        }
    }
    const handlelogout = () =>{
        
    }
  return (
    <div>
        <button onClick={handlelogin}>Login</button>
        <button onClick={handlelogout}>Logout</button>
        <span>El usuario es</span>
    </div>
  )
}
