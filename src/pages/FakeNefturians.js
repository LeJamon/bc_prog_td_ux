import { useEffect, useState } from "react";
import Web3 from "web3";
import Home from "./HomeButton";
import ChangeNetwork from "../utils/ChangeNetwork";

const contract_abi = require("../contract/FakeNefturians.json").abi; 
const contract_address = "0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED"; 

let web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(contract_abi, contract_address);



function FakeNefturians(){
    
    const[price, Setprice] = useState(); 
    const[priceETH, SetpriceETH] = useState(); 
    useEffect(()=>{
        getPrice();
    })

    async function getPrice(){
        let pri = await contract.methods.tokenPrice().call(); 
        Setprice(String(pri*1.00001)); 
        SetpriceETH(web3.utils.fromWei(String(price))); 
        console.log(priceETH); 
    }

    async function BuyToken(){
        let a = await ChangeNetwork(); 
       
        if(a===true){
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts' }); 
        await contract.methods.buyAToken().send({from: accounts[0], value: price}).then(console.log); 
        }
    }
    return(
        <div>
            
            <br></br>
            <div>{priceETH} ETH</div>
            <button onClick={BuyToken}> Buy Token </button>
            <div></div>
        <Home></Home>
        </div>
    )
}
export default FakeNefturians; 