// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (!nombre) {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este nombre ya está en la lista.");
    return;
  }

  amigos.push(nombre);
  actualizarLista();
  input.value = "";
  input.focus();
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  if (!lista) {
    console.error("El elemento 'listaAmigos' no fue encontrado en el DOM.");
    return;
  }

  lista.innerHTML = amigos
    .map(amigo => `<li>${amigo}</li>`) 
    .join("");
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debe haber al menos dos amigos para realizar el sorteo.");
    return;
  }

  const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

  const resultado = document.getElementById("resultado");
  if (!resultado) {
    console.error("El elemento 'resultado' no fue encontrado en el DOM.");
    return;
  }

  resultado.innerHTML = 
    `<li>El amigo secreto sorteado es: <strong>${amigoSecreto}</strong></li>`; 
}
