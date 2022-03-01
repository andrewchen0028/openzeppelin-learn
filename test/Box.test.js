const { expect } = require("chai");
const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");

const Box = artifacts.require("Box");

contract("Box", function ([ owner, other ]) {
  const value = new BN("42");

  beforeEach(async function () {
    this.box = await Box.new({ from: owner });
  })

  it("should retrieve the previously stored value", async function () {
    await this.box.store(value, { from: owner });
    expect(await this.box.retrieve()).to.be.bignumber.equal(value);
  })

  it("emits an event on store", async function () {
    const receipt = await this.box.store(value, { from: owner });
    expectEvent(receipt, "ValueChanged", { value: value });
  })

  it("should refuse to store values for non owners", async function () {
    await expectRevert(
      this.box.store(value, { from: other }),
      "Ownable: caller is not the owner",
    )
  })
})