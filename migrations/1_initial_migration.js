require("dotenv").config()
const BoboGlyph = artifacts.require("BoboGlyph")
const baseURI = process.env.BASE_URI

module.exports = function (deployer) {
  deployer.deploy(BoboGlyph, baseURI)
}
