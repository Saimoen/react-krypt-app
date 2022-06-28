// https://eth-goerli.alchemyapi.io/v2/7DpFSvnFOfKhVYDeiBLzSadXdiSCyG2B

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/7DpFSvnFOfKhVYDeiBLzSadXdiSCyG2B",
      accounts: [ '9439dfaf139e60f2f090a88b16e7f1c0d0deaafd3dc70437595c20e8537acb8e' ]
    }
  }
}