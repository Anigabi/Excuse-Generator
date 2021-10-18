/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here


  const WHO = ["My boyfriend", "I", "My bestie", "My chicken"];
  const ACT = ["Fall", "Eat", "Wet"];
  const WHEN = ["bBefore the class", "After the gym", "In the morning"];
  const WHAT = ["all the food", "my computer", "my transport pass"];

  document.querySelector("#excuse").innerHTML = excuseGenerator(
    WHO,
    ACT,
    WHAT,
    WHEN
  );
};

function excuseGenerator(who, act, when, what) {
  let numwho = Math.floor(Math.random() * who.length);
  let numact = Math.floor(Math.random() * act.length);
  let numwhen = Math.floor(Math.random() * when.length);
  let numwhat = Math.floor(Math.random() * what.length);
  return (
    who[numwho] + " " + act[numact] + " " + what[numwhat] + " " + when[numwhen]
  );
}
