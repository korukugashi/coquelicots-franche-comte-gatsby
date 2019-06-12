import React from "react"
import PropTypes from "prop-types"
import { AssociationTemplate } from "../../components/associations"
import { CommercantTemplate } from "../../components/commercants"
import { MairieTemplate } from "../../components/mairies"
import { ReactComponent as IconsSprite } from "../../images/icons-sprite.svg"

const SoutienPreview = ({ entry, widgetsFor, getAsset }) => (
  <div id="nos-soutiens">
    <div className="is-hidden">
      <IconsSprite />
    </div>
    <div>
      <section className="section" id="associations">
      <h2>Associations</h2>
        <div className="columns is-multiline is-centered">
          {widgetsFor("associations").map((soutien, index) => {
            return (
              <AssociationTemplate
                index={index}
                organism={{
                  title: soutien.getIn(["data", "title"]),
                  link: soutien.getIn(["data", "link"]),
                  logo: getAsset(soutien.getIn(["data", "logo"])),
                }}
              />
            )
          })}
        </div>
      </section>
      <section className="section" id="mairies">
        <h2>Mairies</h2>
        <div className="columns is-multiline has-text-centered">
          {widgetsFor("mairies").map((soutien, index) => {
            return (
              <MairieTemplate
                index={index}
                organism={{
                  title: soutien.getIn(["data", "title"]),
                  link: soutien.getIn(["data", "link"]),
                }}
              />
            )
          })}
        </div>
      </section>
      <section className="section" id="commercants">
        <h2>Commercants</h2>
        <div className="columns is-multiline has-text-centered">
          {widgetsFor("commercants").map((soutien, index) => {
            return (
              <CommercantTemplate
                index={index}
                organism={{
                  title: soutien.getIn(["data", "title"]),
                  link: soutien.getIn(["data", "link"]),
                }}
              />
            )
          })}
        </div>
      </section>
    </div>
  </div>
)

SoutienPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetsFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default SoutienPreview
