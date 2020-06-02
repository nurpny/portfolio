import React from "react"
import { Link } from "gatsby"

const ProjectLink = ({ post }) => (
  <article className="card">
    <a href={post.frontmatter.url}>
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </a>
    <div className="card-details">
      <h3 className="project-title">
          {post.frontmatter.title}
      </h3>
      <div className="project-meta post-date">{post.frontmatter.date}</div>
      <div className="project-meta description">Made with: {post.frontmatter.technologies}</div>
      <div className="project-meta github"><a href={post.frontmatter.github}>Github</a></div>


    </div>

  </article>
)
export default ProjectLink
