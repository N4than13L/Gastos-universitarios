// calcular semestre
var calcular = document.getElementById("calcular");

function calcular_pasaje(pasaje, dias, resultado) {
  let id = document.getElementById(resultado);
  return (id.innerText = "Total: $ " + pasaje * dias);
}

function calcular_comida(comida, dias, resultado) {
  let id = document.getElementById(resultado);
  return (id.innerText = "Total: $ " + comida * dias);
}

function calcular_folletos(folletos, dias, resultado) {
  let id = document.getElementById(resultado);
  return (id.innerText = "Total: $ " + folletos * dias);
}

// funcion para calcular los gastos mendiante el click del mouse.
calcular.addEventListener("click", (e) => {
  e.preventDefault();

  // presupuesto.
  var gasto_presupuesto = document.getElementById("gasto_presupuesto").value;

  var presupuesto = (document.getElementById("presupuesto").innerHTML =
    gasto_presupuesto);

  // pasaje.
  var gastos_pasaje = document.getElementById("gastos_pasaje").value;
  var pasaje_diario = (document.getElementById("pasaje_diario").innerHTML =
    gastos_pasaje);

  var gastos_pasaje_diario = document.getElementById(
    "gastos_pasaje_diario"
  ).value;
  var total_pasaje_diario = (document.getElementById(
    "total_pasaje_diario"
  ).innerHTML = gastos_pasaje_diario);

  calcular_pasaje(gastos_pasaje, gastos_pasaje_diario, "resultado_del_pasaje");

  // gastos comida.
  var gasto_comida = document.getElementById("gasto_comida").value;
  var comida = (document.getElementById("comida").innerHTML = gasto_comida);

  var gastos_comida_dia = document.getElementById("gastos_comida_dia").value;
  var total_gastos_comida = (document.getElementById(
    "total_gastos_comida"
  ).innerHTML = gastos_comida_dia);

  calcular_comida(gasto_comida, gastos_comida_dia, "resultado_total_comida");

  // folletos.
  var gasto_folleto = document.getElementById("gasto_folleto").value;
  var folletos_libros = (document.getElementById("folletos_libros").innerHTML =
    gasto_folleto);

  var gastos_diarios_folletos = document.getElementById(
    "gastos_diarios_folletos"
  ).value;

  var total_a_pagar_folletos = (document.getElementById(
    "total_a_pagar_folletos"
  ).innerHTML = gastos_diarios_folletos);

  calcular_folletos(
    gasto_folleto,
    gastos_diarios_folletos,
    "resultado_folleto"
  );

  // pago del semestre.
  var gasto_semestre = document.getElementById("gasto_semestre").value;
  var pago_semestre = (document.getElementById("pago_semestre").innerHTML =
    gasto_semestre);

  var total_semestre = (document.getElementById("total_semestre").innerHTML =
    gasto_semestre);
});
