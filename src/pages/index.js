import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { IndexList } from "../data/IndexList"

import { StaticImage } from "gatsby-plugin-image"
import { Typography, Collapse, Button } from "@material-ui/core"

const IndexPage = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <Layout>
      <Seo
        title={`${IndexList.name.first} ${IndexList.name.middle} ${IndexList.name.last}`}
      />
      <div className="index-content">
        <div className="index-image">
          <StaticImage
            src="../images/author.webp"
            alt="Sushant Bansal at Navy Pier, Chicago"
            placeholder="Sushant Bansal at Navy Pier, Chicago"
            className="author-image"
          />
        </div>

        <Typography variant="h3">
          <div className="light-text">Hi, I'm</div>
        </Typography>

        <Typography variant="h2" gutterBottom>
          <div className="center-text bold-text">
            {IndexList.name.first +
              " " +
              IndexList.name.middle +
              " " +
              IndexList.name.last}
          </div>
        </Typography>

        <Typography variant="body1"></Typography>

        <Typography variant="body1" component="div">
          <div className="center-text">{IndexList.title}</div>
        </Typography>

        <Typography variant="body1" component="div">
          <div className="center-text">
            {IndexList.subtitle}
            <Collapse in={showMore}>{IndexList.more}</Collapse>
            {IndexList.more.length > 0 && (
              <Button
                onClick={() => setShowMore(!showMore)}
                aria-label="More Information"
              >
                {!showMore ? "more..." : " less"}
              </Button>
            )}
          </div>
        </Typography>
      </div>
    </Layout>
  )
}

export default IndexPage
