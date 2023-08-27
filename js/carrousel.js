document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    autoplay: 3000,
    animationDuration: 500,
    perView: 1,
    focusAt: "center",
    navigation: {
      bullets: ".glide__bullet",
    },
  }).mount();
});
