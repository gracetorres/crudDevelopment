const alumnos =[
    {
        email: "oo@.com",
        password: "oo"
    }
];

//create
const alumno = {
    email: "ii@a.com",
    password: "abc",
}
alumnos.push(alumno)


//crear otro alumno
const alumnodos = {
    email: "eliminar@a.com",
    password: "aa",
}
alumnos.push(alumnodos)

/*aa

[

    {
        email: "oo@.com",
        password: "oo"
    },
    {
        email: "ii@a.com",
        password: "abc",
    },
    {
        email: "eliminar@a.com",
        password: "aa",
    }
    
]


*/


//read

alumnos[0].password///00


//update

const newAlumno = {

    email: "cl@.com",
    password: "vr"
}

alumnos[1] = true;
/*
[

    {
        email: "oo@.com",
        password: "oo"
    },
    true,
    {
        email: "eliminar@a.com",
        password: "aa",
    }
]

*/

alumnos[1] = newAlumno;
/*
[

    {
        email: "oo@.com",
        password: "oo"
    },
    {

        email: "cl@.com",
        password: "vr"
    },
    {
        email: "eliminar@a.com",
        password: "aa",
    }
]
*/

/**
 * delete
 * 
 * 
 */

alumnos.splice(2,1)



const productos = [];

const mesa = {
    nombre:"mesa" ,
    precio:40
} 
const escoba = {
    nombre:"escoba" ,
    precio:20
} 
const camara = {
    nombre:"camara" ,
    precio:100
} 
productos.push(mesa)
productos.push(escoba)
productos.push(camara)    

/*
  [
    {
    nombre:"mesa" ,
    precio:40
    }, 
    {
    nombre:"escoba" ,
    precio:20
    }, 
    {
    nombre:"camara" ,
    precio:100
    } 
  ]
 */

function agregarProducto(){
   
    const inpNombre = document.getElementById("inpNombre").value;
    const inpPrecio = document.getElementById("inpPrecio").value;

    //create
    const producto = {
        nombre: inpNombre,
        precio: inpPrecio,
    }
    productos.push(producto)
    limparValores()
    cargarProducto()

}


function cargarProducto(){
    const table = document.getElementById("table");
    let html="";
    for (let index = 0; index < productos.length; index++) {
        html+=
            ` <tr>
                <td> ${productos[index].nombre} </td>
                <td>${productos[index].precio}</td>
                <td><button onclick="editar(${index})">Editar</button></td>
                <td><button onclick="eliminar(${index})">Eliminar</button></td>
             </tr>
            `;

    }
    table.innerHTML = html;
    

}

function eliminar(posicion){
    const pregunta = confirm("Estas seguro de eliminar?")
    if (pregunta) {
        productos.splice(posicion,1)
        cargarProducto()
    }
    
}

function editar(posicion){
   cargarDatosEnInput(posicion)
    mostrarBotonEditar()
    ocultarbotonAgregar()

}
function cargarDatosEnInput(i){
    const item = productos[i].nombre;
    const itemprecio = productos[i].precio;
    const inpNombre = document.getElementById("inpNombre");
    const inpPrecio = document.getElementById("inpPrecio");
    const posicion = document.getElementById("posicion");

    inpNombre.value = item;
    inpPrecio.value = itemprecio;
    posicion.value = i;
}
function ocultarBotonEditar(){
   
    const botonEditar = document.getElementById("botonEditar");
    botonEditar.classList.add("ocultar")
}
function mostrarBotonEditar(){
    const botonEditar = document.getElementById("botonEditar");
    botonEditar.classList.remove("ocultar")
}

function ocultarbotonAgregar(){  
    const botonAgregar = document.getElementById("botonAgregar");
    botonAgregar.classList.add("ocultar")
}
function funcionesIniciales(){
    cargarProducto()
    ocultarBotonEditar()
}
function mostrarBotonAgregar(){
    const botonAgregar = document.getElementById("botonAgregar");
    botonAgregar.classList.remove("ocultar");
}
function limparValores(){
    const inpNombre = document.getElementById("inpNombre");
    const inpPrecio = document.getElementById("inpPrecio");
    const posicion = document.getElementById("posicion");

    inpNombre.value = "";
    inpPrecio.value = "";
    posicion.value = "";
}
function editarrProducto(){
    const inpNombre = document.getElementById("inpNombre").value;
    const inpPrecio = document.getElementById("inpPrecio").value;
    const posicion = document.getElementById("posicion").value;
    
    const item = {
        nombre:inpNombre,
        precio:inpPrecio
    }

    productos[posicion] = item;
    limparValores()
    mostrarBotonAgregar()
    ocultarBotonEditar()
    cargarProducto()
}

const nombre =  "julio";
const nombresdos = nombre