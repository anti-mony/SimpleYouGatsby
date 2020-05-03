import React from "react"
import ReactMarkdown from "markdown-to-jsx"

import {
  ListItemText,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core"

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h1",
        style: { marginTop: "16px" },
      },
    },
    h2: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h2",
        style: { marginTop: "16px" },
      },
    },
    h3: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h4",
        style: { marginTop: "16px" },
      },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h5",
        style: { marginTop: "16px" },
      },
    },
    h5: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h6",
        style: { marginTop: "16px" },
      },
    },

    p: {
      component: Typography,
      props: {
        variant: "body1",
        component: "div",
        style: { marginTop: "4px", marginBottom: "4px" },
      },
    },
    li: {
      component: ({ ...props }) => (
        <li>
          <ListItemText component="span" {...props} />
        </li>
      ),
    },
    table: {
      component: Table,
      props: {
        padding: "none",
        style: { marginBottom: "16px", maxWidth: "100%" },
      },
    },
    thead: { component: TableHead },
    tr: { component: TableRow },
    th: { component: TableCell, props: { align: "center" } },
    td: { component: TableCell, props: { align: "center" } },
    tbody: { component: TableBody },
  },
}

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />
}
