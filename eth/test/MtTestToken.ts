import { expect } from "chai";
import hre, { ethers } from "hardhat";

describe("MyTestToken", function () { 
    const useMTT = async () => {
        const MyTestToken = await ethers.getContractFactory("MyTestToken");
        const MTT = await MyTestToken.deploy(" My Test Token", "MTT", 1000000);
        return MTT;
    };
    it("Deployment", async function () {
        const [owner] = await ethers.getSigners();
        const MTT = await useMTT();
        expect(await MTT.target.valueOf)
    })
})