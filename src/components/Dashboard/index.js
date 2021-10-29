import Header from "components/Header"
import Green from "components/Green"
import Learn from "components/Learn"
import Minter from "components/Minter"
import Footer from "components/Footer"
import Membership from "components/Membership"

const Dashboard = ({
  mintLoading,
  mintTotal,
  mintInputValue,
  increaseMintValue,
  decreaseMintValue,
  walletAddress,
  onConnectWalletHandler,
  onMintHandler,
}) => (
  <>
    <Header />
    <Green />
    <Learn />
    <Membership />
    <Minter
      mintLoading={mintLoading}
      mintTotal={mintTotal}
      mintInputValue={mintInputValue}
      increaseMintValue={increaseMintValue}
      decreaseMintValue={decreaseMintValue}
      walletAddress={walletAddress}
      onConnectWalletHandler={onConnectWalletHandler}
      onMintHandler={onMintHandler}
    />
    <Footer />
  </>
)

export default Dashboard
