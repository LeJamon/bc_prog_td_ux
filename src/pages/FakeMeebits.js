import Web3 from "web3";
import { useState } from "react";
import Home from "./HomeButton";
import ChangeNetwork from "../utils/ChangeNetwork";



export default function FakeMeebits(){
    
  const jsonSignature = require("../contract/sig.json"); 

  const contract_abi = require("../contract/Claimer.json").abi; 
  const contract_address = "0x5341e225Ab4D29B838a813E380c28b0eFD6FBa55"; 
  
  let web3 = new Web3(window.ethereum);

  var contract = new web3.eth.Contract(contract_abi, contract_address);

  const[tokenId, setTokenId] = useState();


  async function Mint(){
    if(tokenId!=null){
      let a = await ChangeNetwork(); 
       
      if(a===true){
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts' });
        // check that we can mint the token
        if(await contract.methods.tokensThatWereClaimed(tokenId).call()){
        alert("This token has alredy been mint"); 
        throw Error("already minted");  
      }else{
        const _signature = jsonSignature[tokenId].signature;  
        await contract.methods.claimAToken(tokenId,_signature).send({from: accounts[0]});
        alert("token has been minted");
        }
      }
    }else{
      alert("Choose a token Id please");
      throw Error("Invalid token id");
    }
}

  const handleChamp = (event)=>{
     setTokenId(event.target.value)
  }

return(
    <div>
      <br></br>
      <div className="Info">Please choose the token id you want to mint</div>
      <br></br>
      <input className="barre" type="number"value={tokenId} onChange={e=>handleChamp(e)}/>
      <br></br>
      <br></br>
      <button className ="Click" onClick={Mint}> mint</button>
      <div></div>
        <Home></Home>
    </div>
)
}