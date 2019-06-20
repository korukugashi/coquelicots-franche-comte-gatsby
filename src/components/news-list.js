import React from "react"
import { graphql } from "gatsby"
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
    return (
      <Layout>
        <SEO title="Les actualités des coquelicots en Franche-Comté" />
        <section className="section" id="actualite">
          <div className="container">
            <h1>Les actualités des coquelicots en Franche-Comté</h1>
            <div className="columns is-multiline">
              {posts.map(({ node }, index) => {
                return (
                  <article key={index} className="column is-half">
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
                  </article>
                )
              })}
            </div>
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
          }
          html
        }
      }
    }
  }
`
