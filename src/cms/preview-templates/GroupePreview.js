import React from "react"
import PropTypes from "prop-types"
import { GroupeTemplate } from "../../components/groups"
import { ReactComponent as IconsSprite } from "../../images/icons-sprite.svg"

const GroupePreview = ({ entry, widgetsFor }) => (
  <div className="region">
    <div className="is-hidden">
      <IconsSprite />
    </div>
    {widgetsFor("groupes").map((groupe, index) => {
      return (
        <GroupeTemplate
          index={index}
          group={{
            commune: groupe.getIn(["data", "commune"]),
            departement: groupe.getIn(["data", "departement"]),
            correspondant: groupe.getIn(["data", "correspondant"]),
            genre: groupe.getIn(["data", "genre"]),
            email: groupe.getIn(["data", "email"]),
            facebook: groupe.getIn(["data", "facebook"]),
            twitter: groupe.getIn(["data", "twitter"]),
            instagram: groupe.getIn(["data", "instagram"]),
            youtube: groupe.getIn(["data", "youtube"]),
            newsletter: groupe.getIn(["data", "newsletter"]),
          }}
        />
      )
    })}
  </div>
)

GroupePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetsFor: PropTypes.func,
}

export default GroupePreview
