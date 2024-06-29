const boton = document.getElementById("fetchJoke")
const contenedor = document.getElementById("jokeList")

const traerbroma = async () => {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random")
        if (!response.ok){
            throw new Error ("ha habido un error en la peticion")
        }
        else {
            const data = await response.json()
            let plantilla = `<div class="nuevabroma">
           
            <p>${data.value}</p>
            <button class="boton1" onClick="eliminardiv(this)">eliminar</button>
            
            </div>`
            contenedor.innerHTML += plantilla
            guardar()
        }
    }
    catch(error){
        console.log("ha habido un error en la vuelta de los datos");
    }
}
boton.addEventListener('click', () => {
    traerbroma()
  
})
const eliminardiv = (elemento) => {
    elemento.closest(".nuevabroma").remove()
  guardar()
}
const guardar = () => {
    let contenido = document.getElementById("jokeList").innerHTML
    localStorage.setItem("contenido", contenido)

}
const cargardatos = () => {
    let contenidoguardado = localStorage.getItem("contenido")
    if (contenidoguardado){
        document.getElementById("jokeList").innerHTML = contenidoguardado
    }
}
cargardatos()