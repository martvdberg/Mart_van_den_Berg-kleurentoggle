// Variables
const menu = document.querySelector("#menu-color");
const menuItems = document.querySelectorAll("#menu-color li");
const radioBtns = document.querySelectorAll("main input");
const colorName = [];
const classes = [];

// Set colorName from value of innerHTML menuItems
// Set classes from classList value menuItems
for (i = 0; i < menuItems.length; i++) {
  colorName.push(menuItems[i].innerHTML);
  classes.push(menuItems[i].classList.value);
}

// Show and hide the menu
menu.parentElement.addEventListener("mouseenter", () => {
  menu.classList.add("show-menu");
});

menu.parentElement.addEventListener("mouseleave", () => {
  menu.classList.remove("show-menu");
});

// Set event listners to the menu items and radio buttons
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", () => {
    changeBackground(i);
  });
  radioBtns[i].addEventListener("click", () => {
    changeBackground(i);
  });
}

// Set keystroke events
document.body.addEventListener("keydown", (pressedKey) => {
  let number = parseInt(pressedKey.key) - 1;
  if (number >= 0 && number < classes.length) {
    changeBackground(number);
  }
});

// Function to change the backgroundcolor, button toggle and add text in h1
const changeBackground = (add) => {
  for (i = 0; i < classes.length; i++) {
    document.body.classList.remove(classes[i]);
  }
  document.body.classList.add(classes[add]);
  menu.classList.remove("show-menu");
  radioBtns[add].checked = true;
  document.querySelector("#color-text span").innerHTML = colorName[add];
};

// Set default page load
changeBackground(0);
