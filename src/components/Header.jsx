import React from 'react'
import Navbar from './Navbar'
import ThemeSwitcher from './ThemeSwitcher'

function Header(){
  return(
       <header>
        <Navbar />
        <ThemeSwitcher />
      </header>
  )
}

export default Header