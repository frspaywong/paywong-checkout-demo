export const USDPFaucetABI = [
  {
    inputs: [
      {internalType: 'address', name: '_USDPAddress', type: 'address'},
      {internalType: 'address', name: '_ownerAddress', type: 'address'},
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'send',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint256', name: '_amount', type: 'uint256'}],
    name: 'setFaucetDripAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: '_tokenAddr', type: 'address'}],
    name: 'setTokenAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'address', name: '_receiver', type: 'address'},
      {internalType: 'uint256', name: '_amount', type: 'uint256'},
    ],
    name: 'withdrawTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
