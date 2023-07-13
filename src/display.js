import "./App.css";

function Display({ calculations, formula, finalvalue }) {
  let render = "";

  if (finalvalue === "" && calculations === "") {
    render = "0";
  } else if (finalvalue !== "" && calculations === "") {
    render = finalvalue;
  } else {
    render = calculations;
  }

  return (
    <div id="outcome">
      <div id="formula">{formula || ""}</div>
      <div id="display">{render}</div>
    </div>
  );
}

export default Display;
