
// Selectores

const encryptBtn = document.querySelector("#encryptButton");
const decryptBtn = document.querySelector("#decryptButton");
const copyButton = document.getElementById("CopyText");

const userInput = document.querySelector("#userInput");
const showResult = document.querySelector(".result_Box p");

const mensajeAlerta = document.querySelector(".messageBox");

let result = " ";

// Mensaje de error.

function messageInterval() {

    mensajeAlerta.classList.remove("hide");
    mensajeAlerta.style.display = "flex";
    let counter = 3;
    let intervalo = setInterval( () => {
        counter -= 1;
        if (counter == 0) {
            mensajeAlerta.classList.add("hide");
            clearInterval(intervalo)
            mensajeAlerta.style.display = "none";
        }
    }, 1000 ); 
}

// Eliminando Acentos y Carácteres especiales

function fixingText(text) {
    
    let finalText = text.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9\s]/g, '');
    return finalText;
}

// Encriptando...

encryptBtn.addEventListener("click", () => {

    let text = fixingText(userInput.value);

    if (text == "" ) {
        messageInterval();
    } else {
        mensajeAlerta.classList.add("hide");
        
        text = text.replace(/e/mg, "enter")
        .replace(/i/mg, "imes")
        .replace(/a/mg, "ai")
        .replace(/o/mg, "ober")
        .replace(/u/mg, "ufat");

        showResult.innerHTML = text;

    }

});

// Desencriptando...

decryptBtn.addEventListener("click", () => {

    let text = fixingText(userInput.value);

    if (text == "" ) {
        messageInterval();
    } else {
        mensajeAlerta.classList.add("hide");
        text = text.replace(/enter/mg, "e")
        .replace(/imes/mg, "i")
        .replace(/ai/mg, "a")
        .replace(/ober/mg, "o")
        .replace(/ufat/mg, "u");

        showResult.innerHTML = text;

    }
});

// Funcionalidad al Botón de copiar

copyButton.addEventListener("click", () => {

    if (showResult.innerHTML == "Ningún texto encontrado!") {
        console.log("No copiado")
    } else {
        navigator.clipboard.writeText(showResult.innerHTML);
    }
    
});