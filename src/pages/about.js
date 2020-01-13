import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import combo from "../utils/img/combo.jpeg"
import beads from "../utils/img/beads.jpeg"
import jade from "../utils/img/jade.jpeg"
import pearls from "../utils/img/pearls.jpeg"
import showPic from "../utils/img/showPic.jpeg"
import tourmaline from "../utils/img/tourmaline.jpeg"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[
          `Imperial Gems`,
          `gems`,
          `gemstones`,
          `pearls`,
          `beads`,
          `jewelry`,
        ]}
      />
      <section className="about">
        <h2 className="about-title">Gallery</h2>
        <div className="grid-container">
          <div className="grid-items">
            <img src={combo} alt="collection of our jewelry" />
          </div>
          <div className="grid-items">
            <img src={showPic} alt="a show we recently did" />
          </div>
          <div className="grid-items">
            <img src={beads} alt="beads" />
          </div>
          <div className="grid-items">
            <img src={jade} alt="beads" />
          </div>
          <div className="grid-items">
            <img src={pearls} alt="pearls" />
          </div>
          <div className="grid-items">
            <img src={tourmaline} alt="tourmaline" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
