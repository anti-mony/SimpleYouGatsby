import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, Fragment } from "react"
import icon from "../images/icon.png"

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
import MenuIcon from "@material-ui/icons/Menu"

const Header = ({ siteTitle }) => {
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
    <AppBar position="sticky" style={{ background: "#b0bec5" }}>
      <Toolbar className="header-content">
        <img src={icon} alt="Site Logo" className="logo" />

        <Link
          to="/"
          style={{
            textDecoration: "none",
            outline: "none",
          }}
        >
          <Typography variant="h5" className="black-color">
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
            <MenuIcon />
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
