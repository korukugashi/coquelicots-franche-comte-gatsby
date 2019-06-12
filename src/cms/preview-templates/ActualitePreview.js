import React from "react"
import PropTypes from "prop-types"
import { ActualiteTemplate } from "../../components/news"

const ActualitePreview = ({ entry, widgetFor, widgetsFor, getAsset }) => (
  <div id="actualite">
    <ActualiteTemplate
      title={entry.getIn(["data", "title"])}
      date={entry.getIn(["data", "date"]).toLocaleDateString()}
      content={widgetFor("body")}
      photos={widgetsFor("photos").map(photo => ({
        image: getAsset(photo.getIn(['data', 'image'])),
        description: photo.getIn(['data', 'description'])
      }))}
    />
  </div>
)

ActualitePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  widgetsFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default ActualitePreview
