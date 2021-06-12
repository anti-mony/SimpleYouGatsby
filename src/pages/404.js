import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Typography } from "@material-ui/core"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "404doggo.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <Seo title="404: Not found" />
      <Typography variant="h2" gutterBottom>
        <div className="page-header">Uhh......</div>
      </Typography>
      <Typography variant="subtitle1">
        <div className="page-subtitle">
          You just hit a route that doesn&#39;t exist... the sadness. But this
          might cheer you up !
        </div>
      </Typography>
      <div className="index-content">
        {/* <Img
          fluid={data.file.childImageSharp.fluid}
          className="fluid-image"
        ></Img> */}
        <a
          className="image-credits"
          href="https://unsplash.com/@richardbrutyo?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          target="_blank"
          rel="noopener noreferrer"
          title="Download free do whatever you want high-resolution photos from Richard Brutyo"
        >
          <span className="image-credits-span1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="image-credits-svg"
              viewBox="0 0 32 32"
            >
              <title>unsplash-logo</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg>
          </span>
          <span className="image-credits-span2">Photo By Richard Brutyo</span>
        </a>
      </div>
    </Layout>
  )
}

export default NotFoundPage
