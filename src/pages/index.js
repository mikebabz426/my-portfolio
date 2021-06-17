import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import AboutSection from "../components/sections/About"
import ContactSection from "../components/sections/Contact"
import ProjectsSection from "../components/sections/Projects"
import SkillsSection from "../components/sections/Skills"
import SEO from "../components/seo"
import { Link } from "gatsby"
import {
  Container,
  IconButton,
  Typography,
  Box,
  Button,
  Link as MuiLink,
  Collapse,
} from "@material-ui/core"
import ArrowDDIcon from "@material-ui/icons/ExpandMore"
import { makeStyles } from "@material-ui/core/styles"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles(theme => ({
  hero: {
    width: "100vw",
    height: "100vh",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    margin: "0 auto",
    width: "70%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  btn: {
    margin: "1rem .5rem",
  },
  link: {
    textDecoration: "none",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  social: {
    marginTop: "1rem",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  socialLink: {
    margin: "0 .5rem",
    "&:hover": {
      color: theme.palette.secondary.light,
      textDecoration: "none",
      cursor: "pointer",
    },
  },
  scroll: {
    position: "absolute",
    bottom: "8%",
  },
  skills: {
    textDecoration: "none",
    color: "#3f51b5",
    background: "transparent",
    "&:visited": {
      textDecoration: "none",
      color: "#3f51b5",
    },
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const [animation, setAnimation] = useState(false)

  useEffect(() => setAnimation(true), [])

  return (
    <Layout>
      <SEO title="Home" />
      <Container className={classes.hero} id="hero">
        <Collapse
          in={animation}
          timeout={1200}
          style={{ margin: "0 auto", width: "100%" }}
        >
          <Box className={classes.container}>
            <Typography variant="h5" align="center" className={classes.type}>
              Hello
            </Typography>
            <Typography variant="h2" align="center" className={classes.type}>
              My name is Mike,
            </Typography>
            <Typography variant="h5" align="center" className={classes.type}>
              and I turn your ideas into clean and user-friendly web solutions
            </Typography>
            <Box className={classes.buttonBox}>
              <Link to="#about" className={classes.link}>
                <Button variant="outlined" className={classes.btn}>
                  About Me
                </Button>
              </Link>
              <Link to="#projects" className={classes.link}>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  className={classes.btn}
                >
                  My Work
                </Button>
              </Link>
            </Box>
            <Box className={classes.social}>
              <MuiLink
                style={{
                  textDecoration: "none",
                }}
                target="_blank"
                href="https://www.linkedin.com/in/mike-babetchki-34a150102/"
              >
                <LinkedInIcon
                  color="secondary"
                  fontSize="large"
                  className={classes.socialLink}
                />
              </MuiLink>
              <MuiLink
                style={{
                  textDecoration: "none",
                }}
                target="_blank"
                href="https://github.com/mikebabz426"
              >
                <GitHubIcon
                  color="secondary"
                  fontSize="large"
                  className={classes.socialLink}
                />
              </MuiLink>
            </Box>
            <IconButton color="secondary" className={classes.scroll}>
              <MuiLink href="#skills" className={classes.skills}>
                <ArrowDDIcon fontSize="large" />
              </MuiLink>
            </IconButton>
          </Box>
        </Collapse>
      </Container>
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  )
}

export default IndexPage
