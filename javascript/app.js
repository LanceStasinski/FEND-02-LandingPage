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

  newLi.addEventListener( ,)
}

//if section is in view, set navbar link to active
