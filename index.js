//Referencias
const botonesNumeros = Array.from(document.getElementsByClassName("numero"));
const botonesOperaciones = Array.from(
  document.getElementsByClassName("operacion")
);
const pantallaElement = document.getElementById("pantalla");

//otras variables
let numeroAnterior;

//numeros
botonesNumeros.forEach((boton) =>
  boton.addEventListener("click", numeroClickeado)
);

function numeroClickeado(evento) {
  /* console.log(evento.target.textContent); */
  const eventoProducidoAlClickearNumero = evento.target.textContent;
  pantallaElement.textContent = parseFloat(
    pantallaElement.textContent + eventoProducidoAlClickearNumero
  );
}

//operaciones
botonesOperaciones.forEach((boton) =>
  boton.addEventListener("click", operacionClickeada)
);

function operacionClickeada(evento) {
  const eventoProducidoAlClickearOperacion = evento.target.textContent;
  if (!numeroAnterior) {
    numeroAnterior = pantallaElement.textContent;
  }
  pantallaElement.textContent = 0;
}
