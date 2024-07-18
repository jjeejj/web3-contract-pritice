// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyTestToken is ERC20, Ownable {
   constructor(
    string memory name,
    string memory symbol,
    uint256 initialSupply
   ) ERC20(name, symbol) Ownable(msg.sender) {
    _mint(msg.sender, initialSupply);
   }

   function mint(address to, uint256 amount) public onlyOwner {
    _mint(to, amount);
   }

   function burn(address account, uint256 amount) public onlyOwner {
    _burn(account, amount);
   }
}
