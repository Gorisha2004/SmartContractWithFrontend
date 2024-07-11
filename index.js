import { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [lastTransactionTimestamp, setLastTransactionTimestamp] = useState(undefined);
  const [minimumBalance, setMinimumBalance] = useState(undefined);
  const [owner, setOwner] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(account);
    }
  };

  const handleAccount = (account) => {
    if (account) {
      console.log("Account connected: ", account);
      setAccount(account);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);

    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
  };

  const getBalance = async () => {
    if (atm) {
      setBalance((await atm.getBalance()).toNumber());
    }
  };

  const getLastTransactionTimestamp = async () => {
    if (atm) {
      setLastTransactionTimestamp((await atm.getLastTransactionTimestamp()).toNumber());
    }
  };

  const getMinimumBalance = async () => {
    if (atm) {
      setMinimumBalance((await atm.minimumBalance()).toNumber());
    }
  };

  const getOwner = async () => {
    if (atm) {
      setOwner(await atm.getOwner());
    }
  };

  const deposit = async () => {
    if (atm) {
      let tx = await atm.deposit(1);
      await tx.wait();
      getBalance();
      getLastTransactionTimestamp();
    }
  };

  const withdraw = async () => {
    if (atm) {
      let tx = await atm.withdraw(1);
      await tx.wait();
      getBalance();
      getLastTransactionTimestamp();
    }
  };

  const setMinBalance = async () => {
    if (atm) {
      const amount = parseInt(prompt("Enter minimum balance:"), 10);
      try {
        let tx = await atm.setMinimumBalance(amount);
        await tx.wait();
        getMinimumBalance();
      } catch (error) {
        console.error("Error setting minimum balance:", error);
      }
    }
  };

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>;
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>;
    }

    if (balance === undefined) {
      getBalance();
    }

    if (lastTransactionTimestamp === undefined) {
      getLastTransactionTimestamp();
    }

    if (minimumBalance === undefined) {
      getMinimumBalance();
    }

    if (owner === undefined) {
      getOwner();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Your Balance: {balance}</p>
        <p>Last Transaction Timestamp: {lastTransactionTimestamp}</p>
        <p>Minimum Balance: {minimumBalance}</p>
        <p>Owner: {owner}</p>
        <button onClick={deposit}>Deposit 1 ETH</button>
        <button onClick={withdraw}>Withdraw 1 ETH</button>
        <button onClick={setMinBalance}>Set Minimum Balance</button>
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header>
        <h1>Welcome to the Metacrafters ATM!</h1>
      </header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
          background-color: orange;
          color: white;
        }
      `}</style>
    </main>
  );
}
