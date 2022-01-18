// "use strict";

// ----------------------------
// CANVAS
// ----------------------------

// function draw() {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");

//   ctx.fillStyle = "green"; // fillStyle => style de remplissage

//   ctx.fillRect(50, 50, 50, 150); // (axe x, axe y, taille, taille) fillRect => taille de remplissage
//   // rect => rectangle

//   ctx.fillStyle = "rgba(0, 100, 200, 0.5)";
//   ctx.fillRect(100, 30, 100, 50);

//   ctx.fillStyle = "rgba(0, 100, 200, 0.5)";
//   ctx.fillRect(10, 25, 100, 100);
//   ctx.clearRect(22, 15, 50, 50); // clearRect => effacer l'endroit du rectangle
//   ctx.strokeRect(125, 75, 55, 50); // rectangle en ligne , en border

//   ctx.fillStyle = "rgba(200,100,200,0.8)";
//   ctx.beginPath();
//   ctx.moveTo(180, 150);
//   ctx.lineTo(100, 75);
//   ctx.lineTo(120, 150);
//   ctx.fill();
// }
// window.addEventListener("load", draw);

// ----------------------------
// TRY CATCH
// ----------------------------

try {
  // test un block de code
  maFonction();
} catch (err) {
  // console.log(err);
}

function isValidJSON(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch (error) {
    return false;
  }
}

// console.log(isValidJSON(''));

// Finally
try {
  // test un block de code
  maFonction();
} catch (error) {
  // console.log(error);
} finally {
  // console.log("Nous sommes a la fin");
}

// Throw
function isNumber(num) {
  if (isNaN(num)) {
    throw "Not a number";
  } else {
    console.log("c'est un nombre");
  }
  // Plein de code
}

try {
  isNumber("6332d1");
} catch (error) {
  // console.log("Erreur: " + error);
}

// ----------------------------
// STRICT MODE
// ----------------------------

voiture = "honda";
console.log(voiture);

// ----------------------------
// STRICT MODE
// ----------------------------