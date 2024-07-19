import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account: ", deployer.address);

    const MyTestToken = await ethers.getContractFactory("MyTestToken");
    const MTT = await MyTestToken.deploy(" My Test Token", "MTT", 1000000);

    console.log("MyTestToken address: ", await MTT.getAddress());
}

async function Web3AutoModel() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying Web3AutoModel contracts with the account: ", deployer.address);

    const Web3AutoModel = await ethers.getContractFactory("Web3AutoModel");
    const wam = await Web3AutoModel.deploy();

    console.log("Web3AutoModel address: ", await wam.getAddress());
}

// main().catch((err) => {
//     console.error(err);
//     process.exitCode = 1;
//  })

Web3AutoModel();