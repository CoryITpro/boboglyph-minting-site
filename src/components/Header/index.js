import "./style.scss"
import { RedAAoC, Bobo1, Bobo2, Bobo3, Bobo4, Bobo5, Bobo6, Bobo7, Bobo8, Bobo9 } from "../../resources"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoPlay: true
  }

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-up-img-container">
          <img src={RedAAoC} alt="red-img" className="header-red-img" />
        </div>
        <div className="header-down-img-container">
          <div className="header-slick-container">
            <Slider {...settings}>
              <div>
                <img src={Bobo1} />
              </div>
              <div>
                <img src={Bobo2} />
              </div>
              <div>
                <img src={Bobo3} />
              </div>
              <div>
                <img src={Bobo4} />
              </div>
              <div>
                <img src={Bobo5} />
              </div>
              <div>
                <img src={Bobo6} />
              </div>
              <div>
                <img src={Bobo7} />
              </div>
              <div>
                <img src={Bobo8} />
              </div>
              <div>
                <img src={Bobo9} />
              </div>
            </Slider>
          </div>
          <div className="header-quote-container">
            <h1>
              These are REAL (digital) artifacts.
            </h1>
            <h3>
              I don’t know how many times I gotta keep telling you, but this is it.&nbsp;
            </h3>
            <p>
              The AAoC is dedicated to finding and minting the RAREST and most valuable digital artifacts on the Web.&nbsp;
            </p>
            <p>
              This is a super limited, <em>exclusive</em> collection of <em><strong>only</strong></em> <strong>1125</strong> Bobo-Glyph NFTs.
              Each one is full of authentic digital imperfections, erosion, and centuries of internet update damage.&nbsp;&nbsp;
            </p>
            <p>
              These are NOT another generative animal cash grab.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header