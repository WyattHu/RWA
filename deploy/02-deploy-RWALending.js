const { network, ethers } = require("hardhat");
const { verify } = require("../utility/verify");
require("dotenv").config();
const {
  networkconfig,
  developmentChains,
} = require("../hardhat-config-helper");

const RealEstateTokenAddress = "0xdE1f118252298C7e364143173AFB99539c4896b7";
const usdc = "0x5425890298aed601595a70AB815c96711a31Bc65";
const usdcUsdAggregatorAddress = "0x97FE42a7E96640D932bbc0e1580c73E705A8EB73";
const usdcUsdFeedHeartbeat = 86400;
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  let RwaLending;

  if (chainId == 43113) {
    log("Deploying RwaLending ...");
    RwaLending = await deploy("RwaLending", {
      contract: "RwaLending",
      from: deployer,
      log: true,
      args: [
        RealEstateTokenAddress,
        usdc,
        usdcUsdAggregatorAddress,
        usdcUsdFeedHeartbeat,
      ],
      waitConfirmations: network.config.blockConfirmations || 1,
    });
    log("Deployed!");
    log("------------------------------------------------");
    log(`RwaLending deployed at ${RwaLending.address}`);
  }
};
