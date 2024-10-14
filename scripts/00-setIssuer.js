const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
  const { deployer } = await getNamedAccounts()
  const RealEstateToken = await ethers.getContract("RealEstateToken", deployer)
  console.log(`Got contract RealEstateToken at ${RealEstateToken.target}`)
  console.log("setIssuer...")
  const transactionResponse = await RealEstateToken.setIssuer("0xd2294FaF2b25c4ee9FF762C67820bcDAe29BBeBa")
  await transactionResponse.wait()
  console.log("setIssuer finished!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })