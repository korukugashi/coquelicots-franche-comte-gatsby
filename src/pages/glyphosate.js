import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content, { HTMLContent } from "../components/Content"

export const GlyphosateTemplate = ({ title, content, contentComponent }) => {
  const PostContent = contentComponent || Content

  return (
    <>
      <h1>{title}</h1>
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
          keywords={[`pesticides`, `glyphosate`, `prélèvement`, `analyse`, `urine`, `santé`]}
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
                  item:
                    "https://www.coquelicots-franche-comte.org/glyphosate/",
                },
              ],
            },
          ]}
        />
        <section className="section">
          <div className="container">
            {glyphosate &&
              glyphosate.map(({ node: post }, index) =>
                  <>
                    <GlyphosateTemplate
                      title={post.frontmatter.title}
                      content={post.html}
                      contentComponent={HTMLContent}
                    />
                  </>
              )}
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
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Glyphosate data={data} count={count} />}
  />
)
