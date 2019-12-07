import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Index from "../components/Index"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Index>
      <h1>Hi there! I'm a graduate student who has worked with children for over nine years.</h1>
    </Index>
    <Index>
      <p>image</p>
    </Index>
    <Index>
      <h2>Services & Pricing</h2>
      <p>Add a description of your services. Aliquam at lorem tortor. Nulla eu sapien eu nibh dapibus ornare. Vestibulum posuere rhoncus elementum. Donec mattis luctus nisl non iaculis. Maecenas rhoncus augue nisi, id suscipit arcu luctus varius.</p>
      <p>The rates below are for one child. Please contact me regarding rates for additional children.</p>
      <ul>
        <li>Full-time nanny - $20 per hour</li>
        <li>Babysitter - $25 per hour</li>
        <li>Newborn caregiver - $45 per hour</li>
        <li>Overnight care - $150 a night</li>
        <li>Travel - $150 a day + expenses</li>
      </ul>
      <button>Book a Service</button>
    </Index>
    <Index style="alternate">
      <h2>Resume</h2>
      <p>Add a description of your services. Aliquam at lorem tortor. Nulla eu sapien eu nibh dapibus ornare. Vestibulum posuere rhoncus elementum. Donec mattis luctus nisl non iaculis. Maecenas rhoncus augue nisi, id suscipit arcu luctus varius.</p>
      <h3>Experience</h3>
      <button>Download Resume</button>
    </Index>
  </Layout>
)

export default IndexPage
