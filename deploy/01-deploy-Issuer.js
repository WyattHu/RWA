const { network, ethers } = require("hardhat");
const { verify } = require("../utility/verify");
require("dotenv").config();
const {
  networkconfig,
  developmentChains,
} = require("../hardhat-config-helper");

const RealEstateTokenAddress = "0xdE1f118252298C7e364143173AFB99539c4896b7";
const functionsRouterAddress = "0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0";
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  let Issuer;

  if (chainId == 0) {
    log("Deploying Issuer ...");
    Issuer = await deploy("Issuer", {
      contract: "Issuer",
      from: deployer,
      log: true,
      args: [
        RealEstateTokenAddress,
        functionsRouterAddress,
      ],
      waitConfirmations: network.config.blockConfirmations || 1,
    });
    log("Deployed!");
    log("------------------------------------------------");
    log(`Issuer deployed at ${Issuer.address}`);
  }
};
