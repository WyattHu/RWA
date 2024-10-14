const { network, ethers } = require("hardhat");
const { verify } = require("../utility/verify");
require("dotenv").config();
const {
  networkconfig,
  developmentChains,
} = require("../hardhat-config-helper");

const RealEstateTokenAddress = "0xdE1f118252298C7e364143173AFB99539c4896b7";
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  let EnglishAuction;

  if (chainId == 43113) {
    log("Deploying EnglishAuction ...");
    EnglishAuction = await deploy("EnglishAuction", {
      contract: "EnglishAuction",
      from: deployer,
      log: true,
      args: [RealEstateTokenAddress],
      waitConfirmations: network.config.blockConfirmations || 1,
    });
    log("Deployed!");
    log("------------------------------------------------");
    log(`EnglishAuction deployed at ${EnglishAuction.address}`);
  }
};
