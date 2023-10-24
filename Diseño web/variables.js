// Obtener los elementos HTML
const btnTiposDatos = document.getElementById("btnTiposDatos");
const tiposDatos = document.getElementById("tiposDatos");
const btnSaludar = document.getElementById("btnSaludar");
const saludo = document.getElementById("saludo");
const btnVerificarParImpar = document.getElementById("btnVerificarParImpar");
const parImpar = document.getElementById("parImpar");
const btnMostrarNumeros = document.getElementById("btnMostrarNumeros");
const numeros = document.getElementById("numeros");
const btnDeterminarDiaLaborable = document.getElementById("btnDeterminarDiaLaborable");
const diaLaborable = document.getElementById("diaLaborable");

// Agregar los eventos correspondientes a los elementos HTML
btnTiposDatos.addEventListener("click", mostrarTiposDatos);
btnSaludar.addEventListener("click", saludar);
btnVerificarParImpar.addEventListener("click", verificarParImpar);
btnMostrarNumeros.addEventListener("click", mostrarNumeros);
btnDeterminarDiaLaborable.addEventListener("click", determinarDiaLaborable);

function mostrarTiposDatos() {
  let num = 10;
  let str = "Hola";
  let bool = true;
  let undef = undefined;
  let nulo = null;

  tiposDatos.innerHTML = `
    ${typeof num}<br>
    ${typeof str}<br>
    ${typeof bool}<br>
    ${typeof undef}<br>
    ${typeof nulo}
  `;
}
function saludar() {   
  let nombre = "Profesor";
  saludo.innerHTML = `¡Hola ${nombre}! ¿Cómo estás?`;
}

function verificarParImpar() {
  let numero = 5;

  if (numero % 2 === 0) {
    parImpar.innerHTML = "El número es par";
  } else {
    parImpar.innerHTML = "El número es impar";
  }
}

function mostrarNumeros() {
  numeros.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    numeros.appendChild(li);
  }
}

function determinarDiaLaborable() {
  let dia = "Lunes";

  switch (dia) {
    case "Sábado":
    case "Domingo":
      diaLaborable.innerHTML = "Es fin de semana";
      break;
    default:
      diaLaborable.innerHTML = "Es día laborable";
  }
}
