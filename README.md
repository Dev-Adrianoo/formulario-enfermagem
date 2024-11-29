🩺 Diagnóstico Interativo com OpenAI API
Este é um projeto que utiliza a API OpenAI para gerar possíveis causas para sintomas descritos por usuários. A integração com a API torna o projeto surpreendentemente dinâmico, destacando o potencial da inteligência artificial no apoio à saúde.

Além disso, a aplicação conta com validações inteligentes, formatação de CPF em tempo real e uma interface amigável para garantir uma experiência completa e intuitiva para os usuários.

🚀 Funcionalidades Principais
🔍 OpenAI API
Integração direta com a OpenAI API para interpretar sintomas e fornecer possíveis causas.
O modelo de IA retorna respostas rápidas e relevantes, simulando uma consulta inicial.
🧾 Validação e Formatação de CPF
Formatação automática: Adiciona pontos e traços ao CPF enquanto o usuário digita.
Validação em tempo real: Exibe uma mensagem informando se o CPF é válido ou não.
📋 Validação de Dados do Formulário
Nome com no mínimo 3 caracteres.
CPF válido e formatado.
Sintomas com 5 a 100 caracteres.
📊 Exibição Interativa dos Resultados
Dados do formulário e possíveis causas exibidos de forma clara e organizada.
Limitação de caracteres para facilitar a leitura.
🛠️ Tecnologias Utilizadas
HTML
CSS
JavaScript
OpenAI API
sessionStorage
📂 Estrutura do Projeto
plaintext
Copiar código
📦 Diagnostico-Interativo  
├── index.html          # Página inicial com o formulário  
├── sintomas.html       # Página que exibe os resultados  
├── styles.css          # Estilos do projeto  
├── script.js           # Lógica do front-end e integrações com API  
└── README.md           # Documentação do projeto  
🖥️ Como Rodar o Projeto
Clone este repositório:

Adicione sua chave da OpenAI API:

No arquivo script.js, substitua const apiKey = "" pela sua chave pessoal.
Para obter uma chave, acesse OpenAI API.
Preencha o formulário, valide os dados e confira os resultados!

📖 Aprendizados no Desenvolvimento
Explorando a OpenAI API: Entender como integrar e manipular dados gerados por inteligência artificial foi o aspecto mais marcante deste projeto.
Validações e Formatações em Tempo Real: Implementar recursos dinâmicos para melhorar a experiência do usuário.
sessionStorage: Utilização eficiente do armazenamento temporário para transição de páginas.
UX/UI: Garantir clareza e acessibilidade na exibição dos resultados.
🤝 Contribuindo
Sinta-se à vontade para enviar sugestões ou abrir issues para melhorias no projeto.

Faça um fork do projeto.
Crie uma nova branch:
bash
Copiar código
git checkout -b feature/sua-feature  
Envie suas alterações:
bash
Copiar código
git add .  
git commit -m "Descrição da sua feature"  
git push origin feature/sua-feature  
📝 Licença
Este projeto está licenciado sob a MIT License. Consulte o arquivo LICENSE para mais detalhes.
