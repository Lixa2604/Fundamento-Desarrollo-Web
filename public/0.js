const categoria_id = document.getElementById("categoria")

formulario.addEventListener("submit", (Event) => {
    event.preventDefault()

    obtenerCategoria(categoria_id.value)
})

async function obtenerCategoria(categoria_id) {
    const url = `http://localhost:8000/categorias/${categoria_id}`

    try {
        const respuesta = await fetch(url)
        
        if (!respuesta.ok) {
            throw new Error(`Estado de respuesta: ${respuesta.status}`)
        }

        const resultado = await respuesta.json()
        console.log(resultado)
    }   catch (error) {
        console.error(error.message)
    }
}