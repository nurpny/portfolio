import React from "react"
import { useStaticQuery, graphql } from "gatsby"



export default function About() {

  const {markdownRemark} = useStaticQuery(graphql`
  query {
    markdownRemark (fileAbsolutePath:{regex: "/(about)/"}){
      html
    }
  }`)

  return (

      <div className="section-text-container">
      <h2>About me...</h2>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
      </div>

  )
}

