// a. Crear un array donde vamos a guardar las notas
//b. Agregar un par de notas de prueba como la siguiente

let notas = [
    { id: 1, titulo: 'comprar el pan', texto: 'comprar el pan en la panaderia', realizada: false },
    { id: 2, titulo: 'sacar el perro', texto: 'sacar al perro a orinar en la mañana', realizada: true },
    { id: 3, titulo: 'hacer ejercicio', texto: 'ir a trotar a las 7 pm', realizada: false }
]


//c. Crear una variable idGlobal e inicializala en el mismo valor del ultimo id que creaste manualmente, usaremos esto como control de las notas.

let idGlobal = 3;

// e. Crear una función que pinte las notas en forma de tarjetas dentro del div contenedor.

function pintarNotas() {
    let notasContainer = document.getElementById('note-container');
    //k. Agregar una validación en la función que pinta las tarjetas, la cual deberá mostrar 
//un mensaje dentro del div contenedor que diga NO HAY NOTAS PARA MOSTRAR 
//en caso de no haber elementos en el array 
    if(notas.length === 0){
        notasContainer.innerHTML = '<div class="alert alert-danger" role="alert">NO HAY NOTAS PARA MOSTRAR</div>';
        return
    }
    notasContainer.innerHTML = '';
    notas.forEach(nota => {
        let notaDiv = document.createElement('div');
        // notaDiv.classList.add('nota');

        notaDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
  <div class="form-check">
  <input class="form-check-input"  type="checkbox" value="" id="flexCheckIndeterminate" onClick="marcarRealizada(${nota.id})"  ${nota.realizada?  "checked": ""}>
  <label class="form-check-label" for="flexCheckIndeterminate">
  <h5 class="card-title">${nota.titulo}</h5>
  </label>
</div>
    <p class="card-text">${nota.texto}</p>
    <a href="#" class="btn btn-danger" onclick="borrarNota(${nota.id})" >borrar nota</a>
  </div>
</div>
    `;
        notasContainer.appendChild(notaDiv);
    })
}

pintarNotas()

//g. Crear una función agregarNota la cual necesitara 2 parametros: titulo y texto. 
//La cual deberá crear un objeto de tipo nota como en el punto b y agregarlo al array de notas

function agregarNota(titulo, texto) {
    let nuevaNota = {
        id: ++idGlobal,
        titulo: titulo,
        texto: texto
    }
    notas.push(nuevaNota);
}

//h. Al presionar el botón guardar deberá guardar en variables los valores de los inputs 
//y verificar si no están vacíos, en cuyo caso deberá llamar a la función que agregara 
//la nueva nota y paso seguido volver a pintar las notas en la pantalla.


window.saveNote = function () {
    let noteTitle = document.getElementById('note-title');
    let noteText = document.getElementById('note-text');

    let titulo = noteTitle.value.trim()
    let texto = noteText.value.trim()

    if (titulo !== '' && texto !== '') {
        agregarNota(titulo, texto)
        pintarNotas();
        noteTitle.value = '';
        noteText.value = '';
    } else {
        alert('ingresa algun texto en los campos')
    }


}

window.clearNote = function () {
    let noteTitle = document.getElementById('note-title');
    let noteText = document.getElementById('note-text');

    noteTitle.value = '';
    noteText.value = '';
}

window.borrarNota = function (id) {
   
    notas = notas.filter(nota => nota.id !== id);

    pintarNotas()
}

//n. Crear la función marcarRealizada la cual recibirá como parámetro un id y deberá 
//buscar el elemento dentro del array y cambiar la propiedad realizada por el valor 
//contrario al que ya posee y volver a pintar los elementos en pantalla para verlo reflejado.

function marcarRealizada (id){
    let notaEncontrada = notas.find((nota)=>nota.id === id);
console.log(notas);
    if( notaEncontrada){
        notaEncontrada.realizada = !notaEncontrada.realizada;
        pintarNotas();
    }else{
        console.log(`no se encontraron notas con el ${id}`);
    }
}

// ejecucion de invertir la realizada de una nota de true o false
// marcarRealizada(1)





