(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f708f114"],{5459:function(e,t,n){"use strict";n("e8d6")},7431:function(e,t,n){"use strict";n.r(t);var i={directives:{},data:function(){return{timer:"",toast:"",iswarning:!1,hecotest:"0x100",hecomain:"0x80",BSCtestnet:"0x61",BSCmainnet:"0x38",informshow:!0}},computed:{},mounted:function(){var e=this;ethereum.on("chainChanged",function(t){t!=e.BSCtestnet?e.iswarning=!0:e.iswarning=!1,e.reload()}),ethereum.request({method:"eth_chainId"}).then(function(t){t!=e.BSCtestnet?e.iswarning=!0:e.iswarning=!1})},methods:{InformShow:function(){this.informshow=!this.informshow},addhecotest:function(){var e=[{chainId:this.hecotest,chainName:"heco-testnet",rpcUrls:["https://http-testnet.hecochain.com"],nativeCurrency:{name:"HT",symbol:"HT",decimals:18},blockExplorerUrls:["https://testnet.hecoinfo.com"]}];window.ethereum.sendAsync({method:"wallet_addEthereumChain",params:e},function(e,t){if(e)return!1})},addhecomain:function(){var e=[{chainId:this.hecomain,chainName:"heco-mainnet",rpcUrls:["https://http-mainnet-node.huobichain.com"],nativeCurrency:{name:"HT",symbol:"HT",decimals:18},blockExplorerUrls:["https://hecoinfo.com"]}];window.ethereum.sendAsync({method:"wallet_addEthereumChain",params:e},function(e,t){if(e)return!1})},addBSCtestnet:function(){var e=[{chainId:this.BSCtestnet,chainName:"BSC-testnet",rpcUrls:["https://data-seed-prebsc-1-s1.binance.org:8545/"],nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},blockExplorerUrls:["https://testnet.bscscan.com"]}];window.ethereum.sendAsync({method:"wallet_addEthereumChain",params:e},function(e,t){if(e)return!1})},addBSCmainnet:function(){var e=[{chainId:this.BSCmainnet,chainName:"BSC-mainnet",rpcUrls:["https://bsc-dataseed.binance.org/"],nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},blockExplorerUrls:["https://bscscan.com"]}];window.ethereum.sendAsync({method:"wallet_addEthereumChain",params:e},function(e,t){if(e)return!1})}},beforeDestroy:function(){clearTimeout(this.timer),this.timer=null}},a=(n("5459"),n("2877")),s=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[e.$route.meta.keepAlive?n("keep-alive",[n("router-view")],1):n("router-view")],1)},[],!1,null,"506626d9",null);t.default=s.exports},e8d6:function(e,t,n){}}]);