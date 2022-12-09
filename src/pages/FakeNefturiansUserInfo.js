import { useEffect, useState } from "react";
import Web3 from "web3";

const contract_abi = require("../contract/FakeNefturians.json").abi; 
const contract_address = "0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED"; 

let web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(contract_abi, contract_address);




function FakeNefturiansUserInfo(){

    const[balance, setBalance] = useState(0);
    const [list, setList] = useState([]);

    useEffect(()=>{
        renderList();
    }
    )
       
    
    async function getToken(){

        const accounts = await window.ethereum.request({method: 'eth_requestAccounts' }); 

        // get the balance of the user 
        let bal = await contract.methods.balanceOf(accounts[0]).call(); 
        setBalance(bal); 
        let tempArr = [];
        
        for( let i = 0; i < balance; i++){
          
            let tempTokenId = await contract.methods.tokenOfOwnerByIndex(accounts[0],i).call(); 
            let URI = await contract.methods.tokenURI(tempTokenId).call();
          
            let fetchUri = await fetch(URI).then(res => res.json());  

            // check that the nft is not in the list 
            if (tempArr.includes(JSON.stringify(fetchUri))===false){
                
                tempArr.push(JSON.stringify(fetchUri));
            }
        }
       setList(tempArr); 
    }
    
    const renderList = async()=>{
         await getToken(); 
        list.map((item, index) => 
                               <div key={index}>
                                <br></br>{item}</div>
                             );
    
    }
    return(
        <div>
             
            if {list}!=[]{
            <div>
                {renderList}
            </div>
            }
        </div>            

    )
}
export default FakeNefturiansUserInfo; 