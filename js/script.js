import confirmaCPF from "./valida-cpf.js";
import verificarMenorIdade from "./valida-idade.js";

const camposFormulario = document.querySelectorAll("[required]");

camposFormulario.forEach( (campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo))
} )

function verificaCampo(campo) {
    if(campo.name == "cpf" && campo.value.length >= 11){
        confirmaCPF(campo);
    }

    if(campo.name == "aniversario" && campo.value != ""){
        verificarMenorIdade(campo);
    }
}