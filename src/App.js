import "./App.css";
import React from "react";
import googleTransliterate from "@manish-pokhrel-font";

function App() {
  const [value, setValue] = React.useState("");
  //let sourceText = "nepal";
  let inputLanguage = "ne-t-i0-und";
  let maxResult = 8;
  let request = new XMLHttpRequest();
  const [googleFontInput, setGoogleFontInput] = React.useState();

  function getEnglishToNepaliFont() {
    googleTransliterate(request, value, inputLanguage, maxResult).then(
      function (response) {
        if (response.constructor === Array && response.length > 0) {
          debugger;
          let res = [];
          response.forEach((item) => res.push(item[0]));
          console.log(res);
          setValue(res[0]);
        }
      }
    );
  }

  function handleChange(e) {
    let res = e.target.value;
    setValue(res);
  }
  function handleSpace(e) {
    if (e.code === "Space" || e.keyCode === 32) {
      console.log(value);
      getEnglishToNepaliFont();
    }
  }
  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleSpace}
      ></input>
    </div>
  );
}

export default App;
