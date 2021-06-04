import React, { useContext } from "react"
import { CssBaseline } from "@material-ui/core"
import "../../src/main.css"
import PropTypes from "prop-types"
import Header from "./header"
import "fontsource-roboto"
import { ThemeContext } from "./../ThemeContext"

const Layout = ({ children }) => {
  const [theme, setTheme] = useContext(ThemeContext)

  return (
    <CssBaseline style={{ scrollBehavior: "smooth" }}>
      <Header themeHandler={() => setTheme(!theme)} themeState={theme} />
      {children}
    </CssBaseline>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
