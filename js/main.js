document.getElementById('btnEnviar').addEventListener('click', function () {
    // obtener campo correo
    var email = document.getElementById('emailInput').value;

    // validar corre
    if (email.trim() === '') {
        // modal vacio
        document.getElementById('modalBody').innerHTML = 'Por favor, ingresa tu dirección de correo electrónico.';
    } else {
        // modal correcto
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            // exitoso
            document.getElementById('modalBody').innerHTML = 'Gracias por registrarte. Recibirás todas las novedades sobre nuestras promociones.';

            // limpiar campo cada 2 seg
            setTimeout(function () {
                document.getElementById('emailInput').value = '';
                location.reload();
            }, 2000);
        } else {
            // modal no valido
            document.getElementById('modalBody').innerHTML = 'Por favor, ingresa una dirección de correo electrónico válida.';
        }
    }

    // mostrar modal
    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    myModal.show();
});


   // menu hamburguesa
   document.querySelector('.navbar-toggler').addEventListener('click', function () {
    // seleccionar menu hamburguesa
    var menu = document.querySelector('#navbarNav');
    // ocultar menu
    menu.classList.toggle('show');
});