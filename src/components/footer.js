import React from "react"

const Footer = () => {
  return (
    <div className="footer">
      <h1>Sushant</h1>© {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  )
}

export default Footer
