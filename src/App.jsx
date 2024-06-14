import { useEffect, useState } from "react";
import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Scores from "./components/Scores";
import { HTML_RESULTS,JAVA_RESULTS,PYTHON_RESULTS,ENGLISH_RESULTS } from "./data";
function App() {
  const [batchName, setBatchName] = useState("PNV batch 2024");
  return (
    <>
      <Header batchName = {batchName} />
      <main className="scores-container">
        <Scores courseName="JAVA" listResult = {JAVA_RESULTS}/>
        <Scores courseName="HTML" listResult = {HTML_RESULTS}/>
        <Scores courseName="PYTHON" listResult = {PYTHON_RESULTS}/>
        <Scores courseName="ENGLISH" listResult = {ENGLISH_RESULTS}/>
      </main>
    </>
  );
}

export default App;
