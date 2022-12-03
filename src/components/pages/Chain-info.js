import { useState, useRef } from "react";
import { ethers } from "ethers";


function ChainInfo(){
const [msg, setMsg] = useState();
const [accnt, setAccnt] = useState();

const ConnectMetamask = async () => {
    const { ethereum } = window;
    if (ethereum.isMetaMask){
      await ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await ethereum.request({ method: "eth_accounts" });
    }else{
      setMsg("Please install metamask");
    }
  }

    return (
        <div>
            <button onclick={ConnectMetamask}>Connect Wallet</button>
        </div>
    )
}

export default ChainInfo; 