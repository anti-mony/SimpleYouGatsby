import React from "react"
import { Link } from "gatsby"
import Moment from "react-moment"
import { Box, Typography, Button } from "@material-ui/core"

const BlogListItem = ({ data, taste }) => {
  const { title, subtitle, date, tags } = data

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      className="blog-item"
    >
      <Link className="clean-link">
        <Typography variant="h4" style={{ fontWeight: "bold", color: "#000" }}>
          {title}
        </Typography>
      </Link>
      <Typography variant="h6" style={{ fontWeight: "lighter" }} gutterBottom>
        {subtitle}
      </Typography>
      <Typography
        variant="subtitle2"
        className="iconColor"
        style={{ fontStyle: "italic" }}
        gutterBottom
      >
        Posted On{" "}
        <Moment parse="YYYY-MM-DD" format="DD MMMM, YYYY">
          {date}
        </Moment>
      </Typography>
      <Typography variant="body1" style={{ textAlign: "justify" }}>
        {taste}
        <Link className="clean-link">
          <Button>Read More</Button>
        </Link>
      </Typography>

      <Typography variant="body2" style={{ color: "#263238" }}>
        Tags:{" "}
        {tags.map(tag => (
          <Typography
            variant="button"
            className="iconColor"
            style={{ marginLeft: "1rem" }}
          >
            {tag}
          </Typography>
        ))}
      </Typography>
    </Box>
  )
}

export default BlogListItem
