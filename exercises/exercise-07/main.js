let array_one = [
    "Mondstadt", "Liyue", "Inazuma", "Sumeru"
  ];
  
  let array_two = [
    "1st", "2nd", "3rd", "4th"
  ];
  
  // let randomElement = arrayName[Math.floor(Math.random()*arrayName.length)];
  
  function renderPoem() {
    // select random element from array 01
    let elementFromArrayOne = array_one[Math.floor(Math.random()*array_one.length)];
  
    // select a random element from array 2
    let elementFromArrayTwo = array_two[Math.floor(Math.random()*array_two.length)];
  
    // use querySelector to grap the div with a class of poem
    let poem = document.querySelector('.poem')
  
    // create a new element ... paragraph tag
    let paragraph = document.createElement('p')
  
    // add the text attribute
    paragraph.textContent = `${elementFromArrayOne} is the ${elementFromArrayTwo} nation in Genshin Impact.`
  
    // add class attribute
    paragraph.classList.add('line')
  
    // elementFromArrayOne + " " + elementFromArrayTwo
  
    // append that paragrap to the div with a class of poem
    poem.appendChild(paragraph)
  }
  
  let btn = document.querySelector("button");
  btn.addEventListener("click", renderPoem);
