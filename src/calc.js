import React, { useState } from "react";
import "./App.css";
import Buttons from "./buttons";
import Display from "./display";

function Calc() {
  const [calculations, setCalculations] = useState("");
  const [formula, setFormula] = useState("");
  const [finalvalue, setFinalValue] = useState("");

  const operators = ["+", "-", "*", "/", "."];

  const updateCalculations = (value) => {
    if (
      operators.includes(value) &&
      value !== "-" &&
      calculations === "" &&
      finalvalue === ""
    ) {
      return;
    }

    if (operators.includes(value) && calculations === "" && finalvalue !== "") {
      setCalculations(eval(formula).toString() + value);
      return;
    }

    if (value === "-") {
      if (calculations[calculations.length - 1] === "-") {
        value = "+";
      }
      setCalculations(calculations + value);
      return;
    }

    if (value === "+") {
      if (calculations[calculations.length - 1] === "+") {
        return;
      }
      setCalculations(calculations + value);
      return;
    }

    if (value === ".") {
      for (let i = calculations.length - 1; i >= 0; i--) {
        if (calculations[i] === ".") {
          return;
        }
        if (
          calculations[i] === "+" ||
          calculations[i] === "-" ||
          calculations[i] === "*" ||
          calculations[i] === "/"
        ) {
          setCalculations(calculations + value);
          break;
        }
      }
    }
    if (value === "0") {
      if (calculations[calculations.length - 1] === "0") {
        for (let i = calculations.length - 2; i >= 0; i--) {
          if (
            calculations[i] === "." ||
            calculations[i] === "1" ||
            calculations[i] === "2" ||
            calculations[i] === "3" ||
            calculations[i] === "4" ||
            calculations[i] === "5" ||
            calculations[i] === "6" ||
            calculations[i] === "7" ||
            calculations[i] === "8" ||
            calculations[i] === "9"
          ) {
            setCalculations(calculations + value);
            return;
          }
          if (
            calculations[i] === "+" ||
            calculations[i] === "-" ||
            calculations[i] === "*" ||
            calculations[i] === "/"
          ) {
            return;
          }
        }
        return;
      }
    }
    setCalculations(calculations + value);
  };

  const calculate = () => {
    if (calculations === "") {
      return;
    }

    if (
      calculations[calculations.length - 1] === "+" ||
      calculations[calculations.length - 1] === "-" ||
      calculations[calculations.length - 1] === "*" ||
      calculations[calculations.length - 1] === "/"
    ) {
      return;
    }

    let evaluatedCalculations = calculations;

    evaluatedCalculations = evaluatedCalculations.replace(
      /([+*])-([+*])/g,
      "$2"
    );

    evaluatedCalculations = evaluatedCalculations.replace(
      /([+\-*/])\s-\s(\d)/g,
      "$1-$2"
    );

    setFormula(evaluatedCalculations);
    setFinalValue(eval(evaluatedCalculations).toString());
    setCalculations("");
  };

  const clear = () => {
    setFormula("");
    setCalculations("");
    setFinalValue("");
  };

  return (
    <div id="calc">
      <Display
        calculations={calculations}
        formula={formula}
        finalvalue={finalvalue}
      />
      <div className="divider" />
      <Buttons
        updateCalculations={updateCalculations}
        calculate={calculate}
        clear={clear}
      />
    </div>
  );
}

export default Calc;
