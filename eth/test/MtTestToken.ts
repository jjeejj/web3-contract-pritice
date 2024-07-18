import { expect } from "chai";
import  { ethers } from "hardhat";

describe("MyTestToken", function () { 
    const useMTT = async () => {
        const MyTestToken = await ethers.getContractFactory("MyTestToken");
        const MTT = await MyTestToken.deploy(" My Test Token", "MTT", 1000000);
        return MTT;
    };
    it("Deployment", async function () {
        const [owner] = await ethers.getSigners();
        const MTT = await useMTT();
        expect(await MTT.totalSupply()).to.equal(1000000);
        expect(await MTT.balanceOf(owner.address)).to.equal(1000000);
    })
})