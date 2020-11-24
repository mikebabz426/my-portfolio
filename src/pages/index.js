import React, { useContext, useState, useEffect } from "react"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { ThemeContext } from "./../ThemeContext"
import {
  Grid,
  Typography,
  Box,
  Button,
  Container,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Avatar,
  Link as MuiLink,
  Collapse,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import WebIcon from "@material-ui/icons/Web"
import BrushIcon from "@material-ui/icons/Brush"
import LayersIcon from "@material-ui/icons/Layers"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles(theme => ({
  container: {
    margin: "0 auto",
    width: "70%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  section: {
    height: "100vh",
    paddingTop: "7rem",
  },
  card: {
    minWidth: 275,
    maxWidth: 300,
  },
  chip: {
    margin: ".5rem",
  },
  btn: {
    margin: "1rem .5rem",
  },
  type: {
    margin: ".5rem auto",
  },
  link: {
    textDecoration: "none",
  },
  grid: {
    marginTop: "3rem",
  },
  closing: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5rem",
    textAlign: "justify",
  },
  headers: {
    textAlign: "left",
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
}))

const IndexPage = ({ data }) => {
  const [theme] = useContext(ThemeContext)
  const classes = useStyles()
  const [animation, setAnimation] = useState(false)

  useEffect(() => setAnimation(true), [])

  const frontEnd = [
    "React",
    "GatsbyJS",
    "HTML5",
    "CSS3",
    "GraphQL",
    "Javascript",
  ]
  const design = ["Photoshop", "Illustrator", "AdobeXD", "Figma"]
  const cssTools = ["Material UI", "Bootstrap", "Styled Components", "SASS"]

  const source = theme
    ? data.lightImage.childImageSharp.fluid
    : data.darkImage.childImageSharp.fluid

  const style = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage style={style} fluid={source}>
        <Collapse
          in={animation}
          timeout={1000}
          style={{ margin: "0 auto", width: "70%" }}
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
              <Link to="/about" className={classes.link}>
                <Button variant="outlined" className={classes.btn}>
                  About Me
                </Button>
              </Link>
              <Link to="/projects" className={classes.link}>
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
          </Box>
        </Collapse>
      </BackgroundImage>
      <Container maxWidth="lg" className={classes.section}>
        <Typography variant="h2" align="center">
          Here's an overview of some of my skills
        </Typography>

        <Grid
          className={classes.grid}
          container
          spacing={4}
          justify="center"
          align="center"
        >
          <Grid item>
            <Card raised className={classes.card}>
              <CardHeader
                className={classes.headers}
                title="Front-End Technologies"
                avatar={
                  <Avatar aria-label="web">
                    <WebIcon color="primary" />
                  </Avatar>
                }
              />
              <CardContent>
                {frontEnd.map(tech => (
                  <Chip
                    color="primary"
                    className={classes.chip}
                    label={tech}
                    key={tech}
                  />
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card raised className={classes.card}>
              <CardHeader
                title="Design Tools"
                className={classes.headers}
                avatar={
                  <Avatar aria-label="web">
                    <BrushIcon color="primary" />
                  </Avatar>
                }
              />
              <CardContent>
                {design.map(tech => (
                  <Chip
                    color="primary"
                    className={classes.chip}
                    label={tech}
                    key={tech}
                  />
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card raised className={classes.card}>
              <CardHeader
                title="CSS Frameworks & Tools"
                className={classes.headers}
                avatar={
                  <Avatar aria-label="web">
                    <LayersIcon color="primary" />
                  </Avatar>
                }
              />
              <CardContent>
                {cssTools.map(tech => (
                  <Chip
                    color="primary"
                    className={classes.chip}
                    label={tech}
                    key={tech}
                  />
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Container maxWidth="md" className={classes.closing}>
          <Typography variant="body1">
            I believe the most important skill for a developer is his ability to
            learn and adapt to new tech trends in this rapidly changing space
            that is Web Development. Here are some of the technologies I am
            currently learning and planning on incorporating into my workflow
            very soon.
          </Typography>
          <Box style={{ display: "flex", margin: "2rem" }}>
            <Chip color="primary" label="Docker" className={classes.chip} />
            <Chip color="primary" label="Kubernetes" className={classes.chip} />
          </Box>
        </Container>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    darkImage: file(relativePath: { eq: "showcase-dark.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lightImage: file(relativePath: { eq: "showcase-light.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
