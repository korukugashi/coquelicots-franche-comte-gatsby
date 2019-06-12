import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

class Affiches extends React.Component {
  render() {
    const { data } = this.props
    const { edges: affiches } = data.allMarkdownRemark

    if (!affiches.length) {
      return null
    }

    affiches.reverse()
    const last = affiches.pop()

    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <p className="has-text-centered" style={{ fontSize: '1.5em', maxWidth: 900, margin: '0 auto' }}>
                Le premier vendredi de chaque mois nous nous retrouvons devant les
                mairies de chaque ville, avec musique, apéro, vitalité, belles
                idées, et projets d’actions pour faire vivre l’Appel des
                coquelicots.
              </p>
              <p className="moon has-text-centered" style={{ fontSize: "3em", color: "#b50800" }}>
                Chaque mois soyons plus nombreux avec l'objectif de réunir<br />
                <span className="has-text-weight-bold">5 millions de personnes en 2020 !</span>
              </p>
              <div style={{ width: "200px", height: ".3125rem", background: "#097c47", margin: "2em auto 3em" }}></div>
            </div>
            
          </div>
          <div className="columns is-centered is-vcentered">
            {affiches.length ? (
              <div className="column is-hidden-touch">
                <div className="columns is-multiline is-centered">
                  {affiches.map((affiche, index) => (
                    <div className="column is-6" key={index}>
                      <Img
                        fluid={
                          affiche.node.frontmatter.image.childImageSharp.fluid
                        }
                        alt={affiche.node.frontmatter.title}
                        style={{
                          maxWidth: 300,
                          margin: "0 auto",
                        }}
                        imgStyle={{ objectFit: "contain" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="column">
              <Img
                fluid={last.node.frontmatter.image.childImageSharp.fluid}
                alt={last.node.frontmatter.title}
                style={{
                  maxWidth:
                    last.node.frontmatter.image.childImageSharp.fluid
                      .presentationWidth,
                  maxHeight: 700,
                  minHeight: 195,
                  margin: "0 auto",
                }}
                imgStyle={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Affiches.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query AffichesQuery {
        allMarkdownRemark(
          limit: 5
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "affiches" } } }
        ) {
          totalCount
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
                image {
                  childImageSharp {
                    fluid(maxWidth: 700, quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Affiches data={data} count={count} />}
  />
)
