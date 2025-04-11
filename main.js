//EKHONENI GOURMET PROJECT CODE

//FRONT PAGE BUTTON NAVIGATION - START

let x = document.getElementById('buyBTN');
document.getElementById("buyBTN").addEventListener("click", function() {
    window.location.href = 'reservation.html';
});

let y = document.getElementById('exploreBTN');
document.getElementById("exploreBTN").addEventListener("click", function() {
    window.location.href = 'menu.html';
});

let z = document.getElementById('aboutBTN');
document.getElementById("aboutBTN").addEventListener("click", function() {
    window.location.href = 'about.html';
});

let a = document.getElementById('reserveBTN');
document.getElementById("reserveBTN").addEventListener("click", function() {
    window.location.href = 'reservation.html';
});

//FRONT PAGE BUTTON NAVIGATION - END

//Event Handler for Register Back Button
let rgBackBTN = document.getElementById('regBackBTN');
rgBackBTN.addEventListener("click", function(){  
    window.location.href='login.html';
});  

//Event Handler for Register Button
let rgBTN = document.getElementById('rgBTN');
document.getElementById("rgBTN").addEventListener("click", function() {
    window.location.href = 'login.html';
});

/* REGISTRATION & LOGIN */ 

//RESERVATION PAGE - START

let R = document.getElementById('resBTN');
let B = document.getElementById('backBTN');

document.getElementById("resBTN").addEventListener("click", function(){
    window.location.href='menu.html';
});

document.getElementById("backBTN").addEventListener("click", function(){
    window.location.href='menu.html';
});

/* contact form functionality */
  let clearBTN = document.getElementById('clearBTN');
  document.getElementById("clearBTN").addEventListener("click", function(){
    window.location.href='menu.html';
});

  let submitBTN = document.getElementById('contactusBTN');
  document.getElementById("contactusBTN").addEventListener("click", function(){
    window.location.href='menu.html';
});

/* REGISTER PAGE */

//Button Navigation
function resNav(){
document.getElementById("resBTN").addEventListener("click", function(){
    window.location.href='paygate.html';
});
}

          




