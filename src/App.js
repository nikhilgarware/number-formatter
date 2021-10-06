import "./App.css";
import { useState } from "react";
import thousandSeperator from "./thousand-seperator/thousand-seperator";
function App() {
  const [output, setOutput] = useState();
  function handleChange(data) {
    setOutput(thousandSeperator(data.target.value, 2));
  }
  return (
    <>
      <center style={{ margin: "20px" }}>
        <row>
          <input name="data" onChange={handleChange} />
        </row>
        <row>Modified Value: {output}</row>
      </center>
    </>
  );
}

export default App;
