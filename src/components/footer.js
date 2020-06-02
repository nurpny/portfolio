import React from "react"
import githubIcon from '../images/github-icon-light.png'
import linkedinIcon from '../images/li-icon.png'


export default (props) => (
  <footer className="site-footer" id="footer">
    <a href="https://github.com/nurpny">
      <img src={githubIcon} alt="github icon" />
    </a>
    <a href="https://www.linkedin.com/in/nuri-w-park">
      <img src={linkedinIcon} alt="li icon" />
    </a>
  </footer>
)


