function estado(pasajes, comida, folletos, semestre, resultado) {
  let id = document.getElementById(resultado);

  pasajes_numericos = Number.parseInt(pasajes);
  comida_numerica = Number.parseInt(comida);
  folletos_numerico = Number.parseInt(folletos);
  semestre_numerico = Number.parseInt(semestre);

  var total_gastos = pasajes_numericos + comida_numerica + folletos_numerico;

  return (id.innerHTML = "Gastos diarios $: " + total_gastos);
}

// calcular semestre
var calcular = document.getElementById("calcular");

// funcion para calcular los gastos mendiante el click del mouse.
calcular.addEventListener("click", (e) => {
  e.preventDefault();

  // -------------------------- presupuesto. ---------------------------------
  var gasto_presupuesto = document.getElementById("gasto_presupuesto").value;

  var presupuesto = (document.getElementById("presupuesto").innerHTML =
    gasto_presupuesto);

  // -------------------------- pasaje. ----------------------------
  var gastos_pasaje = document.getElementById("gastos_pasaje").value;

  document.getElementById("pasaje_diario").innerHTML = gastos_pasaje;

  //---------------- gastos comida. ---------------
  var gasto_comida = document.getElementById("gasto_comida").value;
  document.getElementById("comida").innerHTML = gasto_comida;

  // ---------------------- folletos ------------------------------.
  var gasto_folleto = document.getElementById("gasto_folleto").value;
  document.getElementById("folleto").innerHTML = gasto_folleto;

  // ----------------------- pago del semestre. --------------------
  var gasto_semestre = document.getElementById("gasto_semestre").value;

  var gastos_diarios = (document.getElementById("gastos_diarios").innerHTML =
    gasto_semestre);

  estado(
    gasto_comida,
    gasto_folleto,
    gastos_pasaje,
    gasto_semestre,
    "total_a_gastar"
  );
});
