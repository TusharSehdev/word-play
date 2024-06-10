import { useState } from "react";
import React from "react";

export default function HomePage(params) {
  function handleUpClick(event) {
    let newText = text.toUpperCase();
    setText(newText);
  }
  function handleLoClick() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function handleOnChange(event) {
    setText(event.target.value);
  }
  function handleClearClick() {
    setText("");
  }
  const handleEmailClick = () => {
    // Regular expression to match any word containing '@'
    const atWordRegex = /\S*@\S*/g;
    // Find all matches
    const foundWords = text.match(atWordRegex);
    setWordsWithAt(foundWords || []);
  };

  const downloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "inputText.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const [text, setText] = useState("Enter Text Here");
  const [wordsWithAt, setWordsWithAt] = useState([]);
  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <h1>Enter Text Here</h1>
            <textarea
              type="text"
              className="form-control"
              style={{ backgroundColor: "transparent", color: "white" }}
              id="exampleInput"
              rows="8"
              value={text}
              onChange={handleOnChange}
              aria-describedby="emailHelp"
            />
          </div>
        </form>
        <button
          type="submit"
          onClick={handleUpClick}
          className="btn btn-primary mx-2"
        >
          To Upper Case
        </button>
        <button
          type="submit"
          onClick={handleLoClick}
          className="btn btn-primary mx-2"
        >
          To Lower Case
        </button>
        <button
          type="submit"
          onClick={handleClearClick}
          className="btn btn-danger"
        >
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleEmailClick}>
          Extract Emails
        </button>
        <button className="btn btn-primary mx-2" onClick={downloadText}>
          Download
        </button>
        <button className="btn btn-primary mx-2" onClick={speak}>
          Speak
        </button>
        <h4>Extracted Emails:</h4>
        {wordsWithAt.length > 0 ? (
          <ul>
            {wordsWithAt.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        ) : (
          <p>No words found.</p>
        )}

        <div className="my-2">
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
