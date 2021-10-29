import "./style.scss"
import { GreenAAoC } from "../../resources"

const Advise = () => {
  return (
    <div className="advise">
      <div className="container">
        <div className="advise-left">
          <img src={GreenAAoC} />
        </div>
        <div className="advise-right">
          <h2><b>Check out all the cool sh*t we have planned at the Archaeology Association of Cryptos.</b></h2>
          <p><span>The AAOC will be excavating two separate collections with the possibility of a third. Each new collection will be decided on by community vote after the previous collection has passed the 50% sale mark. </span></p>
        </div>
      </div>
    </div>
  )
}

export default Advise