import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Fade } from "@material-ui/core"
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
        <Container className="content">{children}</Container>
      </Fade>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
