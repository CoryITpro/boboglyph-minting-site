import Minter from "components/Minter"
import "./style.scss"

const Dashboard = ({
  mintLoading,
  mintTotal,
  mintInputValue,
  increaseMintValue,
  decreaseMintValue,
  walletAddress,
  onConnectWalletHandler,
  onMintHandler,
  calculatePrice,
}) => (
  <div className="dashboard">
    <Minter
      mintLoading={mintLoading}
      mintTotal={mintTotal}
      mintInputValue={mintInputValue}
      increaseMintValue={increaseMintValue}
      decreaseMintValue={decreaseMintValue}
      walletAddress={walletAddress}
      onConnectWalletHandler={onConnectWalletHandler}
      onMintHandler={onMintHandler}
      calculatePrice={calculatePrice}
    />
  </div>
)

export default Dashboard
