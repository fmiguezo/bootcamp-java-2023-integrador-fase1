document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    autoplay: 3000,
    animationDuration: 500,
    // Otras opciones de configuración aquí
    perView: 1, // Mostrar un solo elemento a la vez
    focusAt: "center", // Asegura que el carrusel esté centrado
    navigation: {
      bullets: ".glide__bullet", // Selector de los indicadores
    },
  }).mount();
});
