import React from "react"
import mystyle from './project-link.module.scss'

const ProjectLink = ({ post: project }) => (
  <article className={mystyle.card}>
    <a href={project.frontmatter.url}>
      {!!project.frontmatter.thumbnail && (
        <img src={project.frontmatter.thumbnail} alt={project.frontmatter.title + "- Featured Shot"} />
      )}
    </a>
    <div className={mystyle.cardDetails}>
      <h3 className={mystyle.projectTitle}>
          {project.frontmatter.title}
      </h3>
      <div className={[mystyle.projectMeta, mystyle.projectDate].join(' ')}>{project.frontmatter.date}</div>
      <div className={[mystyle.projectMeta, mystyle.description].join(' ')}> {project.frontmatter.description}</div>
      <div className={[mystyle.projectMeta, mystyle.technologies].join(' ')}>Made with: {project.frontmatter.technologies}</div>
      <div className={[mystyle.projectMeta, mystyle.github].join(' ')}><a href={project.frontmatter.github}>Github</a></div>


    </div>

  </article>
)
export default ProjectLink
