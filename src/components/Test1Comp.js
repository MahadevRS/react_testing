import React, { useState } from "react";

const Test1Comp = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);

  const handleSum = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    if (!isNaN(number1) && !isNaN(number2)) {
      setSum(number1 + number2);
    } else {
      setSum("Please enter valid numbers");
    }
  };

  return (
    <>
      <div id="componentTitle">Testing the Component</div>
      <form>
        <div>
          <label htmlFor="num1">Number 1:</label>
          <input
            type="number"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="num2">Number 2:</label>
          <input
            type="number"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <button type="button" id="calculateButton" onClick={handleSum}>
          Show Sum
        </button>
      </form>
      {sum !== null && (
        <div>
          <h3 id="sumResult">Sum: {sum}</h3>
        </div>
      )}
    </>
  );
};

export default Test1Comp;
