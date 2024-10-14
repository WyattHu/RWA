const { network, ethers } = require("hardhat");
const { verify } = require("../utility/verify");
require("dotenv").config();
const {
  networkconfig,
  developmentChains,
} = require("../hardhat-config-helper");

const ccipRouterAddress = "0xF694E193200268f9a4868e4Aa017A0118C9a8177";
const linkTokenAddress = "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846";
const currentChainSelector = "14767482510784806043";
const functionsRouterAddress = "0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0";
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  let RealEstateToken;

  if (chainId == 0) {
    log("Deploying RealEstateToken ...");
    RealEstateToken = await deploy("RealEstateToken", {
      contract: "RealEstateToken",
      from: deployer,
      log: true,
      args: [
        "",
        ccipRouterAddress,
        linkTokenAddress,
        currentChainSelector,
        functionsRouterAddress,
      ],
      waitConfirmations: network.config.blockConfirmations || 1,
    });
    log("Deployed!");
    log("------------------------------------------------");
    log(`RealEstateToken deployed at ${RealEstateToken.address}`);
  }
};
