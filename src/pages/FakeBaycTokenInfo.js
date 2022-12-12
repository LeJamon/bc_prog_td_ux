import { useState } from "react";
import { IpfsImage } from 'react-ipfs-image';
import Web3 from "web3";
import Home from "./HomeButton";
import ChangeNetwork from "../utils/ChangeNetwork";

function FakeBaycTokenInfo() {
    
    //state zone 
    const[tokenId, setTokenId] = useState(); 
    const[attribute, setAttribute]= useState(); 
    const [image, setImage] = useState(""); 

    //contract zone 
    const contract_abi = require("../contract/FakeBayc.json").abi; 
    const contract_address = "0x1dA89342716B14602664626CD3482b47D5C2005E"; 
    let web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(contract_abi, contract_address);

    const handleChamp = (event)=>{
        setTokenId(event.target.value)
    }

    async function GetTokenInfo(){
       let a = await ChangeNetwork(); 
       
        if(a===true){ // good network
           
            if(tokenId >= parseInt(await contract.methods.tokenCounter().call())){
              alert("This token has not been minted"); 
              throw Error("token out of bound")
            }else{
            let info= await contract.methods.tokenURI(tokenId).call();
            const jsonURI = await fetch(info).then(res => res.json()); 

            setAttribute(JSON.stringify(jsonURI.attributes));  
            setImage(jsonURI.image); 
            console.log(jsonURI); 
            }
        
    }
} 
    
    return (
        <div>
            <input type="number"value={tokenId} onChange={e=>handleChamp(e)}/>
                <br></br>
                    <button onClick={GetTokenInfo}> Get token info</button>
                    <br></br>
                    <div>{attribute}</div>
                <br></br>
           {image!=="" &&
                <>
                    <IpfsImage hash={image}/>
                </>
            }
            <div></div>
        <Home></Home>
        </div>                    
    )
}

export default FakeBaycTokenInfo; 