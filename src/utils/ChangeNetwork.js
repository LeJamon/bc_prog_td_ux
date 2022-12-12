import Web3 from "web3";

async function ChangeNetwork(){

    const chainId = "11155111"; // Sepolia testnet
    let web3 = new Web3(window.ethereum); 
    if (window.ethereum.networkVersion !== chainId) {
        try {
            await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: web3.utils.toHex(chainId) }]
            });
        } catch (err) {
            // This error code indicates that the chain has not been added to MetaMask
            if (err.code === 4902) {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                {
                    chainName: 'Sepolia testnet',
                    chainId: web3.utils.toHex(chainId),
                    nativeCurrency: { name: 'Réseau de test Sepolia', decimals: 18, symbol: 'SepoliaETH' },
                    rpcUrls: ['https://sepolia.infura.io/v3/']
                }
                ]
            });
            }
        }
    }
    else{
        return true; 
    }
}

export default ChangeNetwork; 