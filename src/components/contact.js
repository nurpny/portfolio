import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'


const ContactPage = () => {
  return (

    <div className="section-text-container contact-section">

      <h2 className>Get in Touch</h2>


      <div className="phone-image">        Let me help you kick start your next project </div>

      <form className="form-container" action="https://sendmail.w3layouts.com/SubmitContactForm" method="post" required>

          <label htmlFor="w3lName">Name</label>
          <input type="text" name="w3lName" id="w3lName" required />

          <label htmlFor="w3lSender">Email</label>
          <input type="email" name="w3lSender" id="w3lSender" required />

          <label htmlFor="w3lSubject">Subject</label>
          <input type="text" name="w3lSubject" id="w3lSubject" />

          <label htmlFor="w3lMessage">Message</label>
          <textarea name="w3lMessage" id="w3lMessage" required></textarea>


          <input type="submit" className="submit-button" />

      </form>

    </div>


  )
}

export default ContactPage
