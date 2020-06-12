import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import React, { useState, Fragment, useContext } from "react"

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core"

import { List, Code, Fingerprint } from "@material-ui/icons"
import { MenuTwoTone, WbSunny, NightsStay } from "@material-ui/icons/"

import ThemeContext from "../theme/themeContext"

const Header = ({ siteTitle }) => {
  const imgData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon.webp" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const themeContext = useContext(ThemeContext)
  const { dark, toggle } = themeContext

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const navLinks = [
    {
      id: 1,
      nav: (
        <Link to="/Blog" className="clean-link">
          <Button>
            <List className="horizontal-margins" />
            Blog
          </Button>
        </Link>
      ),
    },
    {
      id: 2,
      nav: (
        <Link to="/Projects" className="clean-link">
          <Button>
            <Code className="horizontal-margins" />
            Projects
          </Button>
        </Link>
      ),
    },
    {
      id: 3,
      nav: (
        <Link to="/About" className="clean-link">
          <Button>
            <Fingerprint className="horizontal-margins" />
            About
          </Button>
        </Link>
      ),
    },
  ]

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar className="header-content">
        <Img fluid={imgData.file.childImageSharp.fluid} className="logo"></Img>

        <Link
          to="/"
          style={{
            textDecoration: "none",
            outline: "none",
          }}
        >
          <Typography variant="h5" color="textPrimary">
            {siteTitle}
          </Typography>
        </Link>


        <div className="flex-spacer"></div>

        <Hidden xsDown>
          {navLinks.map(navItem => (
            <Fragment key={navItem.id}>{navItem.nav}</Fragment>
          ))}
        </Hidden>
        <Hidden smUp>
          <IconButton
            className="black-color"
            onClick={handleClick}
            aria-label="Menu"
          >
            <MenuTwoTone />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {navLinks.map(nav => (
              <MenuItem onClick={handleClose} dense={true} key={nav.id}>
                {nav.nav}
              </MenuItem>
            ))}
          </Menu>
        </Hidden>
        <IconButton onClick={toggle}>
          {dark ? <WbSunny /> : <NightsStay />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Sushant Bansal`,
}

export default Header
