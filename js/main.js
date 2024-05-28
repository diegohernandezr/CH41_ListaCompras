/// El código va aquí ///
//codigo va aqui//

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let txtNombre = document.getElementById("txtNombre");
let txtNumber = document.getElementById("txtNumber");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarCantidad() {
  if (txtNombre.value.lenght == 0) {
    return false;
  }// if lenght
  return true;
}//validar cantidad

btnAgregar.addEventListener("click", function (event) {
  event.preventDefault();
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtNombre.style.border = "";
    txtNumber.style.border = "";
  if (txtNombre.value.lenght <3) {
    alertValidacionesTexto.innerHTML = "El <strong> nombre <strong/> no es correcto";
    alertValidacionesTexto.style.display = "block";
    txtNombre.style.border = "solid red medium";
  }
  if (!validarCantidad()) {
    alertValidacionesTexto.innerHTML += " El <strong>Numero</strong> no es correcto";
    alertValidaciones.style.display = "block";
    txtNombre.style.border = "solid red medium";
  }
});

btnClear.addEventListener("click", function (event) {
  event.preventDefault();
  txtNombre.value = "";
  txtNumber.value = "";
});