import React, { useState, createContext } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const value = {
    theme,
    toggleTheme
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeContext

// Context ile işimiz bu kadar. useState kullanarak state'i ve bu state'i değiştirmek için gereken metodu aldık. Daha sonra bu state'i güncelleyen toggleTheme metodunu oluşturduk ve Context Provider componentına hem bu metodu hem de state'i value prop'una verdik.