document.getElementById('btnEnviar').addEventListener('click', function () {
    // Obtener el valor del correo electrónico
    var email = document.getElementById('emailInput').value;

    // Validar si el correo está vacío o no
    if (email.trim() === '') {
        // Mostrar modal de correo vacío
        document.getElementById('modalBody').innerHTML = 'Por favor, ingresa tu dirección de correo electrónico.';
    } else {
        // Validar si el correo tiene un formato válido
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            // Mostrar modal de registro exitoso
            document.getElementById('modalBody').innerHTML = 'Gracias por registrarte. Recibirás todas las novedades sobre nuestras promociones.';

            // Limpiar el campo de correo electrónico después de 2 segundos (puedes ajustar el tiempo según tus necesidades)
            setTimeout(function () {
                document.getElementById('emailInput').value = '';
                location.reload();
            }, 2000);
        } else {
            // Mostrar modal de correo inválido
            document.getElementById('modalBody').innerHTML = 'Por favor, ingresa una dirección de correo electrónico válida.';
        }
    }

    // Mostrar el modal
    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    myModal.show();
});


   // Manejo del evento de clic para el botón de hamburguesa
   document.querySelector('.navbar-toggler').addEventListener('click', function () {
    // Selecciona el elemento que contiene el menú
    var menu = document.querySelector('#navbarNav');
    // Alterna la clase 'show' para mostrar u ocultar el menú
    menu.classList.toggle('show');
});