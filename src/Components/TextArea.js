import React, { useState } from "react";

function TextArea({ mode, showAlert }) {
  const [text, setText] = useState("");

  const changeInput = (e) => {
    setText(e.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to Uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to Lowercase", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <h1>Enter text here to analyse</h1>
        <textarea
          style={{ backgroundColor: mode === "dark" ? "grey" : "white" }}
          value={text}
          onChange={changeInput}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button
          disabled={text.length == 0}
          type="button"
          onClick={handleUpClick}
          className="btn btn-primary my-2 mx-1"
        >
          Upper case
        </button>
        <button
          disabled={text.length == 0}
          type="button"
          onClick={handleLoClick}
          className="btn btn-primary my-2 mx-1"
        >
          Lower case
        </button>
      </div>
      <div className="container">
        <h2>Summary of words</h2>
        <p>
          {
            text.split("\s+/").filter((element) => {
              return element.length !== 0;
            }).length
          }
           words and {text.length} characters
        </p>
        <p>{0.008 *text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}min read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextArea;
