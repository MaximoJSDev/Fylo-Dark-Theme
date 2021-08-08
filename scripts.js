console.log("hey ;D");
form = document.querySelector(".form");
input = document.querySelector("#input");
errorMsg = document.querySelector(".input-error");
valido = document.querySelector(".fa-check-circle");
send = document.querySelector("#btn-form");

send.addEventListener("click", (e) => {
  if (input.value.length > 5) {
    errorMsg.classList.remove("invalido");
    e.preventDefault();

    input.readOnly = true;
    valido.classList.add("valido");
  } else {
    errorMsg.classList.add("invalido");
  }
});

window.sr = ScrollReveal();

sr.reveal(".navImg", {
  duration: 1200,
  origin: "right",
  distance: "-125px",
  easing: "cubic-bezier(.48,.21,.64,.82)",
  delay: 0,
});

sr.reveal(".menuLinks", {
  duration: 1200,
  origin: "left",
  distance: "-125px",
  easing: "cubic-bezier(.48,.21,.64,.82)",
  delay: 0,
});

sr.reveal(".article", {
  duration: 1300,
  origin: "top",
  distance: "-120px",
  easing: "cubic-bezier(.65,.36,.61,.65)",
  delay: 600,
});

sr.reveal("#ultimate", {
  duration: 1400,
  origin: "right",
  distance: "-300px",
  easing: "cubic-bezier(.65,.36,.61,.65)",
  delay: 600,
});

sr.reveal(".card", {
  duration: 1200,
  origin: "right",
  distance: "-240px",
  easing: "cubic-bezier(.65,.36,.61,.65)",
  delay: 600,
});

sr.reveal(".form", {
  duration: 1200,
  origin: "left",
  distance: "-200px",
  easing: "cubic-bezier(.65,.36,.61,.65)",
  delay: 500,
});

sr.reveal(".footer", {
  duration: 2000,
  origin: "top",
  distance: "-250px",
  easing: "cubic-bezier(.38,.38,.76,.78)",
  delay: 650,
});
