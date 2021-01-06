require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember million half clinic outer slide'; 
let testAccounts = [
"0x8ccc5f571960abcf77698d735248348ca1e5547fdcc8bad3acdd00628413ebd8",
"0xa2e4e5c829f1b691557b7b2231b496b18692469abe67e869b917120aecefc507",
"0xc8b75570e41553a5857e234c76caa9793a7bea0a737879cec35b7af371f5324a",
"0x0725d0b3dba376633c7e511e4a94e711ed6ca5c99110b2a21457162009e7cd33",
"0x6d82b3a96389aee08cee6ed50ef6ae83d14655986dcabade57c16d18c57a6406",
"0x14af00c531c1872740e7f9c221066f72fbf32b5abafc7cc5e5f750f9c6ad5faf",
"0xe6010bececc5144dcd468d2f3f939d30aab297115ffee4e5d8886ab2198563aa",
"0x17b9425dde94526067f0adcd44c9e7524694680f5b1321e3fafb0f5ca566568f",
"0x9444013f56494d67c5aa42de129f38e60c86fcd778f9e719340a97eb6ef4f719",
"0xb841db687dd454cfb064408f74e372bff172f0ee6e58be019b20c3d26e468409"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
