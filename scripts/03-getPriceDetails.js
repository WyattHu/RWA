const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
  const { deployer } = await getNamedAccounts()
  const RealEstateToken = await ethers.getContract("RealEstateToken", deployer)
  console.log(`Got contract RealEstateToken at ${RealEstateToken.target}`)
  console.log("getPriceDetails...")
  const transactionResponse = await RealEstateToken.getPriceDetails(0)
  console.log(transactionResponse)
  // await transactionResponse.wait()
  console.log("getPriceDetails finished!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })