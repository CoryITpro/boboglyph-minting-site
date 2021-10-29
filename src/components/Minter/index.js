import { useState, useEffect } from "react"
import { calculateTimeLeft } from "helpers/timer"
import "./style.scss"

const Minter = ({
  mintLoading,
  mintTotal,
  mintInputValue,
  increaseMintValue,
  decreaseMintValue,
  walletAddress,
  onConnectWalletHandler,
  onMintHandler,
}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  return (
    <div className="minter flex">
      <div className="minter-wrapper container">
        <div className="minter-title">
          <span>How does the mint work?</span>
          <p>
            You need to connect metamask with the website & click mint button
            after selecting the numbers you desire to mint.
          </p>
        </div>
        <div className="minter-mint">
          {(Object.keys(timeLeft).length != 0) === 0 ? (
            walletAddress === "" ? (
              <>
                <p>Please connect your wallet to start mint!</p>
                <div className="minter-mint-wrapper flex flex-column">
                  <button onClick={onConnectWalletHandler}>
                    CONNECT WALLET
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>Please select numbers of Boboglyph you want to mint.</p>
                <div className="minter-mint-wrapper flex flex-column">
                  <button>
                    {walletAddress.slice(0, 6) +
                      " ... " +
                      walletAddress.slice(38)}
                  </button>
                  <button>{mintTotal} ETH</button>
                  <div className="flex">
                    <span onClick={decreaseMintValue}>-</span>
                    <input
                      type="text"
                      value={mintInputValue}
                      onChange={() => {}}
                      readOnly
                    />
                    <span onClick={increaseMintValue}>+</span>
                  </div>
                  <button onClick={() => !mintLoading && onMintHandler()}>
                    {mintLoading ? "MINTING..." : "MINT"}
                  </button>
                </div>
              </>
            )
          ) : (
            <>
              <p>Public Sale will start in</p>
              <div className="minter-mint-clock">
                <div className="minter-mint-clock-timer flex flex-column">
                  <div className="flex">
                    <span>{timeLeft.days[0]}</span>
                    <span>{timeLeft.days[1]}</span>
                  </div>
                  <span>Days</span>
                </div>
                <div className="minter-mint-clock-timer flex flex-column">
                  <div className="flex">
                    <span>{timeLeft.hours[0]}</span>
                    <span>{timeLeft.hours[1]}</span>
                  </div>
                  <span>Hours</span>
                </div>
                <div className="minter-mint-clock-timer flex flex-column">
                  <div className="flex">
                    <span>{timeLeft.minutes[0]}</span>
                    <span>{timeLeft.minutes[1]}</span>
                  </div>
                  <span>Minutes</span>
                </div>
                <div className="minter-mint-clock-timer flex flex-column">
                  <div className="flex">
                    <span>{timeLeft.seconds[0]}</span>
                    <span>{timeLeft.seconds[1]}</span>
                  </div>
                  <span>Seconds</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Minter
