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

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
