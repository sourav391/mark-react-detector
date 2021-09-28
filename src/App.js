import React, { useState } from "react";
import "./styles.css";

const headingText = "Objects items";

const objectdb = {
  "🕯️": "candle",
  "📒": "Ledger",
  "📑": "Bookmark Tabs",
  "💳": "Credit card",
  "📌": "Pushpin",
  "✂️": "Scissors",
  "🔑": "Key",
  "🔗": "Link",
  "🔨": "Hammer",
  "💊": "Pill",
  "🛁": "Bathtub",
  "🧼": "Soap",
  "💣": "Bomb",
  "🌡️": "Thermometer",
  "🎈": "Balloon",
  "🎁": "Wrapped gift",
  "🕹️": "joystick",
  "🛢️": "Oil drum",
  "🛎️": "Bellhop Bell",
  "🔋": "Battery"
};

const objectList = Object.keys(objectdb);

export default function App() {
  const [objectValue, setobjectValue] = useState("");

  function objectHandler(event) {
    const userInput = event.target.value;

    let objectValue = objectdb[userInput];

    if (objectValue === undefined) {
      objectValue = "Object not detected";
    }
    setobjectValue(objectValue);
  }

  function objectClickHandler(obj) {
    let objectValue = objectdb[obj];
    setobjectValue(objectValue);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input
        onChange={objectHandler}
        style={{ height: "1rem", width: "50%", padding: "1rem" }}
      ></input>
      <div style={{ margin: "1rem", fontSize: "1.3rem" }}> {objectValue} </div>

      <h3>OUR DATABASE</h3>
      {objectList.map((obj) => {
        return (
          <span
            key={obj}
            style={{
              fontSize: "2rem",
              padding: "1rem 1rem",
              cursor: "pointer"
            }}
            onClick={() => objectClickHandler(obj)}
          >
            {obj}
          </span>
        );
      })}
    </div>
  );
}
