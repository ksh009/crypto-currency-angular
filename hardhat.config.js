require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;

const config = {
  networks: {
    hardhat: {
      chainId: 11155111,
    },
    testnet: {
      url: "https://sepolia.infura.io/v3/",
      accounts: [privateKey],
    },
    // mainnet: {
    //   url: "https://polygon-rpc.com",
    //   accounts: [privateKey],
    // },
  },
  solidity: "0.8.18",
};

module.exports = { config };

/*
REF: https://github.com/pguso/angular-hardhat-starter-dapp/blob/main/tsconfig.json
*/
