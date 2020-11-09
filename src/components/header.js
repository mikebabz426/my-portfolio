import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
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
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
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
