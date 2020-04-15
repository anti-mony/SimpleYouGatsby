import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Fade } from "@material-ui/core"
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

  useEffect(() => {
    setChecked(true)
  }, [children])

  const [checked, setChecked] = useState(false)

  return (
    <div className="root">
      <Header siteTitle={data.site.siteMetadata.title} />
      <Fade in={checked}>
        <Box className="content">{children}</Box>
      </Fade>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
