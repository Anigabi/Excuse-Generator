/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here


  const who = ["my boyfriend", "I", "my bestie", "my chicken"];
  const act = ["fall", "eat", "wet"];
  const when = ["before the class", "after the gym", "in the morning"];
  const what = ["all the food", "my computer", "my transport pass"];

  document.querySelector("#excuse").innerHTML = excuseGenerator(
    who,
    act,
    what,
    when
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
