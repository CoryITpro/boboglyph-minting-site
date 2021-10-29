import "./style.scss"
import { Logomark } from "../../resources"

const Green = () => {

  return (
    <>
      <div className="green">
        <div className="green-container">
          <div className="green-box">
            <div className="green-mark-container">
              <img src={Logomark} />
            </div>
            <div className="green-quote-container">
              <h2><b>Each Bobo-Glyph NFT features a minimum of 9 MILLION possible combinations of traits. </b><em><b>Let your short attention span run wild.</b></em></h2>
            </div>
          </div>
        </div>
      </div>
      <div className="green-divider"></div>
    </>
  )
}

export default Green