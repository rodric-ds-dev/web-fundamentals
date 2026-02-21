const textElement = document.querySelector(".typewriter-text");
const texts = [
  "Data Scientist",
  "Problem Solver & Analyst",
  "Translating Raw Data to Art",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

const type = () => {
  currentText = texts[count];

  // Si está borrando, quita una letra. Si está escribiendo, añade una.
  if (isDeleting) {
    letter = currentText.slice(0, --index);
  } else {
    letter = currentText.slice(0, ++index);
  }

  textElement.textContent = letter;

  // Velocidad por defecto
  let typeSpeed = 100;

  // Si está borrando, que sea más rápido (como cuando presionas Backspace)
  if (isDeleting) {
    typeSpeed /= 2;
  }

  // Lógica de cambio de estado
  if (!isDeleting && letter.length === currentText.length) {
    // Ya terminó de escribir la palabra: pausa y cambia a borrar
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && letter.length === 0) {
    // Ya terminó de borrar: cambia a la siguiente palabra
    isDeleting = false;
    count = (count + 1) % texts.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
};

type();
