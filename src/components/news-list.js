import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "./layout"
import SEO from "./seo"

const Image = ({ photo }) => (
  <div className="column is-6">
    {photo.image && photo.image.childImageSharp ? (
      <Img
        fluid={photo.image.childImageSharp.fluid}
        alt={photo.description}
        style={{
          maxWidth: photo.image.childImageSharp.fluid.presentationWidth,
          maxHeight: 300,
          margin: "0 auto",
        }}
        imgStyle={{ objectFit: "contain" }}
      />
    ) : (
      <img
        src={photo.image}
        alt={photo.description}
        style={{ maxWidth: 300 }}
      />
    )}
  </div>
)

export default class NewsList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = `/actualites/${
      currentPage - 1 === 1 ? "" : `${(currentPage - 1).toString()}/`
    }`
    const nextPage = `/actualites/${(currentPage + 1).toString()}/`

    return (
      <Layout>
        <SEO
          title="Les actualités des coquelicots en Franche-Comté"
          jsonLd={[
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Coquelicots Franche-Comté",
                  item: "https://www.coquelicots-franche-comte.org/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Actualités",
                  item: "https://www.coquelicots-franche-comte.org/actualites/",
                },
              ],
            },
          ]}
        />
        <section
          className="section"
          id="actualite"
          style={{ background: "#666" }}
        >
          <div className="container">
            <h1>
              <span style={{ color: "#fff", background: "#222" }}>
                Les actualités des coquelicots en Franche-Comté
              </span>
            </h1>
            <div className="columns is-multiline is-centered">
              {posts.map(({ node }, index) => (
                <article key={index} className="column is-half">
                  <div className="box">
                    <h2>{node.frontmatter.title}</h2>
                    <time dateTime="2019-05-19">{node.frontmatter.date}</time>
                    <div dangerouslySetInnerHTML={{ __html: node.html }} />
                    {node.frontmatter.photos ? (
                      <div
                        className="columns is-multiline is-centered"
                        style={{ marginTop: "0.5rem" }}
                      >
                        {node.frontmatter.photos.map((photo, index) => (
                          <Image photo={photo} key={index} />
                        ))}
                      </div>
                    ) : null}
                    {node.frontmatter.liens ? (
                      <div className="has-text-centered">
                        {node.frontmatter.liens.map((lien, index) => (
                          <span key={index}>
                            {index > 0 ? " - " : null}
                            <a
                              href={
                                lien.url && lien.url.indexOf("http") >= 0
                                  ? lien.url
                                  : `https://${lien.url}`
                              }
                            >
                              {lien.description || lien.url}
                            </a>
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
            <nav
              className="pagination"
              role="navigation"
              aria-label="pagination"
              style={{ marginTop: "2rem" }}
            >
              {(!isFirst && (
                <Link to={prevPage} rel="prev" className="pagination-previous">
                  ← Page précédante
                </Link>
              )) || (
                <span className="pagination-previous" disabled>
                  ← Page précédante
                </span>
              )}
              <ul className="pagination-list">
                {Array.from({ length: numPages }, (_, i) => (
                  <li>
                    <Link
                      key={`pagination-number${i + 1}`}
                      to={`/actualites/${i === 0 ? "" : `${i + 1}/`}`}
                      className={`pagination-link${
                        i + 1 === currentPage ? " is-current" : ""
                      }`}
                    >
                      {i + 1}
                    </Link>
                  </li>
                ))}
              </ul>
              {(!isLast && (
                <Link to={nextPage} rel="next" className="pagination-next">
                  Page suivante →
                </Link>
              )) || (
                <span className="pagination-next" disabled>
                  Page suivante →
                </span>
              )}
            </nav>
          </div>
        </section>
      </Layout>
    )
  }
}

export const newsListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "actualites" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            photos {
              image {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    presentationWidth
                  }
                }
              }
              description
            }
            liens {
              url
              description
            }
          }
          html
        }
      }
    }
  }
`
