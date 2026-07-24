// DOM
const correo = document.getElementById("correo")

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(correo.value)
})