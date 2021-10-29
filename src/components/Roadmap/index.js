import "./style.scss"
import { RoadmapStep } from "resources"

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="container">
        <h1>THE ROADMAP</h1>
        <div className="roadmap-items">
          <div className="roadmap-item">
            <h3>1</h3>
            <img src={RoadmapStep} />
            <p>Physical Bobo-Glyph artifacts, like scrolls, slabs and pendants for sale. High quality materials and execution (The AAoC never handles any of your personal information. All profits from physical merchandise sales will be funneled into the community cash fund.)</p>
          </div>
          <div className="roadmap-item">
            <h3>2</h3>
            <img src={RoadmapStep} />
            <p>
              Exclusive giveaways of AAoC&nbsp; merchandise and ETH. Community suggested marketing strategies. (Details in <a href="https://discord.gg/sXjENcZm54" target="_blank" rel="noopener">discord</a>)&nbsp;
            </p>
          </div>
          <div className="roadmap-item">
            <h3>3</h3>
            <img src={RoadmapStep} />
            <p>Big plans to Expand the Archaeology Association universe through collaboration with famous music artists, animators and voice actors we have relationships with. Also collaborating with community artists and talents.</p>
          </div>
          <div className="roadmap-item">
            <h3>4</h3>
            <img src={RoadmapStep} />
            <p>If all collections sell out, Active Bobo-Glyph holders will be given an invite to the AAOC Vacation Excavation. We will organize a trip to a beautiful place to find more digital artifacts 😉 while enjoying fine accommodations. (Bobo-Glyph holders will vote on location.)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap