import React from "react"
import { Link } from "gatsby"
import { Typography, Button } from "@material-ui/core"

const BlogListItem = ({ data, taste }) => {
  const { title, subtitle, date, tags, path } = data

  return (
    <div className="blog-item">
      <Link className="clean-link" to={path}>
        <Typography variant="h4" style={{ fontWeight: "bold" }} color="textPrimary">
          {title}
        </Typography>
      </Link>
      <Typography variant="h6" style={{ fontWeight: "lighter" }} gutterBottom>
        {subtitle}
      </Typography>
      <Typography
        variant="subtitle2"
        color="secondary"
        style={{ fontStyle: "italic" }}
        gutterBottom
      >
        Posted On {date}
      </Typography>
      <Typography variant="body1" style={{ textAlign: "justify" }}>
        {taste}
        <Link className="clean-link" to={path}>
          <Button>Read More</Button>
        </Link>
      </Typography>

      <Typography variant="body2" color="textSecondary">
        Tags:{" "}
        {tags.map((tag, index) => (
          <Typography
            variant="button"
            color="secondary"
            style={{ marginLeft: "8px" }}
            key={index}
          >
            {tag}
          </Typography>
        ))}
      </Typography>
    </div>
  )
}

export default BlogListItem
