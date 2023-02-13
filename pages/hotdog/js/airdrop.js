function  airdropabi() {
    return [
        {
         "constant": false,
         "inputs": [
          {
           "name": "_recipients",
           "type": "address[]"
          },
          {
           "name": "_values",
           "type": "uint256"
          },
          {
           "name": "_tokenAddress",
           "type": "address"
          }
         ],
         "name": "AirTransfer",
         "outputs": [
          {
           "name": "",
           "type": "bool"
          }
         ],
         "payable": false,
         "stateMutability": "nonpayable",
         "type": "function"
        },
        {
         "constant": false,
         "inputs": [
          {
           "name": "_tokenAddress",
           "type": "address"
          }
         ],
         "name": "kongtou",
         "outputs": [
          {
           "name": "",
           "type": "bool"
          }
         ],
         "payable": false,
         "stateMutability": "nonpayable",
         "type": "function"
        },
        {
         "constant": false,
         "inputs": [
          {
           "name": "_value",
           "type": "uint256"
          }
         ],
         "name": "setMaKongtouAmount",
         "outputs": [
          {
           "name": "",
           "type": "bool"
          }
         ],
         "payable": false,
         "stateMutability": "nonpayable",
         "type": "function"
        },
        {
         "constant": false,
         "inputs": [
          {
           "name": "tokenAddress",
           "type": "address"
          }
         ],
         "name": "setMaxWei",
         "outputs": [
          {
           "name": "",
           "type": "bool"
          }
         ],
         "payable": false,
         "stateMutability": "nonpayable",
         "type": "function"
        },
        {
         "constant": false,
         "inputs": [
          {
           "name": "_value",
           "type": "uint256"
          }
         ],
         "name": "setMinTokenAmount",
         "outputs": [
          {
           "name": "",
           "type": "bool"
          }
         ],
         "payable": false,
         "stateMutability": "nonpayable",
         "type": "function"
        },
        {
         "inputs": [
          {
           "name": "_tokenAddress",
           "type": "address"
          }
         ],
         "payable": false,
         "stateMutability": "nonpayable",
         "type": "constructor"
        },
        {
         "constant": false,
         "inputs": [
          {
           "name": "_tokenAddress",
           "type": "address"
          }
         ],
         "name": "withdrawalToken",
         "outputs": [],
         "payable": false,
         "stateMutability": "nonpayable",
         "type": "function"
        },
        {
         "constant": true,
         "inputs": [],
         "name": "_tokenaddress",
         "outputs": [
          {
           "name": "",
           "type": "address"
          }
         ],
         "payable": false,
         "stateMutability": "view",
         "type": "function"
        },
        {
         "constant": true,
         "inputs": [],
         "name": "getBalance",
         "outputs": [
          {
           "name": "",
           "type": "uint256"
          }
         ],
         "payable": false,
         "stateMutability": "view",
         "type": "function"
        },
        {
         "constant": true,
         "inputs": [],
         "name": "getMinTokenAmount",
         "outputs": [
          {
           "name": "",
           "type": "uint256"
          }
         ],
         "payable": false,
         "stateMutability": "view",
         "type": "function"
        },
        {
         "constant": true,
         "inputs": [],
         "name": "getTokenAddress",
         "outputs": [
          {
           "name": "",
           "type": "address"
          }
         ],
         "payable": false,
         "stateMutability": "view",
         "type": "function"
        },
        {
         "constant": true,
         "inputs": [],
         "name": "iskongtou",
         "outputs": [
          {
           "name": "",
           "type": "bool"
          }
         ],
         "payable": false,
         "stateMutability": "view",
         "type": "function"
        },
        {
         "constant": true,
         "inputs": [],
         "name": "kongtouAmount",
         "outputs": [
          {
           "name": "",
           "type": "uint256"
          }
         ],
         "payable": false,
         "stateMutability": "view",
         "type": "function"
        },
        {
         "constant": true,
         "inputs": [],
         "name": "maxKongtouAmount",
         "outputs": [
          {
           "name": "",
           "type": "uint256"
          }
         ],
         "payable": false,
         "stateMutability": "view",
         "type": "function"
        },
        {
         "constant": true,
         "inputs": [],
         "name": "minTokenAmount",
         "outputs": [
          {
           "name": "",
           "type": "uint256"
          }
         ],
         "payable": false,
         "stateMutability": "view",
         "type": "function"
        },
        {
         "constant": true,
         "inputs": [],
         "name": "owner",
         "outputs": [
          {
           "name": "",
           "type": "address"
          }
         ],
         "payable": false,
         "stateMutability": "view",
         "type": "function"
        },
        {
         "constant": true,
         "inputs": [],
         "name": "surplusKongtouAmount",
         "outputs": [
          {
           "name": "",
           "type": "uint256"
          }
         ],
         "payable": false,
         "stateMutability": "view",
         "type": "function"
        }
       ]
}
// 空投合约地址
function airdropaddr(){
    // return '0xe6d98f77E30a65F05b1489b6E6b76D8F2c254699'
    return '0x684eAb9E871459bB5C5A5BF14eF14f215C9EB9F0'
}
// hotdog代币合约地址
function airdrophotdogaddr(){
    // return '0xD5e7bafD33Cad13a848d37f2fEF20C8761e4383F'
    return '0x82248D8AAaAA115AFfF29A7046Dbb8bFCe25141e'
}