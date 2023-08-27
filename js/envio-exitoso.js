document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mostrarMensajeInscripcion").addEventListener("click", function (event) {
    event.preventDefault();
    let alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-dismissible alert-success mt-4";
    alertDiv.setAttribute("role", "alert");

    alertDiv.innerHTML = `<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>¡Inscripción exitosa!</strong> Cierre este mensaje para continuar.`;

    let button = this;
    button.parentNode.insertBefore(alertDiv, button.nextSibling);
  });
});
