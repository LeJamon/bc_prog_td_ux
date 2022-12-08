import { useState, useEffect } from 'react';
import Web3 from 'web3';


function FakeBayc(){

// state zone 
const [supply, Setsupply] = useState(null); 
const [name, Setname] = useState(null); 

//contract zone 
const contract_abi = require("../contract/FakeBayc.json").abi; 
const contract_address = "0x1dA89342716B14602664626CD3482b47D5C2005E"; 

// declare the contract
let web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(contract_abi, contract_address);

 


async function GetSupplyAndName(){
 
    let a = await contract.methods.tokenCounter().call();
    Setsupply(a); 
    let b = await contract.methods.name().call();
    Setname(b); 
}

async function MintNft(){
 
    //use window.ethereum to get the account
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts' }); 
    await contract.methods.claimAToken().send({from: accounts[0]}).then(console.log); 
}


 
    return(
        <div>
        <button onClick={GetSupplyAndName}>get Name and Supply</button>
        <div>{name}</div>
        <div>{supply}</div>
        <button onClick={MintNft}>claim a free nft</button>
        </div>
    )
}

export default FakeBayc; 