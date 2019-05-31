import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ organism }) => ( 
  <Img
    fluid={organism.logo.childImageSharp.fluid}
    alt={organism.title}
    style={{
      maxWidth: organism.logo.childImageSharp.fluid.presentationWidth,
      height: organism.logo.childImageSharp.fluid.presentationWidth,
      margin: "0 auto",
    }}
    imgStyle={{ objectFit: "contain" }}
  />
)

class Commercants extends React.Component {
  render() {
    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    return (
      <section className="section" id="commercants">
        <div className="container">
          <h2>Commerçants</h2>
          <ul class="columns is-multiline is-centered">
            {edges &&
              edges[0].node.frontmatter.commercants &&
              edges[0].node.frontmatter.commercants.map(organism => (
                <li className="column is-2">
                  {organism.link ? (
                    <a
                      href={organism.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Logo organism={organism} />
                    </a>
                  ) : (
                    <Logo organism={organism} />
                  )}
                </li>
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
                  logo {
                    childImageSharp {
                      fluid(maxWidth: 120, quality: 80) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        presentationWidth
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
    render={(data, count) => <Commercants data={data} count={count} />}
  />
)
