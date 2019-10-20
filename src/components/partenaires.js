import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Content, { HTMLContent } from "./Content"

export const PartenaireTemplate = ({
  title,
  content,
  photo,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div class="columns is-centered is-vcentered">
      <div class="column is-3">
        {photo ? (
          <Img
            fluid={photo.childImageSharp.fluid}
            alt={title}
            style={{
              maxWidth: photo.childImageSharp.fluid.presentationWidth,
              maxHeight: 250,
            }}
            imgStyle={{ objectFit: "contain" }}
          />
        ) : null}
      </div>
      <div class="column">
        <PostContent content={content} />
      </div>
    </div>
  )
}

class Partenaires extends React.Component {
  render() {
    const { data } = this.props
    const { edges: partenaires } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          {partenaires &&
            partenaires.map(({ node: post }, index) => (
              <article key={index}>
                <PartenaireTemplate
                  title={post.frontmatter.title}
                  content={post.html}
                  contentComponent={HTMLContent}
                  photo={post.frontmatter.image}
                />
              </article>
            ))}
        </div>
      </section>
    )
  }
}

Partenaires.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PartenairesQuery {
        allMarkdownRemark(
          limit: 1
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "partenaires" } } }
        ) {
          totalCount
          edges {
            node {
              id
              html
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 200, quality: 80) {
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
    render={(data, count) => <Partenaires data={data} count={count} />}
  />
)
