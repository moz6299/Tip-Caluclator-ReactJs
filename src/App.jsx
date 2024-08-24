import React, { useState } from "react";
import Bill from "./components/Bill";
import Like from "./components/Like";
import Result from "./components/Result";
import "./App.css";

const App = () => {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const tip = bill * ((tip1 + tip2) / 2 / 100);

  return (
    <div className="app">
      <Bill bill={bill} setBill={setBill} />
      <Like tip={tip1} setTip={setTip1}>
        <p>How did you like the service?</p>
      </Like>
      <Like tip={tip2} setTip={setTip2}>
        <p>How did your friend like the service?</p>
      </Like>
      {bill > 0 && (
        <Result
          bill={bill}
          tip={tip}
          setBill={setBill}
          setTip1={setTip1}
          setTip2={setTip2}
        />
      )}
    </div>
  );
};

export default App;
