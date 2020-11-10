import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import Brightness2Icon from "@material-ui/icons/Brightness2"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, themeHandler }) => (
  <AppBar>
    <Toolbar>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <Typography variant="h5">{siteTitle}</Typography>
      </Link>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography>Toggle Dark Mode</Typography>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="brightness"
        onClick={themeHandler}
      >
        <Brightness2Icon />
      </IconButton>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
