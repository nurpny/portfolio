import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import ProjectLink from './project-link'


export const Projects = () => {

  const { allMarkdownRemark } = useStaticQuery(graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] } filter:{fileAbsolutePath:{regex: "/(projects)/"}}) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM YYYY")
            url
            github
            title
            thumbnail
            technologies
          }
        }
      }
    }
  }`)

  return (
      <div className="section-text-container">
        <h2>Projects</h2>
        <div className='grids'>

          {allMarkdownRemark.edges
            .map(edge => <ProjectLink key={edge.node.id} post={edge.node} />)}
        </div>
      </div>

  )
}

export default Projects
