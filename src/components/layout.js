import React, { useState } from "react"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "fontsource-roboto"
import { createMuiTheme } from "@material-ui/core/styles"
import { light, dark } from "./../themes"

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(true)
  const appliedTheme = createMuiTheme(theme ? light : dark)

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
      <ThemeProvider theme={appliedTheme}>
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          themeHandler={() => setTheme(!theme)}
        />
        {children}
      </ThemeProvider>
    </CssBaseline>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
