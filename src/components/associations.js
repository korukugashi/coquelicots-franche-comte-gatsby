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

class Associations extends React.Component {
  render() {
    const { data } = this.props
    const { edges } = data.allMarkdownRemark

    return (
      <section className="section" id="associations">
        <div className="container">
          <h2>Associations</h2>
          <ul className="columns is-multiline is-centered">
            {edges &&
              edges[0].node.frontmatter.associations &&
              edges[0].node.frontmatter.associations.map((organism, index) => (
                <li className="column is-2" key={index}>
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
            frontmatter: {
              associations: { elemMatch: { title: { ne: null } } }
            }
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
    render={(data, count) => <Associations data={data} count={count} />}
  />
)
