import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content, { HTMLContent } from "../components/Content"

export const GlyphosateTemplate = ({
  title,
  content,
  photo,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content

  return (
    <>
      <div className="columns is-vcentered">
        <div className="column is-3">
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
        <div className="column">
          <h1>{title}</h1>
        </div>
      </div>
      <PostContent content={content} />
    </>
  )
}

class Glyphosate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: glyphosate } = data.allMarkdownRemark

    return (
      <Layout>
        <SEO
          title="Campagne glyphosate 25"
          description="Campagne de tests de présence de glyphosate dans les urines. Les pisseurs de glyphosate du Doubs ont porté plainte au tribunal de Besançon."
          keywords={[
            `pesticides`,
            `glyphosate`,
            `prélèvement`,
            `analyse`,
            `urine`,
            `santé`,
          ]}
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
                  name: "Campagne glyphosate 25",
                  item: "https://www.coquelicots-franche-comte.org/glyphosate/",
                },
              ],
            },
          ]}
        />
        <section className="section page-glyphosate25">
          <div className="container">
            {glyphosate &&
              glyphosate.map(({ node: post }, index) => (
                <>
                  <GlyphosateTemplate
                    title={post.frontmatter.title}
                    content={post.html}
                    contentComponent={HTMLContent}
                    photo={post.frontmatter.image}
                  />
                </>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

Glyphosate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query GlyphosateQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "glyphosate" } } }
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
    render={(data, count) => <Glyphosate data={data} count={count} />}
  />
)
