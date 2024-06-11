import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@nomicfoundation/hardhat-ethers';

// Enter your Private Key here
const PRIVATE_KEY = ''; 

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    localhost: {
      url: 'localhost:8545',
    },
    l1xTestnet: {
      url: 'https://v2-testnet-rpc.l1x.foundation/',
      accounts: [PRIVATE_KEY], 
    },
  },
};

export default config;
