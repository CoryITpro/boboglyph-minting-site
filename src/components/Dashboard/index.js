import Header from "components/Header"
import Green from "components/Green"
import Learn from "components/Learn"
import Minter from "components/Minter"
import Footer from "components/Footer"
import Membership from "components/Membership"
import Advise from "components/Advise"
import Roadmap from "components/Roadmap"

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
    <Membership />
    <Learn />
    <Advise />
    <Roadmap />
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
