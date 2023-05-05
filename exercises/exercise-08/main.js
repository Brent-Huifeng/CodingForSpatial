/* 

Instructions: when a user clicks on one of the colored dots, the    background color of the entire page changes to match that dot. You should not need to change any HTML or CSS. 

Hint: Classes for each color have already been defined in the CSS tab.

*/

// 1 -- Select each button

let grayBtn = document.getElementById("Button1");
let whiteBtn = document.getElementById("Button2")
let blueBtn = document.getElementById("Button3");
let yellowBtn = document.getElementById("Button4");

// 3 -- Write an event handler to change the color of the page when each circle is pressed.

function switchToGray() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "#a3f2cc";
    // body.style.color = "#a3f2cc";
  }
  
  function switchToWhite() {
      let body = document.querySelector("body");
      body.style.backgroundColor = "#f4d35b";
      // body.style.color = "#f4d35b";
    }
  
  function switchToBlue() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "#ddb9fe";
    // body.style.color = "#ddb9fe";
  }
  
  function switchToYellow() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "#b9f133";
    // body.style.color = "#b9f133";
  }
  // 2 -- Add an event listener to each circle
  grayBtn.addEventListener("click", switchToGray);
  whiteBtn.addEventListener("click", switchToWhite);
  blueBtn.addEventListener("click", switchToBlue);
  yellowBtn.addEventListener("click", switchToYellow);