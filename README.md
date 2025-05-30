# Resumo: Visão inicial
- Sistema Baseado em Angular e Typescript
- Telas presentes: Login, Home, Users.
- **Login**: Apresenta um sistema de autenticação que utiliza o service "auth.service.ts" para fazer uma requisição que bem sucedida gera um token de autenticação, necessário para acessar via localStorage as outras páginas protegidas pelo "auth.guard.ts"
- **Home**: Basicamente apresenta a ideia de um deshboard, representando as informações sobre usuários.
- **users**: tela de listagem de usuários, mostrando em tabela o usuário e o email.

# Correções iniciais

**Observações**:
Ao descompactar e abrir o projeto pela IDE constatei que haviam estruturas incompletas e problemas, dos quais impossibilitavam a inicialização do projeto

## Problemas:

### Situação #1. Falta das dependências**

**Cenário**:
- O projeto foi entregue sem o arquivo package.json;
- Sem esse arquivo, o comando npm install não pode ser executado;
- Pelo motivo acima a pasta node_modules não foi criada, e o Angular CLI não encontrou os arquivos internos necessários (incluindo o schema);

**Solução**:
- Criação manual do arquivo package.json com informações padrão;
- Instalação das dependências com o comando "npm i";

**Erro Apresentado:**
*Arquivo*: angular.json
*Erro*: Unable to load schema from 'c:\Workspace\jwt-auth-angular-v2\node_modules\@angular\cli\lib\config\schema.json': Schema not found: file:///c:/Workspace/jwt-auth-angular-v2/node_modules/@angular/cli/lib/config/schema.json.


### Situação #2. Falta da configuração Tsconfig

**Cenário**:
- Não conseguimos encontrar os arquivos de configuração: tsconfig e tsconfig.app;
- Esses arquivos são importantes para interpretar e copilar os códigos presentes em TypeScript;

**Solução**:
- Criação dos arquivos citados acima com definições básicas compatíveis com o projeto.

### Situação #3. Recursos não instalados/arquivos não criados

- O erro apresenta a falta da biblioteca 'Chart.js', então foi necessário instalar com o comando abaixo:
- npm install chart.js
Error: Can't resolve 'chart.js/auto'

- Em nosso Angular.json configuramos o arquivo "polyfills": "src/polyfills.ts", mas esse arquivo não existe, então foi necessario cria-lo com definições básicas.
File 'src/polyfills.ts' not found

- O arquivo styles.css também não estava presente na criação do projeto, sendo assim foi necessário cria-lo, para fazer utilização desse arquivo global/genérico que será importante para definirmos os estilos.
Error: Can't resolve 'src/styles.css'

### Melhorias Desenvolvidas

**Frontend**:
1. Login:
- Criação da conexão com backend para autenticar o acesso
- Estilização e responsividade.

2. Home:
- Recurso para alterar em tempo real o tipo de gráfico desejado (Pizza, Barra, etc.), atravez de um Input de seleção PrimeNg
- 

3. User:
- 
- 
- 

**Backend**:

**Instrodução**
Obs: Estou ciente que a vaga compete a desenvolvedor Frontend, entretanto para trabalhar de forma mais fiel a realidade, criei uma API simples em **Express** consumindo uma base de dados FAKE.
1. Foram desenvolvidos Enpoints da Api: 
- Estrutura para manipular o login gerar o token e devolver na requisição
- Estrutura para buscar lista de usuários
2. Instalçao do swgger para documentação e testes das api

Swagger: http://localhost:5001/api/docs/

**Como rodar localmente a API**
1. Entrar na pasta API: cd .\API
2. Instalar as dependências: 'npm i' ou 'npm install'
3. Iniciar a API com o comando: 'npm run dev'
