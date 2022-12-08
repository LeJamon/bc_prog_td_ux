import { useState } from "react";
import Web3 from "web3";

const contract_abi = require("../contract/FakeNefturians.json").abi; 
const contract_address = "0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED"; 

let web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(contract_abi, contract_address);

function FakeNefturians(){
    
    const[price, Setprice] = useState(); 
   
    async function getPrice(){
        let pri = await contract.methods.tokenPrice().call(); 
        Setprice(Web3.utils.fromWei(pri)); 
    }

    async function BuyToken(){
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts' }); 
        await contract.methods.buyAToken().send({from: accounts[0], value: 100010000000000000}).then(console.log); 
    }
    return(
        <div>
            <button onClick={getPrice}> get price</button>
            <br></br>
            <div>{price} ether</div>
            <button onClick={BuyToken}> Buy Token </button>
        </div>
    )
}
export default FakeNefturians; 