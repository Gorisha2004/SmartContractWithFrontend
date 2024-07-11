// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//import "hardhat/console.sol";

contract Assessment {
    address payable public owner;
    uint256 public balance;
    uint256 public lastTransactionTimestamp;
    uint256 public minimumBalance;

    event Deposit(uint256 amount);
    event Withdraw(uint256 amount);
    event MinimumBalanceSet(uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner of this account");
        _;
    }

    constructor(uint initBalance) payable {
        owner = payable(msg.sender);
        balance = initBalance;
        lastTransactionTimestamp = block.timestamp;
        minimumBalance = 0;
    }

    function getBalance() public view returns(uint256){
        return balance;
    }

    function getOwner() public view returns(address) {
        return owner;
    }

    function getLastTransactionTimestamp() public view returns(uint256) {
        return lastTransactionTimestamp;
    }

    function setMinimumBalance(uint256 _minimumBalance) public onlyOwner {
        minimumBalance = _minimumBalance;
        emit MinimumBalanceSet(_minimumBalance);
    }


    function deposit(uint256 _amount) public payable {
        uint _previousBalance = balance;

        // make sure this is the owner
        require(msg.sender == owner, "You are not the owner of this account");

        // perform transaction
        balance += _amount;

        // assert transaction completed successfully
        assert(balance == _previousBalance + _amount);

        // emit the event
        emit Deposit(_amount);
    }

    // custom error
    error InsufficientBalance(uint256 balance, uint256 withdrawAmount);

    function withdraw(uint256 _withdrawAmount) public {
        require(msg.sender == owner, "You are not the owner of this account");
        uint _previousBalance = balance;
        if (balance < _withdrawAmount) {
            revert InsufficientBalance({
                balance: balance,
                withdrawAmount: _withdrawAmount
            });
        }

        // withdraw the given amount
        balance -= _withdrawAmount;

        // assert the balance is correct
        assert(balance == (_previousBalance - _withdrawAmount));

        // emit the event
        emit Withdraw(_withdrawAmount);
    }

}
