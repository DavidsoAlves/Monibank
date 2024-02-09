export default function verificarMenorIdade(campo){
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior Idade')
    }
}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18,data.getUTCMonth(), data.getUTCDate())
    
    return dataAtual >= dataMais18
}