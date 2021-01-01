import React from 'react'
import './styles.css'

function Contact(){
  return(
      <div className="contact">
        <h3>Leave Us A Message</h3>
        <input type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Your Email Addres"/>
        <textarea placeholder="Your Message" col="20" row="30"/>
        <button type="submit">SUBMIT</button>
        <p className="m-4 pTag">OR</p>
        <h3 className="my-3">Contact Us On</h3>
        <div className="icon-div">
          <i className="fab fa-instagram-square fa-2x"></i>
        <i class="fab fa-facebook-square fa-2x"></i>
        <i class="fab fa-twitter-square fa-2x"></i>
        <i class="fas fa-envelope-square fa-2x"></i>
        <i class="fab fa-whatsapp-square fa-2x"></i>
        <i class="fas fa-phone-square fa-2x"></i>
        </div>
      </div>
  )
}

export default Contact