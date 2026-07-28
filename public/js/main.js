// DOM
const correo = document.getElementById("correo")
const password = document.getElementById("contrasenia")

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(correo.value)
    
})

async function obtenercelulares() {
    const url = "http://localhost:8000/celulares"

    try {
        // Escribir codigo
        const respuesta = await fetch(url)

        if (!respuesta.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const resultado = await respuesta.json()
        console.log(resultado)
    }   catch (error) {
        console.error(error.message)
    }
}

async function iniciarSesion(correo, password) {
    const url = "http://localhost:8000/iniciar-sesion"

    try {
        // Escribir codigo
        const respuesta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ correo: correo, password: password})
        })

        if (!respuesta.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const resultado = await respuesta.json()
        console.log(resultado)
    }   catch (error) {
        console.error(error.message)
    }
}

 obtenercelulares()