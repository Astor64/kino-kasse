"use strict";

function main() {
  let input = document.getElementById("age");
  let age = input.value;

  // < 6 Jahre alt oder > 60 Jahre alt -> Sonderpreis 4 Euro

  // Für alle anderen -> 6.50 Euro

  if (age <= 6 || age >= 60) {
    alert("Preis beträgt 4€");
  } else {
    alert("Preis beträgt 6.50€");
  }
}
