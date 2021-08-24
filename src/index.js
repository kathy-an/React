import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from "./emojipedia";

ReactDOM.render(<App />, document.getElementById("root"));

// using ES6 functions

console.log(emojipedia);

const emojimeaning =emojipedia.map(emoji => emoji.meaning.substring(0,100));

console.log(emojimeaning);
