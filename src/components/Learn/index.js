import { CircleSwish, VoteChart } from "resources/index"
import "./style.scss"

const Learn = () => (
  <div className="learn flex">
    <div className="learn-wrapper container">
      <div className="learn-title">
        <img src={CircleSwish} alt="circle swish" loading="lazy" />
        <span>How does being an Association member work?</span>
        <p>
          You need to connect metamask with the website & click mint button
          after selecting the numbers you desire to mint.
        </p>
      </div>
      <div className="learn-strategy flex flex-column">
        <p>Higher number of mints in your wallet grants higher voting power.</p>
        <img src={VoteChart} alt="chart" loading="lazy" />
      </div>
    </div>
  </div>
)

export default Learn
