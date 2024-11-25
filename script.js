function formatarCPF(){
    const cpfField = document.getElementById("CPF");
    let cpf = cpfField.value;

    cpf = cpf.replace(/\D/g, '');
    if (cpf.length <= 11){
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    cpfField.value = cpf;
}

function verificarCadastro(event){
    event.preventDefault();
    const resultado = document.getElementById('resultados');
    resultado.innerHTML = ' ';
    const nome = document.getElementById('nome').value;
    const CPF = document.getElementById('CPF').value;
    const sintomas = document.getElementById('sintomas').value;

    const cpfClear = CPF.replace(/\D/g, '');
//Verificando tamanho do nome: 

if(nome.length >= 3 && CPF.length === 14 && !isNaN(cpfClear) && sintomas.length >= 5 && sintomas.length <= 100 ){
    sessionStorage.setItem('nome', nome); 
    sessionStorage.setItem('CPF', CPF);
    sessionStorage.setItem('sintomas', sintomas);
    window.location.href = '/sintomas.html';

}else{
    alert("Acesso NEGADO: Verifique as informações!");
}
}
