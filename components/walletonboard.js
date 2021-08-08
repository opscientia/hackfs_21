import { useOnboard } from "use-onboard";

export default function App() {
  const {
    selectWallet,
    address,
    isWalletSelected,
    disconnectWallet,
    balance
  } = useOnboard();
  return (
    <div>
      {
        <button
          onClick={async () => {
            if (isWalletSelected) disconnectWallet();
            else await selectWallet();
          }}
        >
          {isWalletSelected ? "Disconnect" : "Connect"}
        </button>
      }
      <p>Address: {address}</p>
      <p>Balance: {balance} ETH</p>
    </div>
  );
}
