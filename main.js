const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

// ------------------------------------------------------------------ ANIMATION ------------------------------------------------------------------------------------

var text = "Développeur Web";
var index = 0;

function dev() {
    var typingDiv = document.getElementById("dev");
    typingDiv.innerHTML = text.substring(0, index) + "|";
    index++;
    if (index > text.length) {
        index = 0;
    }
    setTimeout(dev, 180);
}
dev();

// SANS LA REPETITION 
// var text = "Développeur Web";
// var index = 0;
// var typingDiv = document.getElementById("dev");

// function dev() {
//     typingDiv.innerHTML = text.substring(0, index) + "|";
//     index++;
//     if (index > text.length) {
//         clearInterval(intervalId);
//         typingDiv.innerHTML = text; // pour retirer le curseur
//     }
// }

// var intervalId = setInterval(dev, 150);
//------------------------------------------------------------------- FORMULAIRE DE VALIDATION --------------------------------------------------------------------

const nameInput = document.getElementById("name");

nameInput.addEventListener("input", () => {
    if (nameInput.value.length < 3) {
        nameInput.setCustomValidity("Le nom doit contenir au moins 3 caractères");
    } else {
        nameInput.setCustomValidity("");
    }
});

const emailInput = document.getElementById("email");

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

emailInput.addEventListener("input", () => {
    if (!validateEmail(emailInput.value)) {
        emailInput.setCustomValidity("Adresse email invalide");
    } else {
        emailInput.setCustomValidity("");
    }
});

const submit = document.getElementsByClassName('submit')[0];

submitEvent.addEventListener('submit', (e)=> {
  e.preventDefault();
  console.log("Clicked");
})

// ----------------------------------------------------------- ENVOIE DE L'EMAIL ------------------------------------------------------------------------------

// ---------------------------------------------------------------------- API ----------------------------------------------------------------------------------
const apiKey = "32fa87f340afa8257e73875d024490e8";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Utiliser les données pour afficher la météo de Paris
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });

