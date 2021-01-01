import React from 'react'
import './styles.css'

function Footer(){
  return(
    <footer className="p-4 mt-4 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2 footer-logo" src="https://st2.depositphotos.com/5486284/11111/v/950/depositphotos_111115376-stock-illustration-lets-travel-brush-handwriting-lettering.jpg" alt="" width="60" height="60" />
        <small className="d-block mb-3 text-muted">© 2017-2020</small>
      </div>
      <div className="col-6 col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li><a className="link-secondary" href="#">Cool stuff</a></li>
          <li><a className="link-secondary" href="#">Random feature</a></li>
          <li><a className="link-secondary" href="#">Team feature</a></li>
          <li><a className="link-secondary" href="#">Stuff for developers</a></li>
          <li><a className="link-secondary" href="#">Another one</a></li>
          <li><a className="link-secondary" href="#">Last time</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li><a className="link-secondary" href="#">Resource</a></li>
          <li><a className="link-secondary" href="#">Resource name</a></li>
          <li><a className="link-secondary" href="#">Another resource</a></li>
          <li><a className="link-secondary" href="#">Final resource</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li><a className="link-secondary" href="#">Team</a></li>
          <li><a className="link-secondary" href="#">Locations</a></li>
          <li><a className="link-secondary" href="#">Privacy</a></li>
          <li><a className="link-secondary" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer