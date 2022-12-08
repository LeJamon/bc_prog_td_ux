import { useState, useEffect } from 'react';
import Web3 from 'web3';


function FakeBayc(){

const [supply, Setsupply] = useState(null); 
const [name, Setname] = useState(null); 
const contract_abi = require("../contract/FakeBayc.json").abi; 
const contract_address = "0x1dA89342716B14602664626CD3482b47D5C2005E"; 


 

async function GetSupplyAndName(){
 
    let web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(contract_abi, contract_address);
    let a = await contract.methods.tokenCounter().call();
    Setsupply(a); 
    let b = await contract.methods.name().call();
    Setname(b); 
}

 
    return(
        <div>
        <button onClick={GetSupplyAndName}>get Name and Supply</button>
        <div>{name}</div>
        <div>{supply}</div>
        </div>
    )
}

export default FakeBayc; 