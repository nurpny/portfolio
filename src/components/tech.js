import React from "react"
import { useStaticQuery, graphql } from "gatsby"



const Tech = () => {

  const { allFile } = useStaticQuery(graphql`
  query {
    allFile(sort: {order: ASC, fields: name}, filter: {absolutePath: {regex: "/(assets/tech/)/"}}) {
      edges {
        node {
          relativePath
          name
        }
      }
    }
  }
  `)

  const { edges } = allFile

  // note this query is being done at this level, usestaticquery cannot take a regex

  const databases = edges.filter(edge => (/database/).test(edge.node.relativePath));

  const languages = edges.filter(edge => (/languages/).test(edge.node.relativePath));

  const libraries = edges.filter(edge => (/libraries/).test(edge.node.relativePath));

  const devops = edges.filter(edge => (/devops/).test(edge.node.relativePath));



  return (
    <div className="section-text-container">
      <h2>Technologies...</h2>
      <div>Though I have recently started my coding journey, here are some technologies that I’ve used in the past:</div>
      <div>
        <h3>Languages</h3>
        <div className="tech-list">
          {languages.map((edge, idx) =>
            <img key={idx} src={`/assets/tech/${edge.node.relativePath}`} alt={edge.node.name.slice(3)} className="tech-img" />)}
        </div>
      </div>
      <div>
        <h3>Databases</h3>
        <div className="tech-list">
        {databases.map((edge, idx) =>
            <img key={idx} src={`/assets/tech/${edge.node.relativePath}`} alt={edge.node.name.slice(3)} className="tech-img" />)}
        </div>
      </div>
      <div>
        <h3>Libraries/Frameworks</h3>
        <div className="tech-list">
        {libraries.map((edge, idx) =>
            <img key={idx} src={`/assets/tech/${edge.node.relativePath}`} alt={edge.node.name.slice(3)} className="tech-img" />)}
        </div>
      </div>
      <div>
        <h3>DevOps</h3>
        <div className="tech-list">
        {devops.map((edge, idx) =>
            <img key={idx} src={`/assets/tech/${edge.node.relativePath}`} alt={edge.node.name.slice(3)} className="tech-img" />)}
        </div>
      </div>
    </div >


  )
}

export default Tech
