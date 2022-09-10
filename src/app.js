/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = excuseGenerator();
};

//returns a string composed of four random outputs of each array
function excuseGenerator() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function outputStringPerArray(inputArray) {
    let outputString =
      inputArray[Math.floor(Math.random() * inputArray.length)] + " ";
    return outputString;
  }

  return (
    outputStringPerArray(who) +
    outputStringPerArray(action) +
    outputStringPerArray(what) +
    outputStringPerArray(when)
  );
}
