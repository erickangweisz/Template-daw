// Ejercicio 6
function validarCampos(form) {
    if (form.campo2.value === form.campo1.value) {
        form.submit();
    } else {
        alert("La repetición de la contraseña no coincide.");
        form.campo2.value = "";
        form.campo2.focus();
        // return true;
    }
}

// Ejercicio 7
function limitarSeleccion(formulario) {
    // el array casilla1 se genera debido a la repetición del valor en el atributo name
    // en lugar de sacar el formulario a partir de la casilla que pasamos como parámetro, pasamos el formulario directamente
    a = formulario.casilla1[0].checked;
    b = formulario.casilla1[1].checked;
    c = formulario.casilla1[2].checked;
    d = formulario.casilla1[3].checked;
    e = formulario.casilla1[4].checked;

    // No es necesario hacer comprobaciones ya que el 0 no suma
    contador = a + b + c + d + e;

    if (contador > 3) {
        alert("Solo puedes seleccionar 3 opciones");
        casilla.checked = false;
    }
}

// Ejercicio 8
function todos(source) {
    checkboxes = document.getElementsByName('casilla2');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    cambiarTexto(source.checked);
}

// Cambia el texto del label del checkbox en función de si está seleccionado o no
function cambiarTexto(check) {
    if (check === true) document.getElementById('lbl_check').innerHTML = 'Deseleccionar todo';
    else document.getElementById('lbl_check').innerHTML = 'Seleccionar todo';
}