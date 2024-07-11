# A Smart Contract With FrontEnd <br />
# Description<br />
This project showcases a simple decentralized application (dApp) built with Solidity and React. The Solidity smart contract manages account balances, allowing users to deposit, withdraw, set minimum balance, and get last transaction timestamp. The React frontend enables users to interact with the smart contract through a user-friendly interface, connecting to the Ethereum blockchain via MetaMask.<br />
<br />
**Technologies used**<br />
-> React: Frontend framework for building user interfaces.<br />
-> Ethers.js: Ethereum JavaScript library for interacting with Ethereum nodes.<br />
-> MetaMask: Ethereum wallet browser extension for interacting with the Ethereum blockchain.<br />
-> Solidity: Smart contract programming language used for writing Ethereum smart contracts.<br />

**Functions**<br />
--> deposit()- used to increase the balance amount by 1<br />
--> withdraw()- used to decrease the balance amount by 1<br />
--> setMinimumBalance()- used to set the minimum balance we want<br /> 
--> getLastTranscationTimestamp()- used to get the timestamp of last transaction<br />
--> getBalance()- Fetches and displays the current ETH balance of the connected account from the smart contract.<br />
--> getWallet()- Initializes the MetaMask wallet connection if available<br />
<br />

# Getting Started<br />
**Installing**<br />
1. Clone the repository:
   ```
   https://github.com/Gorisha2004/SmartContractWithFrontend.git

   ```
# Executing Program<br />

After cloning the github, you will want to do the following to get the code running on your computer.<br />

1. Inside the project directory, in the terminal type:<br />
   ```
   npm i
   ```
3. Open two additional terminals in your VS code<br />
4. In the second terminal type:
   ```
   npx hardhat node
   ```
6. In the third terminal, type:
   ```
   npx hardhat run --network localhost scripts/deploy.js
   ```
8. Back in the first terminal, type the following command to launch the front-end:
   ```
   npm run dev
   ```
<br />
After this, the project will be running on your localhost. <br />
Typically at [http://localhost:3000/](http://localhost:3000/) <br />

# Help<br />
If you encounter any issues, ensure that:<br />

1. MetaMask is installed and configured correctly.<br />
2. Your MetaMask wallet is connected to the local Ethereum network.<br />
3. The contract address in index.js matches the deployed contract address.<br />
For additional help, you can use the following command to see more options:<br />
   ```
   npx hardhat help
   ```
<br />
For complete code files and further details, refer to the [SCM-Starter](https://github.com/MetacrafterChris/SCM-Starter/tree/main) repository. This repository provides additional context and resources related to setting up similar projects.


