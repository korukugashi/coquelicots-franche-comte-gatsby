import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ fluid, alt }) => (
    <Img fluid={fluid} alt={alt} style={{ maxWidth: 120, margin: '0 auto' }} />
)

class Associations extends React.Component {
  render() {
    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    return (
        <section className="section" id="associations">
          <div className="container">
            <h2>Associations</h2>
            <ul class="columns is-multiline is-centered">
              {edges && edges[0].node.frontmatter.associations && edges[0].node.frontmatter.associations.map(organism => (
                  <li className="column is-2 is-centered">
                    {organism.link ? (
                      <a href={organism.link} target="_blank" rel="noopener noreferrer">
                        <Logo fluid={organism.logo.childImageSharp.fluid} alt={organism.title} />
                      </a>
                    ) : <Logo fluid={organism.logo.childImageSharp.fluid} alt={organism.title} />}
                  </li>
                ))}
            </ul>
          </div>
        </section>
    )
  }
}

Associations.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query AssociationsQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { associations: { elemMatch: { title: { ne: null } } } }
          }
        ) {
          edges {
            node {
              frontmatter {
                associations {
                  link
                  title
                  logo {
                      childImageSharp {
                          fluid(maxWidth: 120, quality: 80) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Associations data={data} count={count} />}
  />
)
