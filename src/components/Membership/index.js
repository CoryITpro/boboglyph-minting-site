import "./style.scss"
import { Bobo5 } from "resources"
const Membership = () => {
  return (
    <div className="member flex">
      <div className="member-wrapper container">
        <div className="member-left-container">
          <div className="brown-heading">
            <h3>
              The Bobo-Glyphs draw from an ancient power to determine where the
              wealth is going. Use the past to find the future.
            </h3>
          </div>
          <div className="member-left-down-container">
            <p>
              Holders who mint at least one Bobo-Glyph NFT in their wallet will
              become Association members. Members gain premier / early access to
              new collections.
            </p>
            <p>Association membership also entitles you to:</p>
            <ul>
              <li aria-level="1">
                <b>Vote on the next collection and future of the project.</b>
              </li>
            </ul>
            <ul>
              <li aria-level="1">
                <b>Be a member on our board of trustees.</b>
              </li>
            </ul>
            <ul>
              <li aria-level="1">
                <b>Vote and bid on OWNING AAoC episodes.</b>
              </li>
            </ul>
            <ul>
              <li aria-level="1">
                <b>Members-only Q&amp;A and so much more.</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="member-right-container">
          <div className="img-well">
            <img src={Bobo5} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Membership
