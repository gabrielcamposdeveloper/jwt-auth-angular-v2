**Como rodar localmente a API**

1. Entrar na pasta API: cd .\API
2. Instalar as dependências: 'npm i' ou 'npm install'
3. Iniciar a API com o comando: 'npm run dev'

**Como rodar localmente o proejto angular**

1. Entrar na pasta FRONTEND: cd .\FRONTEND
2. Instalar as dependências: 'npm i' ou 'npm install'
3. Iniciar o projeto com o comando: 'ng Serve'

**Acesso Sistema**

- Login: admin
- senha: 1234

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

### Situação #1. Falta das dependências\*\*

**Cenário**:

- O projeto foi entregue sem o arquivo package.json;
- Sem esse arquivo, o comando npm install não pode ser executado;
- Pelo motivo acima a pasta node_modules não foi criada, e o Angular CLI não encontrou os arquivos internos necessários (incluindo o schema);

**Solução**:

- Criação manual do arquivo package.json com informações padrão;
- Instalação das dependências com o comando "npm i";

**Erro Apresentado:**
_Arquivo_: angular.json
_Erro_: Unable to load schema from 'c:\Workspace\jwt-auth-angular-v2\node_modules\@angular\cli\lib\config\schema.json': Schema not found: file:///c:/Workspace/jwt-auth-angular-v2/node_modules/@angular/cli/lib/config/schema.json.

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

1. Geral:

- Criação de um modulo shared para criação e utilização de componentes úteis em mais de um ponto do projeto.
- Component navbar, com a possibilidade de navegar para as páginas de home e users, além de também poder deslogar o usuário, removendo o token da local storage.
- Criação de um service para coleta dos usuários "user.service.ts"

2. Login:

- autenticação do acesso diretamente conectado com o endpoint criado em express;
- Nova estilização e responsividade da tela;
- Envio da senha e username criptografado em base 64 para aumentar a segurança de informações sensíveis;
- Mensagem de validação para caso de login incorreto;

3. Home:

- Transformação da Home em um verdadeiro dashboard, aumentando o foco em apresentar os indicadores e ser intuitivo.
- Recurso para alterar em tempo real o tipo de gráfico desejado (Pizza, Barra, etc.), atravez de um Input de seleção PrimeNg
- Novos indicadores práticos para visualizar informações importantes como total de acessos, horas acessadas no mês/semana.

4. User:

- Criação de uma tabela utilizando melhor os recursos da PrimeNg como filtros, paginação personalizada, filtros de ordenação e busca por pesquisa;
- Nova estilização com linhas zebradas para facilitar visualização das informações;
- Dados capturados diretamente do endpoint criado em express;

**Backend**:

**Instrodução**
Obs: Estou ciente que a vaga compete a desenvolvedor Frontend, entretanto para trabalhar de forma mais fiel a realidade, criei uma API simples em **Express** consumindo uma base de dados FAKE.

1. Foram desenvolvidos Enpoints da Api:

- Estrutura para manipular o login gerar o token e devolver na requisição
- Estrutura para buscar lista de usuários

2. Instalçao do swgger para documentação e testes das api

Swagger: http://localhost:5001/api/docs/
