// import { useState } from "react";

// function Wallet() {
//   const [wallet, setWallet] = useState(500);

//   const addWallet = (amount) => {
//     // Use the previous state correctly to update the wallet balance
//     setWallet((prev) => prev + amount);
//   };

//   const reduceWallet = (amount) => {
//     // Use the previous state correctly to update the wallet balance
//     setWallet((prev) => prev - amount);
//   };

//   return (
//     <div>
//       <p>₦{wallet}.00</p>
//       <button onClick={() => addWallet(50)}>Add ₦50</button>
//       <button onClick={() => reduceWallet(50)}>Reduce ₦50</button>
//     </div>
//   );
// }

// export default Wallet;









// WalletContext.js
import React, { createContext, useContext, useReducer } from "react";

// Define the wallet reducer
const walletReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { balance: state.balance + action.amount };
    case "REDUCE":
      return { balance: state.balance - action.amount };
    default:
      return state;
  }
};

// Create a context
const WalletContext = createContext();

// Create a provider component
export const WalletProvider = ({ children }) => {
  const [state, dispatch] = useReducer(walletReducer, { balance: 1000 });

  const addWallet = (amount) => {
    dispatch({ type: "ADD", amount });
  };

  const reduceWallet = (amount) => {
    dispatch({ type: "REDUCE", amount });
  };

  return (
    <WalletContext.Provider value={{ state, addWallet, reduceWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

// Create a custom hook to use the context
export const useWallet = () => {
  return useContext(WalletContext);
};
