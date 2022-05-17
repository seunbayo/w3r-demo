import { injected } from "../components/wallet/connectors"

export default function Home() {
function connect() {
    
  }


  return (
    <div>
      <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">
        Connect to MetaMask
      </button>
      <span>Not connected</span>
    </div>
  );
}
