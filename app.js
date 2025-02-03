// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de nombres
let amigos = [];

//Función para agregar amigos
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim();

//Validar que el campo de nombre contenga un nombre válido
    if(nombre === ''){
    alert ('Por favor, inserte un nombre');
    return;
    
//Agregar el nombre a la lista y limpiar el imput
}else{
    amigos.push(nombre);
    //console.log(amigos);
    document.querySelector('#amigo').value = '';
    
//Actualizar la lista visualmente
listaAmigos()
    }
}
//Funcion para actualizar la lista
function listaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    };
}
//Función para realizar el sorteo
function sortearAmigo(){
    if (amigos.length < 2) {
        alert('Por favor, introducir mínimo dos nombres.');
        return;
    }

//Elegir un nombre al azar
   let nombreAleatorio = Math.floor (Math.random() * amigos.length);
   let amigoSorteado = amigos[nombreAleatorio];

//Mostrar el resultado
let resultado = document.getElementById('resultado');
resultado.innerHTML = `El amigo secreto es ${amigoSorteado}`;
}

