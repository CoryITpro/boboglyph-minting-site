import { RedAAoC } from "resources"
import "./style.scss"

const Footer = () => (
  <div className="footer flex">
    <div className="footer-wrapper container flex flex-column">
      <img src={RedAAoC} alt="red" loading="lazy" />
      <p>Home of the Authenticated BOBOGLYPH</p>
    </div>
  </div>
)

export default Footer
