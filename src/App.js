import { useState } from "react";
import "./styles.css";

const animalDictionary = {
  "🐕": "Dog",
  "🐈": "Cat",
  "🐒": "Monkey",
  "🐄": "Cow",
  "🐇": "Rabbit",
  "🐼": "Panda",
  "🐎": "Horse",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐘": "Elephant"
};

let animalEmojis = Object.keys(animalDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    let userInput = event.target.value;

    let emojiName = animalDictionary[userInput];

    if (userInput === "") {
      emojiName = "";
    } else if (emojiName === undefined) {
      emojiName = "Sorry! We do not know this emoji";
    }

    setMeaning(emojiName);
  }

  function emojiClickHandler(emoji) {
    let emojiName = animalDictionary[emoji];
    setMeaning(emojiName);
  }

  return (
    <div className="App">
      <h1>Animal Emoji</h1>
      <input placeholder="Please enter an emoji" onChange={emojiInputHandler} />
      <div>
        <h3> {meaning} </h3>
      </div>
      <h4>Emojis we know</h4>

      {animalEmojis.map(function (emoji) {
        return (
          <span
            key={emoji}
            style={{
              fontSize: "2rem",
              cursor: "pointer",
              border: "1px solid black",
              borderRadius: "10px",
              margin: "0.5rem",
              textAlign: "center"
            }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
