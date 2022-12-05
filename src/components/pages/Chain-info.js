import { useState, useRef } from "react";
import { ethers } from "ethers";
import Connect from "../../utils/Connect";
import Web3 from "web3";
function ChainInfo() {
  Connect(); 
  const {ethereum} = window; 
  window.web3 = new Web3(window.ethereum);
  const account = ethereum.selectedAddress;  
  
    return (
        <div>
            <div>{account}</div>
            <br></br>
            <br></br>
            
        </div>
    )
}

export default ChainInfo; 