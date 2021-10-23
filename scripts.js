const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2e3,
  reset: !0,
});
sr.reveal(".navImg", { origin: "left", delay: 400 }),
  sr.reveal(".menuLinks", { origin: "right", delay: 400 }),
  sr.reveal(".header__img", { delay: 400 }),
  sr.reveal(".header__title", { delay: 300 }),
  sr.reveal(".header__parrafo", { delay: 200 }),
  sr.reveal(".button", { delay: 200 }),
  sr.reveal(".article__svg", { origin: "bottom", delay: 100, duration: 2400 }),
  sr.reveal(".illustration", { origin: "left", delay: 200 }),
  sr.reveal(".perfil", { origin: "bottom", delay: 200, distance: "20px" }),
  sr.reveal("#btn-form", { origin: "right", delay: 250, distance: "40px" }),
  window.addEventListener("DOMContentLoaded", () => {
    (form = document.querySelector(".form")),
      (input = document.querySelector("#input")),
      (errorMsg = document.querySelector(".input-error")),
      (valido = document.querySelector(".fa-check-circle")),
      (send = document.querySelector("#btn-form")),
      send.addEventListener("click", (e) => {
        input.value.length > 5
          ? (e.preventDefault(),
            errorMsg.classList.remove("invalido"),
            (input.readOnly = !0),
            valido.classList.add("valido"))
          : errorMsg.classList.add("invalido");
      });
  });
