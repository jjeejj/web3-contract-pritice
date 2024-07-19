import { ethers } from "hardhat"
import { expect } from "chai"

describe("Web3AutoModel", function () {
    it("say hello", async () => { 
        const autoModel = await ethers.getContractFactory("Web3AutoModel");
        const am = await autoModel.deploy();
        expect(await am.say()).to.equal("hello, world");
    })
 })