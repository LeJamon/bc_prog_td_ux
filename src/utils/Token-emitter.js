const Web3 = require("web3");
const fs = require("fs");
const HDWalletProvider = require("@truffle/hdwallet-provider");

///// A remplir
const ERC721ContractAddress = "";
const infuraApiKey = "";
const privateKey = "";

let provider = new HDWalletProvider({
  privateKeys: [privateKey],
  providerOrUrl: `https://sepolia.infura.io/v3/${infuraApiKey}`,
});

var web3 = new Web3(provider);

async function signAllTokens() {
  console.log(provider.addresses[0]);

  let signaturesDictionnary = [];
  for (i = 0; i < 20000; i++) {
    // Loading token number and associated URIs
    var parametersEncoded = web3.eth.abi.encodeParameters(
      ["address", "uint256"],
      [ERC721ContractAddress, i]
    );
    var hashToSign = web3.utils.keccak256(parametersEncoded);
    var signature = await web3.eth.sign(hashToSign, provider.addresses[0]);
    let singleToken = {};
    singleToken.tokenNumber = i;
    singleToken.signature = signature;
    signaturesDictionnary.push(singleToken);
  }

  var json = JSON.stringify(signaturesDictionnary);
  fs.writeFile("output-sig.json", json, function (err) {
    if (err) throw err;
    console.log("complete");
  });
}

signAllTokens();