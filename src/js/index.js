const campo = document.querySelectorAll(".campo")

campo.forEach((campoEscolhido) => {
    const inputDoCampo = campoEscolhido.querySelector("input")

    inputDoCampo.addEventListener("blur", function () {
        if (inputDoCampo.value === "") {
            campoEscolhido.classList.add("campo-vazio")
        }
    })

    inputDoCampo.addEventListener("change", function () {
        if (inputDoCampo.value !== "") {
            campoEscolhido.classList.add("preenchido")
            campoEscolhido.classList.remove("campo-vazio")
        }
    })

    inputDoCampo.addEventListener("keydown", function (event) {
        if (event.key === 'Enter') {
            campoEscolhido.classList.add("campo-vazio")
        }
    })
})

function verificarFormularioCompleto() {
    campo.forEach(campoACompletar => {
        if (campoACompletar.querySelector("input").value === "") {
            campoACompletar.classList.add("campo-vazio")
        }
    })

    if (campo[0].querySelector("input").value !== "") {
        if (campo[1].querySelector("input").value !== "") {
            if (campo[2].querySelector("input").value !== "") {
                if (campo[3].querySelector("input").value !== "") {

                    alert("Formulário enviado");

                    campo.forEach(campoACompletar => {
                        if (campo[3].classList.contains("preenchido")) {
                            campoACompletar.classList.remove("preenchido");
                            campoACompletar.querySelector("input").value = ""
                        }
                    })

                } else {
                    alert("Por favor preencha todos os campos do formulário");
                }
            } else {
                alert("Por favor preencha todos os campos do formulário");
            }
        } else {
            alert("Por favor preencha todos os campos do formulário");
        }
    } else {
        alert("Por favor preencha todos os campos do formulário");
    }
}