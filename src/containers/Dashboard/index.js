import { useState, useEffect } from "react"
import { mintNFT } from "helpers/interact"
import { generateInitIds, getDiffArray } from "helpers"
import {
  getOccupiedIds,
  getPrice,
  getMaxSupply,
  getCurrentMaxSupply,
  getCurrentMaxMint,
} from "helpers/contract"
import DashboardComponent from "components/Dashboard"

const Dashboard = () => {
  const [mintLoading, setMintLoading] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const [maxMint, setMaxMint] = useState(0)
  const [maxSupply, setMaxSupply] = useState(0)
  const [maxCurrentSupply, setMaxCurrentSupply] = useState(0)

  const [mintInputValue, setMintInputValue] = useState(1)
  const [mintTotal, setMintTotal] = useState(null)
  const [newMint, setNewMint] = useState([])

  useEffect(() => {
    const initDatas = async () => {
      if (window.ethereum) {
        onConnectWalletHandler()
        onChangeWalletListener()
      }

      let mintMax = await getCurrentMaxMint()
      setMaxMint(mintMax)
      let supplyMax = await getMaxSupply()
      setMaxSupply(supplyMax)
      let currentSupplyMax = await getCurrentMaxSupply()
      setMaxCurrentSupply(currentSupplyMax)
    }

    initDatas()
  }, [])

  const calculatePrice = async () => {
    let price = await getPrice(mintInputValue)
    console.log(price)

    setMintTotal(price.toFixed(1))
  }

  const onConnectWalletHandler = async () => {
    const walletResponse = await connectWallet()

    setWalletAddress(walletResponse.address)
  }

  const onChangeWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length) {
          setWalletAddress(accounts[0])
        } else {
          setWalletAddress("")
        }
      })

      window.ethereum.on("chainChanged", (chainId) => {
        onConnectWalletHandler()
      })
    }
  }

  const increaseMintValue = () => {
    if (mintInputValue < maxMint) {
      setMintInputValue(mintInputValue + 1)
    }
  }
  const decreaseMintValue = () => {
    if (mintInputValue > 1) {
      setMintInputValue(mintInputValue - 1)
    }
  }

  const getRandomIds = async () => {
    let customIds = []
    const baseIds = generateInitIds()
    const occupied = await getOccupiedIds()
    const diffIds = getDiffArray(baseIds, occupied)

    while (customIds.length < mintInputValue) {
      const id = Math.floor(Math.random() * diffIds.length)
      const index = diffIds[id]
      customIds.push(index)
    }

    return customIds
  }

  const onMintHandler = async () => {
    if (!!walletAddress) {
      setMintLoading(true)
      const randomIds = await getRandomIds()

      const { success, status } = await mintNFT(
        walletAddress,
        setMintLoading,
        setNewMint,
        randomIds
      )
    }
  }

  return (
    <DashboardComponent
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
  )
}

export default Dashboard
