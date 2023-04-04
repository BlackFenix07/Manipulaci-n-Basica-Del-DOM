const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#resultado");

// btn.addEventListener("submit", sumarInputsValues);

// function sumarInputsValues(event) {
//   console.log({event});
//   event.preventDefault();
//   const sumaInputs = input1.value + input2.value;
//   pResultado.innerHTML = "Resultado: " + sumaInputs;
// }

btn.addEventListener("click", btnOnClick);

function btnOnClick() {
  const sumaInputs = input1.value + input2.value;
  pResultado.innerHTML = "Resultado: " + sumaInputs;
}