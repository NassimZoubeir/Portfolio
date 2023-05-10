// ------------------------------------------------------------------------------ NAVBAR --------------------------------------------------------------------------------------
// Sélectionne l'élément header et ajoute une classe 'sticky' lorsque la position de défilement est supérieure à 100px
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
header.classList.toggle("sticky", window.scrollY > 100);
});

// Sélectionne l'élément du menu hamburger et la liste de navigation et ajoute/retire la classe 'open' lorsque l'élément est cliqué
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
menu.classList.toggle('bx-x');
navlist.classList.toggle('open');
};

// Ferme la liste de navigation lorsqu'il y a un défilement sur la page
window.onscroll = () => {
menu.classList.remove('bx-x');
navlist.classList.remove('open');
}

// --------------------------------------------------------------------------- ANIMATION HOME ------------------------------------------------------------------------------------
// Affiche progressivement le texte "Développeur Web" lettre par lettre, avec un clignotement à la fin
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

//---------------------------------------------------------------------- CONDITION DU FORMULAIRE --------------------------------------------------------------------
// Vérifie que le champ de nom a au moins 3 caractères
const nameInput = document.getElementById("name");
nameInput.addEventListener("input", () => {
if (nameInput.value.length < 3) {
nameInput.setCustomValidity("Le nom doit contenir au moins 3 caractères");
} else {
nameInput.setCustomValidity("");
}
});

// Vérifie que le champ d'email est au format valide
const emailInput = document.getElementById("email");
function validateEmail(email) {
const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
return regex.test(email);
}
emailInput.addEventListener("input", () => {
if (!validateEmail(emailInput.value)) {
emailInput.setCustomValidity("Adresse email invalide");
} else {
emailInput.setCustomValidity("");
}
});

// ------------------------------------------------------------------- ENVOIE DE L'EMAIL ----------------------------------------------------------------------------
// Envoie un email lors de la soumission du formulaire
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e) => {
e.preventDefault();
console.log('Clicked');

Email.send({
Host: "smtp.elasticemail.com",
Username: "nassimz@outlook.fr",
Password: "44766AF89854EF06119F7869962E5EB33C9C",
To: 'nassimz@outlook.fr',
From: "nassimz@outlook.fr",
Subject: "Test Email",
Body: "Test par Nassim Zoubeir"
}).then(
message => alert(message)
);
})

// ---------------------------------------------------------------------- APPEL API ----------------------------------------------------------------------------------
const apiKey = "32fa87f340afa8257e73875d024490e8"; // clé API
const url = `https://api.openweathermap.org/data/2.5/weather?q=Marseille&lang=fr&appid=${apiKey}`; // URL de l'API OpenWeatherMap

fetch(url) // envoi d'une requête GET à l'API
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok"); // vérification si la réponse est correcte
    }
    return response.json(); // conversion de la réponse en objet JSON
  })
  .then(data => {
    const weatherDiv = document.getElementById("weather"); // récupération de la div avec l'id "weather"
    const temperature = Math.round(data.main.temp - 273.15); // conversion de la température de Kelvin à Celsius et arrondi
    const description = data.weather[0].description; // récupération de la description météo
    const iconCode = data.weather[0].icon; // récupération du code de l'icône météo
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`; // URL de l'icône météo

    // Affichage des informations météo dans la div "weather"
    weatherDiv.innerHTML = `
      <h2>Prévisions météo pour Marseille</h2>
      <p>Il fait ${temperature}°C avec ${description}.</p>
      <img src="${iconUrl}" alt="${description}" />
    `;
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error); // affichage d'une erreur en cas de problème
  });
