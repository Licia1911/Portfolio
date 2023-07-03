const input = document.querySelectorAll("input");


input.forEach( input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    })
});

function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid) {
        input.parentElement.classList.remove("col--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else {
        input.parentElement.classList.add("col--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tiposDeErrores = [
    "valueMissing",
    "typeMismatch"
]

const mensajeDeError = {
    nombre: {
        valueMissing: "El Nombre no puede estar vacío"
    },

    email: {
        valueMissing: "El Email no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },

    asunto: {
        valueMissing: "El asunto no puede estar vacío"
    },

};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tiposDeErrores.forEach( error => {
        if(input.validity[error]) {
            mensaje = mensajeDeError[tipoDeInput][error]
        }
    })

    return mensaje;
}





