import { FaTwitter, FaDiscord } from "react-icons/fa"
import { RedAAoC } from "resources"
import "./style.scss"

const Footer = () => (
  <div className="footer flex">
    <div className="footer-wrapper container flex flex-column">
      <img src={RedAAoC} alt="red" loading="lazy" />
      <div className="footer-socials flex">
        <a
          className="flex"
          href="https://twitter.com/archaelogyassoc"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          className="flex"
          href="https://discord.gg/sXjENcZm54"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord />
        </a>
      </div>
      <p>Home of the Authenticated BOBOGLYPH</p>
    </div>
  </div>
)

export default Footer
