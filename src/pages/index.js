import React, { useContext } from "react"
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
    },
  },
}))

const IndexPage = ({ data }) => {
  const [theme] = useContext(ThemeContext)
  const classes = useStyles()

  const source = theme
    ? data.allImageSharp.nodes[1].fluid
    : data.allImageSharp.nodes[0].fluid

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
          <Box>
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
              component={Link}
              to="https://www.linkedin.com/in/mike-babetchki-34a150102/"
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
              component={Link}
              target="_blank"
              to="https://github.com/mikebabz426"
            >
              <GitHubIcon
                color="secondary"
                fontSize="large"
                className={classes.socialLink}
              />
            </MuiLink>
          </Box>
        </Box>
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
                title="Front-End Technologies"
                avatar={
                  <Avatar aria-label="web">
                    <WebIcon color="primary" />
                  </Avatar>
                }
              />
              <CardContent>
                <Chip color="primary" className={classes.chip} label="React" />
                <Chip
                  color="primary"
                  className={classes.chip}
                  label="GatsbyJS"
                />
                <Chip color="primary" className={classes.chip} label="HTML5" />
                <Chip color="primary" className={classes.chip} label="CSS3" />
                <Chip
                  color="primary"
                  className={classes.chip}
                  label="GraphQL"
                />
                <Chip
                  color="primary"
                  className={classes.chip}
                  label="Javascript"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card raised className={classes.card}>
              <CardHeader
                title="Design Tools"
                avatar={
                  <Avatar aria-label="web">
                    <BrushIcon color="primary" />
                  </Avatar>
                }
              />
              <CardContent>
                <Chip
                  color="primary"
                  className={classes.chip}
                  label="Photoshop"
                />
                <Chip
                  color="primary"
                  className={classes.chip}
                  label="Illustrator"
                />
                <Chip
                  color="primary"
                  className={classes.chip}
                  label="Adobe XD"
                />
                <Chip color="primary" className={classes.chip} label="Figma" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card raised className={classes.card}>
              <CardHeader
                title="CSS Frameworks & Tools"
                avatar={
                  <Avatar aria-label="web">
                    <LayersIcon color="primary" />
                  </Avatar>
                }
              />
              <CardContent>
                <Chip
                  color="primary"
                  className={classes.chip}
                  label="Material UI"
                />
                <Chip
                  color="primary"
                  className={classes.chip}
                  label="Bootstrap"
                />
                <Chip
                  color="primary"
                  className={classes.chip}
                  label="Styled Components"
                />
                <Chip color="primary" className={classes.chip} label="SASS" />
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

//I believe the most important skill for a web developer is his ability to learn and adapt to new tech trends in this rapidly changing space that is Web Development.
//Here are some of the technologies I am currently learning and planning on incorporating into my workflow very soon
//Docker / Kubernetes /

export const query = graphql`
  {
    allImageSharp {
      nodes {
        fluid(pngQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
