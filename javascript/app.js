//function that detects if element is in viewport. Modified from https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
const inViewport = function(element) {
  //get an element's position and position relative to the viewport
  const rect = element.getBoundingClientRect();
  //return true if top and left of an element are in the window and the bottom and right are either in the window or client within a window
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//build the menu using section information

const navigationList = document.getElementById('nav-list');

//get the number of sections. The number will be used in the following for loop.
const numberOfCards = document.getElementsByClassName('card').length;

for (i = 1; i <= numberOfCards; i++) {
  //create a string that specifies an h2 element within the section
  let item = "#section-" + i + "-title";
  //create a string to link to the item later
  let itemLink = "#section" + i;
  //get the h2 element 
  let itemVal = document.querySelector(item);
  //extract the text of the h2 element and store as a variable
  let itemText = itemVal.textContent;
  //create a new list item
  let newLi = document.createElement("li");
  //create text node with the title of the section
  let liText = document.createTextNode(itemText);
  //append the text node to the list item
  newLi.appendChild(liText);
  //give the new list item an ID
  let liID = "#list-item" + i;
  liID.id = liID;
  //apend the list item to the navigation list
  navigationList.appendChild(newLi);
  //store the linked section as a variable
  let target = document.querySelector(itemLink);

  //when the navbar is clicked, scroll smoothly to the specified section
  newLi.addEventListener('click', function () {
    target.scrollIntoView({
      behavior: "smooth",
      block: "center"
    })
  });

  document.addEventListener("scroll", function () {
    if (inViewport(target)) {
      newLi.classList.add("active");
    } else {
      newLi.classList.remove("active");
    }
  })
}

//if section is in view, set navbar link to active
/*
for (let i = 1; i <= numberOfCards; i++){
  let sectionInView = document.getElementById("section" + i);
  let navItem = document.getElementById("#list-item" + i)
  document.addEventListener("scroll", function () {
    if (inViewport(sectionInView)) {
      navItem.classList.add("active");
    } else {
      navItem.classList.remove("active");
    }
  });
}


setTimeout(function () {
  for (let i = 1; i <= numberOfCards; i++){
    let sectionInView = document.getElementById("section" + i);
    let navName = "#list-item" + i;
    let navItem = document.querySelector(navName);
    if (inViewport(sectionInView)) {
      navItem.classList.add("active");
    } else {
      navItem.classList.remove("active");
    }
  };
}, 0)
*/