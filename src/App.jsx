import { useState } from "react";
import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Score from "./components/Score";
function App() {
  const [batchName, setBatchName] = useState("");
  return (
    <>
      <Header batchname = {batchName} />
      <main className="scores-container">
        <Score courseName={batchName} listResult = {batchName}/>
      </main>
    </>
  );
}

export default App;
