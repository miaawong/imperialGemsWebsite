import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const SchedulePage = ({ data }, location) => {
  return (
    <Layout title="schedule">
      <section className="schedule-contain">
        <h2>Our Schedule</h2>
        <p>We travel all year long, we might be in your city this weekend!</p>
        <hr></hr>
        <div className="shows">
          <h3>JANUARY 18-19-20, 2020</h3>
          <h3>AKS Gem Show</h3>
          <h3>Oklahoma Winter Jewelry & Bead Show</h3>
          <h3> 3213 Wichita Walk Oklahoma City, 73147 United States </h3>
          <p> Friday, January 17th, 10 am – 6 pm</p>
          <p> Saturday, January 18th, 10 am – 6 pm </p>
          <p> Sunday, January 19th, 10 am – 4 pm</p>
        </div>
        <hr></hr>
        <div className="shows">
          <h3>January 24, 25 ,26, 2020</h3>
          <h3>AKS Gem Show New Orleans Winter Jewelry & Bead Show</h3>
          <h3>4545 Williams Blvd.Kenner, LA 70065</h3>
          <p>Friday, January 24th, 10 am – 6 pm </p>
          <p>Saturday, January 25th, 10 am – 6 pm </p>
          <p>Sunday, January 26th, 10 am – 4 pm </p>
        </div>
        <hr></hr>
        <div className="shows">
          <h3>January 30 – February 16, 2020</h3>
          <h3>22nd Street Show 600 W 22nd Street,Tucson, AZ 85701 </h3>
          <h3>Shuttle Route: Downtown Gem Loop, which is the Green Route</h3>
          <p>Hours: 10 am – 6 pm every day Booth # F26</p>
        </div>
        <hr></hr>
        <div className="shows">
          <h3>February 1 - 8, 2020</h3>
          <h3>To Bead True Blue. Colors of the Stone Casino Del Sol Resort</h3>
          <h3>5655 W Valencia Rd, Tucson,AZ</h3>
          <p>
            Hour: 10am-6pm every day Booth # Tent 316 (Face to Main Entrance)
          </p>
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
  }
`
export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <SchedulePage location={props.location} data={data} {...props} />
    )}
  />
)
