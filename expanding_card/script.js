const panels = document.querySelectorAll('.panel'); // will select all the elements with a class of panel and put them in a node list (similar to an array)

// target the panels node list and use a forEach with takes an arrow function tarting each panel
// listen for a click event on each panel & change the class to active
// before changing the class to active we remove all active class present so that at any time we only have one active class
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

// console.log(panels[0]);
