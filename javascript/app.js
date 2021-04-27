//function that detects if element is partially in viewport.
//Modified from https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
inViewport = function(element) {
  //get an element's position and position relative to the viewport
  const rect = element.getBoundingClientRect();
  //return true if top and left of an element are in the window and the bottom
  //and right are either in the window or client within a window
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
const numberOfCards = document.getElementsByClassName('landing').length;

for (i = 1; i <= numberOfCards; i++) {
  //create a string that specifies an h2 element within the section
  let item = '#section-' + i + '-title';
  //create a string to link to the item later
  let itemLink = '#section' + i;
  //get the h2 element
  let itemVal = document.querySelector(item);
  //extract the text of the h2 element and store as a variable
  let itemText = itemVal.textContent;
  //create a new list item
  let newLi = document.createElement('li');
  //create text node with the title of the section
  let liText = document.createTextNode(itemText);
  //append the text node to the list item
  newLi.appendChild(liText);
  //give the new list item an ID
  let liID = '#list-item' + i;
  liID.id = liID;
  //apend the list item to the navigation list
  navigationList.appendChild(newLi);
  //store the linked section as a variable
  let target = document.querySelector(itemLink);

  //when the navbar is clicked, scroll smoothly to the specified section
  newLi.addEventListener('click', function () {
    target.scrollIntoView({behavior: 'smooth'})
  });

  //when linked section is partially in view, set the li class to 'active', also
  //make the linked section 'active'
  document.addEventListener('scroll', function () {
    if (inViewport(target)) {
      newLi.classList.add('active');
      target.classList.add('section-active');
    } else {
      newLi.classList.remove('active');
      target.classList.remove('section-active');
    }
  })
}

//hide navbar when scrolling down, show when scrolling up.
//Code modified from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
let prevPos = window.pageYOffset;
window.onscroll = function() {
  let currentPos = window.pageYOffset;
  if (prevPos > currentPos) {
    navigationList.style = 'display: block;';
  } else {
    navigationList.style = 'display: none;';
  }
  //resets Y position
  prevPos = currentPos;
}

//button takes you to the top of the page when clicked
const topButton = document.getElementById('top-btn');
const header = document.getElementById('header');
topButton.addEventListener('click', function () {
  header.scrollIntoView({behavior: 'smooth', block: 'start'})
})

//show the 'scroll to top' button only when the top of the page is not in view
document.addEventListener('scroll', function () {
  if (inViewport(header)) {
    topButton.style.display = 'none';
  } else {
    topButton.style.display = 'block';
  }
})