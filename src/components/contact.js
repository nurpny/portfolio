import React from "react"
import mystyles from './contact.module.scss'



const ContactPage = () => {

  return (

    <div className= {["section-text-container", mystyles.contactSection ].join(' ')}>

      <h2 className>Get in Touch</h2>

      <div className={mystyles.phoneImage}> </div>

      <form className={mystyles.formContainer} action="https://sendmail.w3layouts.com/SubmitContactForm" method="post" required>

          <label htmlFor="w3lName">Name</label>
          <input type="text" name="w3lName" id="w3lName" required />

          <label htmlFor="w3lSender">Email</label>
          <input type="email" name="w3lSender" id="w3lSender" required />

          <label htmlFor="w3lSubject">Subject</label>
          <input type="text" name="w3lSubject" id="w3lSubject" />

          <label htmlFor="w3lMessage">Message</label>
          <textarea name="w3lMessage" id="w3lMessage" required></textarea>


          <input type="submit" className={mystyles.submitButton} />

      </form>

    </div>


  )
}

export default ContactPage
