//function that detects if the whole element is in viewport or if the size of the
//element is greater than the inner height of the window (maintains active
//styling when an element is larger than the viewport due to small screen size.)
//Modified from https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
//In a previous submission, this function only detected if a whole object was in
//the viewport which was problematic if the viewport height was less that the
//height of an element.

inViewport = function (element) {
  const rect = element.getBoundingClientRect();
  return(
    (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
    (rect.top <= window.innerHeight && rect.bottom >= window.innerHeight)
  );
}

//build the menu using section information

const navigationList = document.getElementById('nav-list');

//get the number of sections. The number will be used in the following for loop.
const landings = document.getElementsByClassName('landing').length;

//This loop was originally inspired by https://mischegoss.github.io/Udacity-Landing-Page/,
// but I have since significantly reduced the code and have used new element properties.

for (i = 1; i <= landings; i++) {
  //Create a nav list item
  let newLi = document.createElement('li');
  newLi.innerHTML = "Section " + i;
  navigationList.appendChild(newLi);
  let section = document.querySelector("#section" + i);

  document.addEventListener('scroll', function () {
    //show the nav bar for 5 seconds when the user scrolls
    navigationList.style = 'display: block;';
    setTimeout(function () {
    navigationList.style = 'display: none';
    }, 5000);

    //add active styling to the navigation items and sections if the sections
    //are in the viewport
    if (inViewport(section)) {
      newLi.classList.add('active');
      section.classList.add('section-active');
    } else {
      newLi.classList.remove('active');
      section.classList.remove('section-active');
    }
  });

  //when the user clicks the navigation item, the pages smoothly scrolls down to
  //the start of the associated section
  newLi.addEventListener('click', function () {
    section.scrollIntoView({behavior: 'smooth', block: "start"})
  });
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
