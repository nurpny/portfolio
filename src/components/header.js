import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              greeting
              title1
              title2
            }
          }
        }
      }
    `}
    render={data => (

        <div className="section-text-container headline">
        <div>{data.site.siteMetadata.home.greeting}</div>
        <div>{data.site.siteMetadata.home.title1}</div>
        <div>{data.site.siteMetadata.home.title2}</div>
        </div>

    )}
  />
)
