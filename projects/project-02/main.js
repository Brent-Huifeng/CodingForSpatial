console.log('this works')

//---------- DATASET

const viewpoints = [
  {
    nation: "Mondstadt",
    image: "../../assets/Project2/Mondstadt/1.png"
  },

  {
    nation: "Mondstadt",
    image: "../../assets/Project2/Mondstadt/2.png"
  },

  {
    nation: "Mondstadt",
    image: "../../assets/Project2/Mondstadt/3.png"
  },
  
  {
    nation: "Mondstadt",
    image: "../../assets/Project2/Mondstadt/4.png"
  },
  
  {
    nation: "Mondstadt",
    image: "../../assets/Project2/Mondstadt/5.png"
  },
  
  {
    nation: "Mondstadt",
    image: "../../assets/Project2/Mondstadt/6.png"
  },
  
  {
    nation: "Mondstadt",
    image: "../../assets/Project2/Mondstadt/7.png"
  },
  
  {
    nation: "Mondstadt",
    image: "../../assets/Project2/Mondstadt/8.png"
  },
  
  {
    nation: "Mondstadt",
    image: "../../assets/Project2/Mondstadt/9.png"
  },
  
  {
    nation: "Mondstadt",
    image: "../../assets/Project2/Mondstadt/10.png"
  },

  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/1.png"
  },

  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/2.png"
  },

  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/3.png"
  },
  
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/4.png"
  },
  
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/5.png"
  },
  
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/6.png"
  },
  
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/7.png"
  },
  
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/8.png"
  },
  
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/9.png"
  },
  
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/10.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/11.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/12.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/13.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/14.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/15.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/16.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/17.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/18.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/19.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/20.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/21.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/22.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/23.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/24.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/25.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/26.png"
  },
    
  {
    nation: "Liyue",
    image: "../../assets/Project2/Liyue/27.png"
  },

  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/1.png"
  },

  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/2.png"
  },

  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/3.png"
  },
  
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/4.png"
  },
  
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/5.png"
  },
  
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/6.png"
  },
  
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/7.png"
  },
  
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/8.png"
  },
  
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/9.png"
  },
  
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/10.png"
  },
    
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/11.png"
  },
    
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/12.png"
  },
    
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/13.png"
  },
    
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/14.png"
  },
    
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/15.png"
  },
    
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/16.png"
  },
    
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/17.png"
  },
    
  {
    nation: "Inazuma",
    image: "../../assets/Project2/Inazuma/18.png"
  },

  

  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/1.png"
  },

  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/2.png"
  },

  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/3.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/4.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/5.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/6.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/7.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/8.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/9.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/10.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/11.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/12.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/13.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/14.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/15.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.0/16.png"
  },
    

  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.1/1.png"
  },

  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.1/2.png"
  },

  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.1/3.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.1/4.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.1/5.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.1/6.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.1/7.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.1/8.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.1/9.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.1/10.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.1/11.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.1/12.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/1.png"
  },

  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/2.png"
  },

  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/3.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/4.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/5.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/6.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/7.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/8.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/9.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/10.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/11.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/12.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/13.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/14.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/15.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/16.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.4/17.png"
  },
    
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.6/1.png"
  },

  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.6/2.png"
  },

  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.6/3.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.6/4.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.6/5.png"
  },
  
  {
    nation: "Sumeru",
    image: "../../assets/Project2/Sumeru/3.6/6.png"
  },
  





];

//---------- RENDER viewpoints TO PAGE

const ul = document.querySelector("ul");

function renderviewpointsToPage(results) {
  // iterate over data set
  for(let i = 0; i < results.length; i++){
    // create the list item
    let listItem = document.createElement('li');
    // add a class to each item of the results
    listItem.classList.add('card', results[i].nation) 

    // add viewpoint name
    let title = document.createElement('h3')
    title.textContent = results[i].name 
    // add viewpoint brand
    let store = document.createElement('p')
    store.textContent = results[i].brand 
    // add viewpoint nation
    let nation = document.createElement('p')
    nation.classList.add(results[i].nation)
    nation.textContent = results[i].nation

    // add viewpoint image
    let image = document.createElement('img')
    image.setAttribute('src', results[i].image)

    ul.appendChild(listItem)
    //listItem.appendChild(nation)
    listItem.appendChild(image)
    listItem.appendChild(title)
    listItem.appendChild(store)

  }
}
renderviewpointsToPage(viewpoints);

//---------- FILTER viewpoints BY nation

let filterBtns = document.querySelector(".filters");
let cards = document.querySelectorAll(".card");

function filterFn(event) {
  console.log(event.target)
  if(event.target.classList.contains('filter-btn')){
    // select the current active button
    let activeBtn = filterBtns.querySelector('.active')
    activeBtn.classList.remove('active')

    // apply the active class to the target
    event.target.classList.add('active')

    const filterValue = event.target.getAttribute('data-filter') // yellow | red

    for(let i = 0; i < cards.length; i++){
      if(cards[i].classList.contains(filterValue) || filterValue === 'All'){
        cards[i].classList.remove('hide')
        cards[i].classList.add('show')
      } else {
        cards[i].classList.remove('show')
        cards[i].classList.add('hide')
      }

    }
  }
}
filterBtns.addEventListener("click", filterFn);