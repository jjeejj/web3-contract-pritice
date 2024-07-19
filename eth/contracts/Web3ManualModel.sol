// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.24;

contract Web3ManualModel {
    function resolveMode() external pure returns (bytes32) {
        return "manual";
    }

    fallback(bytes calldata cdata) external returns (bytes memory) {
      return abi.encode("Hello, World!");
    }
}
