const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
  const { deployer } = await getNamedAccounts()
  const RealEstateToken = await ethers.getContract("RealEstateToken", deployer)
  console.log(`Got contract RealEstateToken at ${RealEstateToken.target}`)
  console.log("setAutomationForwarder...")
  const transactionResponse = await RealEstateToken.setAutomationForwarder("0x7F411444e6dE0ECECf186aa4659f4A9D08FA8552")
  await transactionResponse.wait()
  console.log("setAutomationForwarder finished!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })