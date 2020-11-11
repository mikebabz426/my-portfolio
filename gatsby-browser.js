/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
const { useState, createContext } = require("react")
const { light, dark } = require("./src/themes")
const { ThemeProvider } = require("@material-ui/core")
const { createMuiTheme } = require("@material-ui/core/styles")

const ThemeContext = createContext()

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState(true)
  const appliedTheme = createMuiTheme(theme ? light : dark)

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={appliedTheme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

exports.wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>
}

exports.ThemeContext = ThemeContext
