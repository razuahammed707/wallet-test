import { Routes, Route } from "react-router-dom";
import WalletLayout from "./layout/wallet";


function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<WalletLayout/>}></Route>
      </Routes>
    </>
  );
}

export default App;
