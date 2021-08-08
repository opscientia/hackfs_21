import Onboard from 'bnc-onboard'
import Web3 from 'web3'

let web3;

const onboard = Onboard({
  dappId: "ddc86654-ccbd-457e-bd92-ea97819b520a",       // [String] The API key created by step one above
  networkId: 4,  // [Integer] The Ethereum network ID your Dapp uses.
  subscriptions: {
    wallet: wallet => {
       web3 = new Web3(wallet.provider);
       console.log(wallet.provider);
    }
  }
});
export async function walletlogin(){
    await onboard.walletSelect();
await onboard.walletCheck();
}
export async function walletlogout(){
if(onboard.walletCheck())
onboard.walletReset();
}
export async function walletsee(){
    return onboard.wallet;
    }
export default onboard;