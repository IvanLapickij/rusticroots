// Tabbed Menu
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-red";
  }
  document.getElementById("myLink").click();

  var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// MENU images - on click open new window

BurgerMenu = () => {
window.open("menu_pdf/MENU_BURGER_A4ai.pdf")
}
JustForKids = () => {
window.open("menu_pdf/KIDS_MENU.pdf")
}
EarlyBird = () => {
window.open("menu_pdf/MENU_EARLY_A4.pdf")
}
DayMenu = () => {
  window.open("menu_pdf/MENU_DAYMENU_A3.pdf")
}
ÀLaCarte = () => {
  window.open("menu_pdf/menu_lacarte.pdf")
}
DrinksMenu= () => {
  window.open("menu_pdf/DRINKS_MENU.pdf")
}
WhiteWine = () => {
  window.open("menu_pdf/White_Wine.pdf")
}
RedWine = () => {
  window.open("menu_pdf/Red_Wine.pdf")
}
Draught = () => {
  window.open("menu_pdf/Draught.pdf")
}

// location on
Location = () => {
  window.open(href="https://www.google.com/maps/search/rustic+roots+restaurant/@53.4237036,-7.9409355,18.75z")
}


function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
// const menu_list = {
//   BurgerMenu:"MENU_BURGER_A4ai.pdf",
//   EarlyBird:"/menu/KIDS_MENU",
//   DayMenu:"/menu",
//   ÀLaCarte:"/menu",
//   JustForKids:"/menu",
//   DrinksMenu:"/menu",
//   WhiteWine:"/menu",
//   RedWine:"/menu",
//   Draught:"/menu"

// }
