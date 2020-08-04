import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>
        I'm Andrew, a full-stack developer living in beautiful Philadelphia
      </h2>
      <p>
        Need a developer? <Link to="/about">About me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
