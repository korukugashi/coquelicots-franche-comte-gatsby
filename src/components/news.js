import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Content, { HTMLContent } from "./Content"

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

export const ActualiteTemplate = ({
  title,
  date,
  content,
  photos,
  contentComponent,
  liens
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="box">
      <h2>{title}</h2>
      <time dateTime="2019-05-19">{date}</time>
      <PostContent content={content} />
      {photos ? (
        <div
          className="columns is-multiline is-centered"
          style={{ marginTop: "0.5rem" }}
        >
          {photos.map((photo, index) => (
            <Image photo={photo} key={index} />
          ))}
        </div>
      ) : null}
      {liens ? (
        <div>
          {liens.map((lien, index) => (
            <span key={index}>{index > 0 ? ' - ' : null}<a href={lien.url && lien.url.indexOf('http') >= 0 ? lien.url : `https://${lien.url}`}>{lien.description || lien.url}</a></span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

class News extends React.Component {
  render() {
    const { data } = this.props
    const { edges: news, totalCount } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <h1 style={{ color: "#fff", marginBottom: "3rem" }}>
            <span>Actualités</span>
          </h1>
          <div className="columns is-multiline is-centered">
            <div className="column is-half">
              {news &&
                news.map(({ node: post }, index) =>
                  index % 2 === 0 ? (
                    <article key={index} style={{ marginTop: '2rem' }}>
                      <ActualiteTemplate
                        title={post.frontmatter.title}
                        date={post.frontmatter.date}
                        content={post.html}
                        contentComponent={HTMLContent}
                        photos={post.frontmatter.photos}
                        liens={post.frontmatter.liens}
                      />
                    </article>
                  ) : null
                )}
            </div>
            <div className="column is-half">
              {news &&
                news.map(({ node: post }, index) =>
                  index % 2 === 1 ? (
                    <article key={index} style={{ marginTop: '2rem' }}>
                      <ActualiteTemplate
                        title={post.frontmatter.title}
                        date={post.frontmatter.date}
                        content={post.html}
                        contentComponent={HTMLContent}
                        photos={post.frontmatter.photos}
                        liens={post.frontmatter.liens}
                      />
                    </article>
                  ) : null
                )}
            </div>
          </div>
          {totalCount > 4 ? (
            <div className="has-text-centered" style={{ marginTop: "2rem" }}>
              <Link to="/actualites/" className="button" style={{}}>
                Voir toutes les actualités
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    )
  }
}

News.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsQuery {
        allMarkdownRemark(
          limit: 4
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "actualites" } } }
        ) {
          totalCount
          edges {
            node {
              excerpt(pruneLength: 5000)
              id
              html
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
            }
          }
        }
      }
    `}
    render={(data, count) => <News data={data} count={count} />}
  />
)
