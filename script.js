var alumnosUsuario = document.getElementById("alumnos");
var cuotaUsuario = document.getElementById("monto-principal");
var extraUsuario = document.getElementById("monto-secundario");
var gastosUsuario = document.getElementById("gastos");
var botonUsuario = document.getElementById("boton");
var total = document.getElementById("total");

botonUsuario.addEventListener("click", calcularTotal);

function calcularTotal()
{
    total.innerHTML = (alumnosUsuario.value * cuotaUsuario.value) - gastosUsuario.value;
}
