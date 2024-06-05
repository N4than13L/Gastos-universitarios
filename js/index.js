function calcular_costos(actividad, dias, resultado) {
  let id = document.getElementById(resultado);
  return (id.innerText = "Total: $ " + actividad * dias);
}

function total_gastos(pasajes, comida, folletos, resultado) {
  let id = document.getElementById(resultado);
  return (id.innerText =
    "Total de gastos: $ " +
    parseInt(pasajes, 0) +
    parseInt(comida, 0) +
    folletos);
}

// calcular semestre
var calcular = document.getElementById("calcular");

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

  calcular_costos(gastos_pasaje, gastos_pasaje_diario, "resultado_del_pasaje");

  // gastos comida.
  var gasto_comida = document.getElementById("gasto_comida").value;
  var comida = (document.getElementById("comida").innerHTML = gasto_comida);

  var gastos_comida_dia = document.getElementById("gastos_comida_dia").value;
  var total_gastos_comida = (document.getElementById(
    "total_gastos_comida"
  ).innerHTML = gastos_comida_dia);

  calcular_costos(gasto_comida, gastos_comida_dia, "resultado_total_comida");

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

  calcular_costos(gasto_folleto, gastos_diarios_folletos, "resultado_folleto");

  // pago del semestre.
  var gasto_semestre = document.getElementById("gasto_semestre").value;
  var pago_semestre = (document.getElementById("pago_semestre").innerHTML =
    gasto_semestre);

  var gastos_diarios = (document.getElementById("gastos_diarios").innerHTML =
    gasto_semestre);

  total_gastos(
    "resultado_del_pasaje",
    "resultado_total_comida",
    "resultado_folleto",
    "total_a_gastar"
  );
});
