import "./style.scss"
import { Logomark } from "../../resources"

const Green = () => {
  return (
    <>
      <div className="green flex">
        <div className="green-wrapper container flex">
          <div className="green-mark">
            <img src={Logomark} />
          </div>
          <div className="green-quote flex">
            <div>
              <b>
                Each Bobo-Glyph NFT features a minimum of 9 MILLION possible
                combinations of traits.{" "}
              </b>
              <em>
                <b>Let your short attention span run wild.</b>
              </em>
            </div>
          </div>
        </div>
      </div>
      <div className="green-divider"></div>
    </>
  )
}

export default Green
