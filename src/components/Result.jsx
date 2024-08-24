import React from "react";

const Result = ({ bill, tip, setTip1, setTip2, setBill }) => {
  const handleReset = () => {
    setBill("");
    setTip1(0);
    setTip2(0);
  };

  return (
    <div className="result">
      <p>
        You Pay ${bill + tip} (${bill} + ${tip} tip).
      </p>
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Result;
