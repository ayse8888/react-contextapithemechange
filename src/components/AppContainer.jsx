import React, { useContext } from 'react'
import Header from './Header'
import ThemeContext from '../context/ThemeContext'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Cities from './Cities'
import Footer from './Footer'
import CitiesDetail from "./CitiesDetail"
import './styles.css'


const AppContainer = () => {
  const {theme} = useContext(ThemeContext)


  return(
    <main className={`${theme === 'dark' ? 'dark-theme' : ''}`}>
      <Router>
        <Header />
         <Switch>
          <Route path="/about">
            <About theme={theme}/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cities">
            <Cities />
          </Route>
             <Route path="/cities/:cityID">
          <CitiesDetail />
        </Route>
        </Switch>
        <Footer />
      </Router>

    </main>
  )
}

export default AppContainer