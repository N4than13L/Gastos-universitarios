function estado(pasajes, comida, folletos, semestre, presupuesto, resultado) {
  let id = document.getElementById(resultado);

  var presupuesto_numerico = Number.parseInt(presupuesto);
  var pasajes_numericos = Number.parseInt(pasajes);
  var comida_numerica = Number.parseInt(comida);
  var folletos_numerico = Number.parseInt(folletos);
  var semestre_numerico = Number.parseInt(semestre);

  var gastos_sin_semestre = document.getElementById(
    "gastos_sin_semestre"
  ).value;

  // salidar los semestres.
  var total_gastos =
    pasajes_numericos + comida_numerica + folletos_numerico + semestre_numerico;

  var gastos_sin_semestre =
    pasajes_numericos + comida_numerica + folletos_numerico;
  console.log(gastos_sin_semestre);

  // console.log(total_gastos - presupuesto_numerico);

  return (id.innerHTML =
    "Dinero restante o sobrante $: " +
    Number.parseInt(total_gastos - presupuesto_numerico));
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

  var gastos_sin_semestre = document.getElementById("gastos_sin_semestre");

  document.getElementById("presupuesto_inicial").innerText =
    Number.parseInt(gasto_presupuesto);

  gastos_sin_semestre.innerHTML =
    Number.parseInt(gasto_semestre) +
    Number.parseInt(gasto_folleto) +
    Number.parseInt(gastos_pasaje);

  estado(
    gasto_comida,
    gasto_folleto,
    gastos_pasaje,
    gasto_semestre,
    gasto_presupuesto,
    "total_a_gastar"
  );
});
