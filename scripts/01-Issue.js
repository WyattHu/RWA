const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
  const { deployer } = await getNamedAccounts()
  const Issuer = await ethers.getContract("Issuer", deployer)
  console.log(`Got contract Issuer at ${Issuer.target}`)
  console.log("Issue...")
  const transactionResponse = await Issuer.issue("0x843F0F7BBF1da45651f6f302162f4B0d04B996CB",20,13444,300000,"0x66756e2d6176616c616e6368652d66756a692d31000000000000000000000000")
  await transactionResponse.wait()
  console.log("Issue finished!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
