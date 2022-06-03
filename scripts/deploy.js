const main = async() => {
   const contractFactory = await ethers.getContractFactory('MultiSigWallet');
   // sample addresses from the Remix IDE (first 3 addresses)
   const contract = await contractFactory.deploy(["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"], 2);
   await contract.deployed();
 
   console.log("Contract deployed to: ", contract.address);
 }
 
 const runMain = async() => {
   try {
     await main();
     process.exit(0);
   } catch(error) {
     console.log(error);
     process.exit(1);
   }
 }
 
 runMain();