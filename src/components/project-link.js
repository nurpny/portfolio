import React from "react"


const ProjectLink = ({ post: project }) => (
  <article className="card">
    <a href={project.frontmatter.url}>
      {!!project.frontmatter.thumbnail && (
        <img src={project.frontmatter.thumbnail} alt={project.frontmatter.title + "- Featured Shot"} />
      )}
    </a>
    <div className="card-details">
      <h3 className="project-title">
          {project.frontmatter.title}
      </h3>
      <div className="project-meta project-date">{project.frontmatter.date}</div>
      <div className="project-meta description"> {project.frontmatter.description}</div>
      <div className="project-meta technologies">Made with: {project.frontmatter.technologies}</div>

      <div className="project-meta github"><a href={project.frontmatter.github}>Github</a></div>


    </div>

  </article>
)
export default ProjectLink
