import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@nomicfoundation/hardhat-ethers';

// Enter your Private Key here
const PRIVATE_KEY = 'f3943d3f9935d780467ff31b5e5a68a7e2adf9d5743dcc10286c7b4212bd7290'; 

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
