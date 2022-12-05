import { useState, useRef } from "react";
import Web3 from "web3";

function ChainInfo(){

//state zone
const [account, setAccount] = useState(); 
const [chain, setChain] = useState(); 
const [block, setblock] = useState(); 

//comportement zone
const info = async()=>  {

  const {ethereum} = window; 
  const _account = ethereum.selectedAddress; 
  const chainId =  ethereum.networkVersion;  
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  window.web3 = new Web3(window.ethereum);
  let lastblock = await web3.eth.getBlockNumber();

  setAccount(_account); 
  setChain(chainId); 
  setblock(lastblock)

 }

 //render
    return (
        <div>
          <button onClick={info}>Click here to get info</button>
            <div>{account}</div>
            <br></br>
            <div>{chain}</div>
            <br></br>
            <div>{block }</div>

            
        </div>
    ); 
}


export default ChainInfo; 