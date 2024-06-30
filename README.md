**Description**
In this program we have connected our smart contract to the frontend. It allows users to connect their MetaMask wallet, check their account balance, deposit and withdraw Ether (ETH) from a smart contract deployed on the Ethereum network.

**Technologies used**
-> React: Frontend framework for building user interfaces.
-> Ethers.js: Ethereum JavaScript library for interacting with Ethereum nodes.
-> MetaMask: Ethereum wallet browser extension for interacting with the Ethereum blockchain.
-> Solidity: Smart contract programming language used for writing Ethereum smart contracts.

**Functions**
--> deposit()- used to increase the balance amount by 1
--> withdraw()- used to decrease the balance amount by 1
--> increaseBalance()- used to increase the balance amount by the amount we want 
--> decreaseBalance()- used to decrease the balance amount by the amount we want
--> getBalance()- Fetches and displays the current ETH balance of the connected account from the smart contract.

# Starter Next/Hardhat Project

After cloning the github, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.

After this, the project will be running on your localhost. 
Typically at http://localhost:3000/
