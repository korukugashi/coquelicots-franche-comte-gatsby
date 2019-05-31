import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

class Mairies extends React.Component {
  render() {
    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    return (
        <section className="section" id="mairies">
          <div className="container">
            <h2>Mairies</h2>
            <ul class="columns is-multiline has-text-centered">
              {edges && edges[0].node.frontmatter.mairies && edges[0].node.frontmatter.mairies.map(mairie => (
                  <li className="column is-6">
                    {mairie.link ? (
                      <a href={mairie.link} target="_blank" rel="noopener noreferrer">
                        <svg>
                          <use xlinkHref="#icon-mairie" />
                        </svg>
                        {mairie.title}
                      </a>
                    ) : (
                      <span>
                        <svg>
                          <use xlinkHref="#icon-mairie" />
                        </svg>
                        {mairie.title}
                      </span>
                    )}
                  </li>
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