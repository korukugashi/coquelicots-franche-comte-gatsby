import React from "react"
import PropTypes from "prop-types"
import { PartenaireTemplate } from "../../components/partenaires"

const PartenairePreview = ({ entry, widgetFor }) => (
  <section className="section">
    <PartenaireTemplate
      title={entry.getIn(["data", "title"])}
      content={widgetFor("body")}
    />
  </section>
)

PartenairePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default PartenairePreview
