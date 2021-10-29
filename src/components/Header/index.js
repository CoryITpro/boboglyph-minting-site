import "./style.scss"
import RedImg from "../../images/red-web.png"

const Header = () => {

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-up-img-continaer">
          <img src={RedImg} alt="red-img" />
        </div>
      </div>
    </div>
  )
}
export default Header