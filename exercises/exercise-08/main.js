let Button1 = document.getElementById("Button1");
let Button2 = document.getElementById("Button2")
let Button3 = document.getElementById("Button3");
let Button4 = document.getElementById("Button4");

function swithc1() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "#a3f2cc";
  }
  
  function switch2() {
      let body = document.querySelector("body");
      body.style.backgroundColor = "#f4d35b";
    }
  
  function switch3() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "#ddb9fe";
  }
  
  function switch4() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "#b9f133";
  }
  Button1.addEventListener("click", swithc1);
  Button2.addEventListener("click", switch2);
  Button3.addEventListener("click", switch3);
  Button4.addEventListener("click", switch4);