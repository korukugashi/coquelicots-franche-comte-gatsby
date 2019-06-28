import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

export const CommercantTemplate = ({ organism, index }) => (
  <li className="column is-6" key={index}>
    {organism.link ? (
      <a href={organism.link} target="_blank" rel="noopener noreferrer">
        <svg>
          <use xlinkHref="#icon-commercant" />
        </svg>
        {organism.title}
      </a>
    ) : (
      <span>
        <svg>
          <use xlinkHref="#icon-commercant" />
        </svg>
        {organism.title}
      </span>
    )}
  </li>
)

class Commercants extends React.Component {
  render() {
    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    return (
      <section className="section" id="commercants">
        <div className="container">
          <h2>Relais</h2>
          <ul className="columns is-multiline has-text-centered">
            {edges &&
              edges[0].node.frontmatter.commercants &&
              edges[0].node.frontmatter.commercants.map((organism, index) => (
                <CommercantTemplate index={index} organism={organism} />
              ))}
          </ul>
        </div>
      </section>
    )
  }
}

Commercants.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query CommercantsQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { commercants: { elemMatch: { title: { ne: null } } } }
          }
        ) {
          edges {
            node {
              frontmatter {
                commercants {
                  link
                  title
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Commercants data={data} count={count} />}
  />
)
