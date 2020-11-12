import React, { useState, createContext } from "react"
import { light, dark } from "./themes"
import { ThemeProvider } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core/styles"

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(true)
  const appliedTheme = createMuiTheme(theme ? light : dark)
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
