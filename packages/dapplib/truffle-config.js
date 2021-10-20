require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remind assume include merry flock slot'; 
let testAccounts = [
"0x485b1598237e3026417291a27a7d737aede28caa4a1f043e5db54f25c3b9a60c",
"0x5c6fe6b79e87d3477122d6a7d8a50a28341ae5e83c666ab030682ae5f5815652",
"0xd4cd39aef067af2c2c02777ff1a289ae5a54339e179eb99525ab51a9dbb452d9",
"0x0e1b685c54376a8205974a1b6acb070b46497bcaa6838af5b4cffc74ac668e3a",
"0x992e042f099a91b4b96e241bd4896537e1f4a3c22bbaa389ed19286aeb97a8f2",
"0xfbb7d89e2f9f13429b424fe2ad39843e319439eea00da886e26359d692611ca5",
"0xa7727f3e80587532967796c467871e587cdae728ca61db3a0dd8187bdb0bc302",
"0x354d0e0e2af5b84d5a3b1044f35ba5d4f1a3d09b39001893c1f9386bb4525522",
"0x7379558a0d14c333224d4972f6279d0775cf37975330c6483dcdd721a7a11f4d",
"0x015dbfc681de2f39ba432704db93bc4793c7f2afdc2236a27e53bce594e896d6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

