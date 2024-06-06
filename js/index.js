function multiplicar_campos(campo, mult, resultado) {
  let id = document.getElementById(resultado);
  return (id.innerText = "Total $: " + campo * mult);
}

function total_gastos(
  pasajes,
  dias_pasaje,
  comida,
  dias_comida,
  folletos,
  dias_folletos,
  resultado
) {
  let id = document.getElementById(resultado);

  var gastos_pasajes = pasajes * dias_pasaje;
  var gastos_comida = comida * dias_comida;
  var gastos_folletos = folletos * dias_folletos;

  var total_gastos = gastos_pasajes + gastos_comida + gastos_folletos;

  console.log(total_gastos);

  return (id.innerText = "Total $: " + total_gastos);
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

  var gastos_pasaje_diario = document.getElementById(
    "gastos_pasaje_diario"
  ).value;

  multiplicar_campos(
    gastos_pasaje,
    gastos_pasaje_diario,
    "resultado_del_pasaje"
  );

  //---------------- gastos comida. ---------------
  var gasto_comida = document.getElementById("gasto_comida").value;

  var gastos_comida_dia = document.getElementById("gastos_comida_dia").value;

  multiplicar_campos(gasto_comida, gastos_comida_dia, "resultado_total_comida");

  // ---------------------- folletos ------------------------------.
  var gasto_folleto = document.getElementById("gasto_folleto").value;

  var gastos_diarios_folletos = document.getElementById(
    "gastos_diarios_folletos"
  ).value;

  multiplicar_campos(
    gasto_folleto,
    gastos_diarios_folletos,
    "resultado_folleto"
  );

  // ----------------------- pago del semestre. --------------------
  var gasto_semestre = document.getElementById("gasto_semestre").value;
  var pago_semestre = (document.getElementById("pago_semestre").innerHTML =
    gasto_semestre);

  var gastos_diarios = (document.getElementById("gastos_diarios").innerHTML =
    gasto_semestre);

  /*    
  
  pasajes,
  dias_pasaje,
  comida,
  dias_comida,
  folletos,
  dias_folletos,
  pago_semestre,
  resultado
  
  */

  total_gastos(
    pasaje_diario,
    gastos_pasaje_diario,
    comida,
    gastos_comida_dia,
    gasto_folleto,
    gastos_diarios_folletos,
    "total_a_gastar"
  );
});
