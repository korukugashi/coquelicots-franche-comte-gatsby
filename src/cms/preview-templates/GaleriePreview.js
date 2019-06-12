import React from "react"
import PropTypes from "prop-types"

const GaleriePreview = ({ entry, getAsset }) => (
  <div>
    <img
      src={getAsset(entry.getIn(["data", "image"]))}
      alt={entry.getIn(["data", "title"])}
    />
    <p className="has-text-centered" style={{ marginTop: 50, color: "#555" }}>
      {entry.getIn(["data", "title"])}
    </p>
    <p className="has-text-centered">
      {entry.getIn(["data", "date"]).toLocaleDateString()}
    </p>
  </div>
)

GaleriePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default GaleriePreview
