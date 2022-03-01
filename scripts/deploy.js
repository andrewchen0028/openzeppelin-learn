async function main () {
  const Contract = await ethers.getContractFactory("TelephoneHack");
  console.log("Deploying TelephoneHack...");
  const contract = await Contract.deploy();
  await contract.deployed();
  console.log("TelephoneHack deployed to: ", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })