import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Index from "../components/Index"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Index id="intro">
        <h1 style={{ maxWidth: `65%`, margin: `auto`, textAlign: `center` }}>
          Hi there! I'm a graduate student who has worked with children for over
          nine years.
        </h1>
      </Index>
      <Index style={`alternate`}>
        image
      </Index>
      <Index id="service">
        <Container>
          <Row>
            <Col>
              <h2 className="h1">Services & Pricing</h2>
            </Col>
            <Col>
              <p>
                Add a description of your services. Aliquam at lorem tortor.
                Nulla eu sapien eu nibh dapibus ornare. Vestibulum posuere
                rhoncus elementum. Donec mattis luctus nisl non iaculis.
                Maecenas rhoncus augue nisi, id suscipit arcu luctus varius.
              </p>
              <p>
                The rates below are for one child. Please contact me regarding
                rates for additional children.
              </p>
              <ul>
                <li>Full-time nanny - $20 per hour</li>
                <li>Babysitter - $25 per hour</li>
                <li>Newborn caregiver - $45 per hour</li>
                <li>Overnight care - $150 a night</li>
                <li>Travel - $150 a day + expenses</li>
              </ul>
              <button>Book a Service</button>
            </Col>
          </Row>
        </Container>
      </Index>
      <Index id="resume" style={`alternate`}>
        <Container>
          <Row>
            <Col>
              <h2 className="h1">Resume</h2>
            </Col>
            <Col>
              <p>
                Add a description of your services. Aliquam at lorem tortor.
                Nulla eu sapien eu nibh dapibus ornare. Vestibulum posuere
                rhoncus elementum. Donec mattis luctus nisl non iaculis.
                Maecenas rhoncus augue nisi, id suscipit arcu luctus varius.
              </p>
              <h3>Experience</h3>
              <button>Download Resume</button>
            </Col>
          </Row>
        </Container>
      </Index>
      <Index id="testimonials">
        <Container>
          <Row>
            <Col>
              <h2 className="h1">Testimonials</h2>
            </Col>
            <Col>
              <blockquote>
                <p>
                  Testimonial quote. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin quis tincidunt arcu mollis eget turpis.
                </p>
                <footer>
                  — Iram Qureshi, Newspaper Editor & Mother of two
                </footer>
              </blockquote>
              <blockquote>
                <p>
                  Testimonial quote. Vivamus nunc nulla, mattis in risus eget,
                  auctor elementum est.
                </p>
                <footer>— Patrick Marino, Nurse & Father of three</footer>
              </blockquote>
              <blockquote>
                <p>
                  Testimonial quote. Maecenas rhoncus augue nisi, id suscipit
                  arcu luctus varius.
                </p>
                <footer>— Deanne Franzen, Lawyer & Mother of one</footer>
              </blockquote>
              <blockquote>
                <p>
                  Testimonial quote. Suspendisse est elit, malesuada ac ante ac,
                  consequat tincidunt est.
                </p>
                <footer>
                  — Yosuke Inoue, Advertising Executive & Father of two
                </footer>
              </blockquote>
            </Col>
          </Row>
        </Container>
      </Index>
      <Index id="contact" style={`alternate`}>
        <h2 className="h1">Contact</h2>
      </Index>
      <Index id="connect">
        <h2 className="h1">Connect</h2>
      </Index>
    </Layout>
  )
}

export default IndexPage

