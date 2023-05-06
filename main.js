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



// ----------------------------------------------------------- ENVOIE DE L'EMAIL ------------------------------------------------------------------------------

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e)=> {
  e.preventDefault();
  console.log('Clicked');

//   Email.send({
//     SecureToken : "cb6fac5d-a9e6-4047-bdc5-adb0d1bc5cee",
//     To : 'nassimz@outlook.fr',
//     From : "nassimz@outlook.fr",
//     Subject : "Test email",
//     Body : "Test par Nassim Zoubeir"
// }).then(
//   message => alert(message)
// )

Email.send({
  Host : "smtp.elasticemail.com",
  Username : "nassimz@outlook.fr",
  Password : "44766AF89854EF06119F7869962E5EB33C9C",
  To : 'nassimz@outlook.fr',
  From : "nassimz@outlook.fr",
  Subject : "Test Email",
  Body : "Test par Nassim Zoubeir"
}).then(
message => alert(message)
);
})



// ---------------------------------------------------------------------- API ----------------------------------------------------------------------------------
const apiKey = "32fa87f340afa8257e73875d024490e8";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Marseille&appid=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    const weatherDiv = document.getElementById("weather");
    const temperature = Math.round(data.main.temp - 273.15);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

    weatherDiv.innerHTML = `
      <h2>Prévisions météo pour Marseille</h2>
      <p>Il fait ${temperature}°C avec ${description}.</p>
      <img src="${iconUrl}" alt="${description}" />
    `;
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
