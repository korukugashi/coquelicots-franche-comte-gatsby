import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Obfuscate from "react-obfuscate"

const SocialLink = ({ link, network, title }) => {
  if (!link) {
    return null
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="follow"
      href={link}
      title={title}
      aria-label={title}
    >
      <svg>
        <use xlinkHref={`#icon-${network}`} />
      </svg>
    </a>
  )
}

export const GroupeTemplate = ({
  index,
  group
}) => (
  <div className="column is-3" key={index}>
    <h2>
      {group.commune} ({group.departement})
    </h2>
    <div className="is-flex columns is-centered">
      {group.email ? (
        <Obfuscate
          className="follow"
          email={group.email}
          obfuscateChildren={false}
        >
          <svg className="email" title="E-mail" aria-label="E-mail">
            <use xlinkHref="#icon-email" />
          </svg>
        </Obfuscate>
      ) : null}
      <SocialLink link={group.facebook} network="facebook" title="Facebook" />
      <SocialLink link={group.twitter} network="twitter" title="Twitter" />
      <SocialLink
        link={group.instagram}
        network="instagram"
        title="Instragram"
      />
      <SocialLink link={group.youtube} network="youtube" title="Youtube" />
    </div>
    {group.newsletter ? (
      <div className="newsletter">
        <a target="_blank" rel="noopener noreferrer" href={group.newsletter}>
          S'abonner à la newsletter
        </a>
      </div>
    ) : null}
    <div>
      <span className="has-text-weight-bold">
        {`Correspondant${group.genre === "Féminin" ? "e" : ""} :`}
      </span>{" "}
      {group.correspondant}
    </div>
  </div>
)

class Groups extends React.Component {
  render() {
    const { data } = this.props
    const { edges: groups } = data.allMarkdownRemark

    return (
      <section className="section region">
        <div className="container-fluid">
          <h1 style={{ color: "#fff" }}>
            <span>Nous rejoindre en Franche-Comté</span>
          </h1>
          <div className="columns has-text-centered is-vcentered is-multiline is-centered">
            {groups &&
              groups[0].node.frontmatter.groupes &&
              groups[0].node.frontmatter.groupes.map((group, index) => (
                <GroupeTemplate group={group} index={index} />
              ))}
          </div>
        </div>
      </section>
    )
  }
}

Groups.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query GroupsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "groupes" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                groupes {
                  commune
                  departement
                  correspondant
                  genre
                  email
                  facebook
                  twitter
                  instagram
                  youtube
                  newsletter
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Groups data={data} count={count} />}
  />
)
