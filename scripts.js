form = document.querySelector(".form");
input = document.querySelector("#input");
errorMsg = document.querySelector(".input-error");
valido = document.querySelector(".fa-check-circle");
send = document.querySelector("#btn-form");
send.addEventListener("click", (e) => {
  if (input.value.length > 5) {
    e.preventDefault();
    errorMsg.classList.remove("invalido");
    input.readOnly = !0;
    valido.classList.add("valido");
  } else {
    errorMsg.classList.add("invalido");
  }
});