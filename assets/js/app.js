const boton = document.querySelector("#share");
const modal = document.querySelector(".modal");

boton.addEventListener("click", () => {
    if (modal.classList.contains("active")) {
        modal.classList.remove("active")
    } else {
        modal.classList.add("active")
    }
})