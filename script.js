console.log ("Hola CH38");

//funcion que envie saludo con alerta //

function enviarSaludo(){
 alert(`Saludos`);
}

/**
 * forma correcta de comentar la funcion
 * Pedir el nombre de la persona usando un prmt()
 * Mostrar un saludo y el nombre de la persona
 */

function enviarSaludoAPersona(){
let message= prompt("Escribe tu nombre");
    alert(`Saludos amigo ${message }`)
}
