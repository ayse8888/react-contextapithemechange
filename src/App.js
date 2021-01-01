import React from 'react'
import './components/styles.css'
import AppContainer from './components/AppContainer'
import { ThemeProvider } from './context/ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  return (
    <ThemeProvider>
       <AppContainer />
    </ThemeProvider>
  )
}