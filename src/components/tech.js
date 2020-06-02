import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"



export default function Tech() {

  const { markdownRemark } = useStaticQuery(graphql`
  query {
    markdownRemark (fileAbsolutePath:{regex: "/(tech)/"}){
      html
    }
  }`)

  return (

      <div className="section-text-container">
        <h2>Technologies...</h2>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
      </div>

  )
}

