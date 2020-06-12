import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Fade } from "@material-ui/core"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // On Page Change
  useEffect(() => {
    setChecked(true)
  }, [children])

  const [checked, setChecked] = useState(true)

  return (
    <div className="root">
      <Header siteTitle={data.site.siteMetadata.title} />
      <Fade in={checked}>
        <div className="content">{children}</div>
      </Fade>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
