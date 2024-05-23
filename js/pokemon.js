let puntaje = 0;
let intento = 0;

const correcto = (idImagen, idLabel, idPuntaje, idIntento) => {
    intento += 1;
    console.log(intento);
    if (intento == 1) {
        document.getElementById(idPuntaje).innerText = "5";
        puntaje = 5;
    }
    if (intento == 2) {
        document.getElementById(idPuntaje).innerText = "3";
        puntaje = 3;
    }
    if (intento == 3) {
        document.getElementById(idPuntaje).innerText = "1";
        puntaje = 1;
        
    } 


    document.getElementById(idImagen).src = "/img/pcolor.jpg";
    document.getElementById(idLabel).style.background = "blue";
    document.getElementById(idLabel).innerText = "Felicitaciones, has seleccionado la opción correcta";
    document.getElementById(idLabel).style.display = "block";
    document.getElementById(idPuntaje).innerText = puntaje;
    document.getElementById(idIntento).innerText = intento;
}

const incorrecto = (idLabel,idIntento,) => {
    intento += 1;
    document.getElementById(idLabel).style.background = "red";
    document.getElementById(idLabel).innerText = "Pokémon incorrecto, intentalo nuevamente";
    document.getElementById(idLabel).style.display = "block";
    document.getElementById(idIntento).innerText = intento;
    if (intento == 3) {

        reiniciar(idImagen, idLabel, idIntento, idPuntaje);
        
    } 
}

const reiniciar = (idImagen, idLabel, idIntento, idPuntaje) => {
    puntaje = 0;
    intento = 0;
    document.getElementById(idImagen).src = "/img/pnegro.jpg";
    document.getElementById(idLabel).style.display = "none";
    document.getElementById(idIntento).innerText = intento;
    document.getElementById(idPuntaje).innerText = puntaje;
}