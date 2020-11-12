import React, { useContext } from "react"
import { CssBaseline } from "@material-ui/core"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "fontsource-roboto"
import { ThemeContext } from "./../ThemeContext"

const Layout = ({ children }) => {
  const [theme, setTheme] = useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <CssBaseline>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        themeHandler={() => setTheme(!theme)}
        themeState={theme}
      />
      {children}
    </CssBaseline>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
