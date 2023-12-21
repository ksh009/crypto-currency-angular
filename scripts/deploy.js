const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.parseEther("0.001");

  const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  await lock.waitForDeployment();
  const txHash = lock.deploymentTransaction().hash;

  console.log(
    `Lock with ${hre.ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${
      lock.target
    }. Transaction at https://sepolia.etherscan.io/tx/${txHash}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// async function main() {
//   const [deployer] = await ethers.getSigners();

//   console.log("Deploying contracts with the account:", deployer.address);
//   // Get the contract factory
//   const Lock = await hre.ethers.getContractFactory("Lock");

//   // Deploy the contract
//   const unlockTime = Math.round(Date.now() / 1000) + 60; // Unlock time set to 60 seconds from now
//   const lock = await Lock.deploy(unlockTime, {
//     value: hre.ethers.utils.parseEther("0.001"), // Specify the amount of Ether to send with the deployment
//   });

//   await lock.deployed();

//   // Print contract information
//   const txHash = lock.deployTransaction.hash;
//   const txReceipt = await hre.ethers.provider.waitForTransaction(txHash);
//   console.log(
//     `Check your contract: https://etherscan.io/address/${txReceipt.contractAddress}`
//   );
//   console.log("Contract address:", txReceipt.contractAddress);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

/*
Target: 0xF44444c4C008b31a6D92995731B65Be2a193467c 
*/
