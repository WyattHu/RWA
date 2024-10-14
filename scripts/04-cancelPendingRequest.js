const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
  const { deployer } = await getNamedAccounts()
  const Issuer = await ethers.getContract("Issuer", deployer)
  console.log(`Got contract Issuer at ${Issuer.target}`)
  console.log("cancelPendingRequest...")
  const transactionResponse = await Issuer.cancelPendingRequest()
  await transactionResponse.wait()
  console.log("cancelPendingRequest finished!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })