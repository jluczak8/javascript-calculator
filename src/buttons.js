import "./App.css";

function Buttons({ updateCalculations, calculate, clear }) {
  return (
    <div id="buttons">
      <div id="zero" className="button" onClick={() => updateCalculations("0")}>
        0
      </div>
      <div id="one" className="button" onClick={() => updateCalculations("1")}>
        1
      </div>
      <div id="two" className="button" onClick={() => updateCalculations("2")}>
        2
      </div>
      <div
        id="three"
        className="button"
        onClick={() => updateCalculations("3")}
      >
        3
      </div>
      <div id="four" className="button" onClick={() => updateCalculations("4")}>
        4
      </div>
      <div id="five" className="button" onClick={() => updateCalculations("5")}>
        5
      </div>
      <div id="six" className="button" onClick={() => updateCalculations("6")}>
        6
      </div>
      <div
        id="seven"
        className="button"
        onClick={() => updateCalculations("7")}
      >
        7
      </div>
      <div
        id="eight"
        className="button"
        onClick={() => updateCalculations("8")}
      >
        8
      </div>
      <div id="nine" className="button" onClick={() => updateCalculations("9")}>
        9
      </div>
      <div id="equals" className="button" onClick={calculate}>
        =
      </div>
      <div
        id="decimal"
        className="button"
        onClick={() => updateCalculations(".")}
      >
        .
      </div>
      <div id="add" className="button" onClick={() => updateCalculations("+")}>
        +
      </div>
      <div
        id="subtract"
        className="button"
        onClick={() => updateCalculations("-")}
      >
        -
      </div>
      <div
        id="multiply"
        className="button"
        onClick={() => updateCalculations("*")}
      >
        *
      </div>
      <div
        id="divide"
        className="button"
        onClick={() => updateCalculations("/")}
      >
        /
      </div>
      <div id="clear" className="button" onClick={clear}>
        C
      </div>
    </div>
  );
}

export default Buttons;
