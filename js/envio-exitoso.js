document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mostrarMensajeInscripcion").addEventListener("click", function (event) {
    const mensaje = `<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>¡Inscripción exitosa!</strong> Cierre este mensaje para continuar.`;
    mostrarAlerta.call(this, event, mensaje);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mostrarMensajeColaborar").addEventListener("click", function (event) {
    const mensaje = `<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>¡Envío exitoso!</strong> Cierre este mensaje para continuar.`;
    mostrarAlerta.call(this, event, mensaje);
  });
});

function mostrarAlerta(event, mensaje) {
  event.preventDefault();
  let alertDiv = document.createElement("div");
  alertDiv.className = "alert alert-dismissible alert-success mt-4";
  alertDiv.setAttribute("role", "alert");

  alertDiv.innerHTML = mensaje;

  let button = this;
  button.parentNode.insertBefore(alertDiv, button.nextSibling);
}
