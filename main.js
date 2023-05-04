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

// ------------------------------- API ----------------------------------
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

