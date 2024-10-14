require("hardhat-deploy");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("@nomicfoundation/hardhat-ethers");
require("hardhat-deploy-ethers");
require("solidity-coverage");
require("@nomicfoundation/hardhat-chai-matchers");

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const BASE_SEPOLIA_RPC_URL = process.env.BASE_SEPOLIA_RPC_URL;
const FUJI_RPC_URL = process.env.FUJI_RPC_URL;
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1;
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2;
const PRIVATE_KEY3 = process.env.PRIVATE_KEY3;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200, // 可以尝试增加到更高的数值
          },
        },
      },
    ],
    evmVersion: "paris", // 指定EVM版本
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY1, PRIVATE_KEY2, PRIVATE_KEY3],
      chainId: 11155111,
      blockConfirmations: 2,
    },
    basesepolia: {
      url: BASE_SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY1, PRIVATE_KEY2, PRIVATE_KEY3],
      chainId: 84532,
      blockConfirmations: 2,
    },
    fuji: {
      url: FUJI_RPC_URL,
      accounts: [PRIVATE_KEY1, PRIVATE_KEY2, PRIVATE_KEY3],
      chainId: 43113,
      blockConfirmations: 2,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      11155111: 0,
      84532: 0,
      43113: 0,
    },
    user1: {
      default: 1,
      11155111: 1,
      84532: 1,
      43113: 1,
    },
    user2: {
      default: 2,
      11155111: 2,
      84532: 2,
      43113: 2,
    },
    user3: {
      default: 3,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
