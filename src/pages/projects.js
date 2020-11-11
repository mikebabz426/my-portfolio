import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the Projects page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage
