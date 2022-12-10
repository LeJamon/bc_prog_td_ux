import Web3 from "web3";
import { useState } from "react";
import Home from "./HomeButton";

export default function FakeMeebits(){
    
  const jsonSignature = require("../contract/sig.json"); 

  const contract_abi = require("../contract/Claimer.json").abi; 
  const contract_address = "0x5341e225Ab4D29B838a813E380c28b0eFD6FBa55"; 
  
  let web3 = new Web3(window.ethereum);

  var contract = new web3.eth.Contract(contract_abi, contract_address);

  const[tokenId, setTokenId] = useState();


  async function Mint(){
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


  const handleChamp = (event)=>{
     setTokenId(event.target.value)
  }

return(
    <div>
      <br></br>
      <div>Please choose the token id you want to mint</div>
      <br></br>
      <input type="number"value={tokenId} onChange={e=>handleChamp(e)}/>
      <br></br>
      <br></br>
      <button onClick={Mint}> mint</button>
      <div></div>
        <Home></Home>
    </div>
)
}