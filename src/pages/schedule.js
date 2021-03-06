import React from "react"
import { graphql, StaticQuery } from "gatsby"

import RichTextToReact from "rich-text-to-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const getSchedule = graphql`
  {
    schedule: allContentfulSchedule {
      edges {
        node {
          schedule {
            json
          }
        }
      }
    }
  }
`

const SchedulePage = ({ data }, location) => {
  const { edges } = data.schedule
  console.log(edges)
  return (
    <Layout title="schedule">
      <section className="schedule-contain">
        <h2>Our Schedule</h2>
        <p>We travel all year long, we might be in your city this weekend!</p>
        <hr></hr>

        {edges.map(show => {
          return (
            <>
              <div id={show.node.id} className="shows">
                <RichTextToReact document={show.node.schedule.json} />
              </div>

              <hr></hr>
            </>
          )
        })}
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
    query={getSchedule}
    render={data => {
      return <SchedulePage data={data} {...props} />
    }}
  />
)
