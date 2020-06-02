import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'


const ContactPage = () => {
  return (

    <div className="section-text-container">

        {/* <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}> */}
        <h2 className>Get in Touch</h2>
        <p>Let me help you kick start your next project &rarr;</p>

        <form className="form-container" action="https://sendmail.w3layouts.com/SubmitContactForm" method="post" required>
          <div>
            <label htmlFor="w3lName">Name</label>
            <input type="text" name="w3lName" id="w3lName" required/>
          </div>
          <div>
            <label htmlFor="w3lSender">Email</label>
            <input type="email" name="w3lSender" id="w3lSender" required/>
          </div>
          <div>
            <label htmlFor="w3lSubject">Subject</label>
            <input type="text" name="w3lSubject" id="w3lSubject" />
          </div>
          <div>
            <label htmlFor="w3lMessage">Message</label>
            <textarea name="w3lMessage" id="w3lMessage" required></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <input type="submit" className="button -primary" />
          </div>
        </form>
    </div>


  )
}

export default ContactPage
