import { ThemeContext } from "./ThemeContext"
import React from 'react'

type ThemeProviderprops = {
    children:React.ReactNode
}
export const ThemeProvider = ({children}:ThemeProviderprops) => {
  return (
    <ThemeContext.Provider>
        
    </ThemeContext.Provider>
  )
}
