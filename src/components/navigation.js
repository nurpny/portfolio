import React from "react"
import { Link } from "gatsby"

export default (props) => {
  const { moveTo, pages } = props;
  return (
      <nav
    className="navigation"
    style={{
      zIndex: 100,
    }}>
    {pages.map((page, idx) =>
      <div key={idx} onClick={() => moveTo(idx + 1)}>{page}</div>
    )}
  </nav>
  )
}

