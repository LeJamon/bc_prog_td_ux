import {web3} from 'web3';  

const isMMInstalled =() => {
  const {ethereum} = window; 

}

async function  connectMm  (){
    if(isMMInstalled){
      await ethereum.request({method: 'eth_requestAccounts'})
    }
}






function ChainInfo(){

    return (
        <div>
            <button onclick={connectMm}>Connect Wallet</button>
        </div>
    )
}

export default ChainInfo; 