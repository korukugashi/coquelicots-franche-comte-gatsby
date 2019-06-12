import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

export const MairieTemplate = ({ organism, index }) => (
  <li className="column is-6" key={index}>
    {organism.link ? (
      <a href={organism.link} target="_blank" rel="noopener noreferrer">
        <svg>
          <use xlinkHref="#icon-mairie" />
        </svg>
        {organism.title}
      </a>
    ) : (
      <span>
        <svg>
          <use xlinkHref="#icon-mairie" />
        </svg>
        {organism.title}
      </span>
    )}
  </li>
)

class Mairies extends React.Component {
  render() {
    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    return (
      <section className="section" id="mairies">
        <div className="container">
          <h2>Mairies</h2>
          <ul className="columns is-multiline has-text-centered">
            {edges &&
              edges[0].node.frontmatter.mairies &&
              edges[0].node.frontmatter.mairies.map((organism, index) => (
                <MairieTemplate index={index} organism={organism} />
              ))}
          </ul>
        </div>
      </section>
    )
  }
}

Mairies.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query MairiesQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { mairies: { elemMatch: { title: { ne: null } } } }
          }
        ) {
          edges {
            node {
              frontmatter {
                mairies {
                  link
                  title
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Mairies data={data} count={count} />}
  />
)
