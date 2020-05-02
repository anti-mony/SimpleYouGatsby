import React from "react"
import { Link } from "gatsby"
import { Typography, Button } from "@material-ui/core"

const BlogListItem = ({ data, taste }) => {
  const { title, subtitle, date, tags, path } = data

  return (
    <div className="blog-item">
      <Link className="clean-link" to={path}>
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
        Posted On {date}
      </Typography>
      <Typography variant="body1" style={{ textAlign: "justify" }}>
        {taste}
        <Link className="clean-link" to={path}>
          <Button>Read More</Button>
        </Link>
      </Typography>

      <Typography variant="body2" style={{ color: "#263238" }}>
        Tags:{" "}
        {tags.map((tag, index) => (
          <Typography
            variant="button"
            className="iconColor"
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
