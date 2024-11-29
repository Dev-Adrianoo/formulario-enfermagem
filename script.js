function formatarCPF() {
    const cpfField = document.getElementById("CPF");
    let cpf = cpfField.value;

    cpf = cpf.replace(/\D/g, ''); 
    if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
    }
    cpfField.value = cpf;
    exibirMensagemCPFValido(cpf);  
}


function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); 

    if (cpf.length !== 11) {
        return false; 
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        return false; 
    }

    let soma = 0;
    let multiplicador = 10;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * multiplicador--;
    }
    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    soma = 0;
    multiplicador = 11;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * multiplicador--;
    }
    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpf.charAt(9)) === digito1 && parseInt(cpf.charAt(10)) === digito2) {
        return true;
    }

    return false;
}


function exibirMensagemCPFValido(cpf) {
    const mensagemCPF = document.getElementById("mensagemCPF");
    if (validarCPF(cpf)) {
        mensagemCPF.textContent = "CPF Válido!";
        mensagemCPF.style.color = "green";
    } else {
        mensagemCPF.textContent = "CPF Inválido!";
        mensagemCPF.style.color = "red";
    }
}


function verificarCadastro(event) {
    event.preventDefault();
    const resultado = document.getElementById('resultados');
    resultado.innerHTML = ' ';
    const nome = document.getElementById('nome').value;
    const CPF = document.getElementById('CPF').value;
    const sintomas = document.getElementById('sintomas').value;

    const cpfClear = CPF.replace(/\D/g, ''); 

    if (nome.length >= 3 && CPF.length === 14 && !isNaN(cpfClear) && sintomas.length >= 5 && sintomas.length <= 100) {
        if (validarCPF(CPF)) {
            sessionStorage.setItem('nome', nome);
            sessionStorage.setItem('CPF', CPF);
            sessionStorage.setItem('sintomas', sintomas);
            window.location.href = '/sintomas.html';
        } else {
            alert("CPF inválido! Verifique o número.");
        }
    } else {
        alert("Acesso NEGADO: Verifique as informações!");
    }
}


async function obterCausasDosSintomas(sintomas) {
    const apiKey = "CHAVE AQUI!"
    const prompt = `Baseado nos sintomas fornecidos: "${sintomas}", forneça uma lista das possíveis causas.`;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "Você é um assistente útil para diagnosticar sintomas e fornecer possíveis causas."
                    },
                    {
                        role: "user",
                        content: `Baseado nos sintomas fornecidos: "${sintomas}", forneça uma lista das possíveis causas.`
                    }
                ],
                max_tokens: 200,
                temperature: 0.7
            })
        });

        const data = await response.json();
        if (data.choices && data.choices[0].message && data.choices[0].message.content) {
            return data.choices[0].message.content.trim();
        } else {
            throw new Error('Não foi possível obter uma resposta da API.');
        }
    } catch (error) {
        console.error('Erro ao acessar a API:', error);
        return 'Erro ao buscar as possíveis causas. Tente novamente mais tarde.';
    }
}


document.addEventListener('DOMContentLoaded', async () => {
    const nome = sessionStorage.getItem('nome');
    const cpf = sessionStorage.getItem('CPF');
    const sintomas = sessionStorage.getItem('sintomas');
    const resultadoDiv = document.getElementById('resultado');

    if (nome && cpf && sintomas) {
        resultadoDiv.innerHTML = `
            <p><strong>Nome: </strong> ${nome}</p>
            <p><strong>CPF: </strong> ${cpf}</p>
            <p><strong>Sintomas:</strong> ${sintomas}</p> 
            <h2><strong>Possíveis Causas: </strong> Carregando...</h2> <br>
        `;

        const causas = await obterCausasDosSintomas(sintomas);
        const causasDiv = document.createElement('p');
        causasDiv.innerHTML = `${causas}`;
        resultadoDiv.appendChild(causasDiv);
    } else {
        resultadoDiv.innerHTML = '<p>Dados não encontrados.</p>';
    }
});
