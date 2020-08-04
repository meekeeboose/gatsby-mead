import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        The best way to reach me is on Twitter{" "}
        <a
          href="https://twitter.com/ronaldvilbar"
          target="_blank"
          rel="noreferrer"
        >
          @ronaldvilbar
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
