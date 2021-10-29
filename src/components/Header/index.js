import "./style.scss"
import { RedAAoC } from "../../resources"

const Header = () => {

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-up-img-continaer">
          <img src={RedAAoC} alt="red-img" className="header-red-img" />
        </div>
      </div>
    </div>
  )
}
export default Header