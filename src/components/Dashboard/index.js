import Minter from "components/Minter"

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
  <>
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
  </>
)

export default Dashboard
