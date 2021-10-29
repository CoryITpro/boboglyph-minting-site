import { CircleSwish, VoteChart } from "resources/index"
import "./style.scss"

const Learn = () => (
  <div className="learn flex">
    <div className="learn-wrapper container">
      <div className="learn-title">
        <img src={CircleSwish} alt="circle swish" loading="lazy" />
        <span>How does being an Association member work?</span>
        <p>
          There will be a standard voting system on how we will market the
          project(s) and the AAoC executive team will always have the final say
          when decisions are made.
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
