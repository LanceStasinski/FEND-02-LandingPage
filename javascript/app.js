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
      rect.bottom <= (window.innerHeight) &&
      rect.right <= (window.innerWidth)
  );
}

//build the menu using section information

const navigationList = document.getElementById('nav-list');
//get the number of sections. The number will be used in the following for loop.
const landings = document.getElementsByClassName('landing').length;


//This loop was originally inspired by https://mischegoss.github.io/Udacity-Landing-Page/.
//The first submission of this project was flagged as plagiarism due to being too
//similar to the code at the link above. I have since significantly reduced the
//code and have used new element properties.


for (i = 1; i <= landings; i++) {
  //Create a nav list item
  let newLi = document.createElement('li');
  newLi.innerHTML = "Section " + i;
  navigationList.appendChild(newLi);

  let section = document.querySelector("#section" + i);
  //If the user scrolls, the section and its associated nav list item recieve an
  //active style
  document.addEventListener('scroll', function () {
    if (inViewport(section)) {
      newLi.classList.add('active');
      section.classList.add('section-active');
    } else {
      newLi.classList.remove('active');
      section.classList.remove('section-active');
    }
  })

  //when the user clicks the navigation item, the pages smoothly scrolls down to
  //the start of the associated section
  newLi.addEventListener('click', function () {
    section.scrollIntoView({behavior: 'smooth', block: "start"})
  });

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