# Correções iniciais necessárias

Observações iniciais:
Ao descompactar e abrir o projeto pela IDE constatei que haviam estruturas incompletas e problemas, dos quais impossibilitavam a inicialização do projeto

## Problemas:

Situação #1. Falta de dependências

Cenário:
- O projeto foi entregue sem o arquivo package.json;
- Sem esse arquivo, o comando npm install não pode ser executado;
- Pelo motivo acima a pasta node_modules não foi criada, e o Angular CLI não encontrou os arquivos internos necessários (incluindo o schema);

Solução:
- Criação manual do arquivo package.json com informações padrão;
- Instalação das dependências com o comando "npm i";

### Erro Apresentado
*Arquivo*: angular.json
*Erro*: Unable to load schema from 'c:\Workspace\jwt-auth-angular-v2\node_modules\@angular\cli\lib\config\schema.json': Schema not found: file:///c:/Workspace/jwt-auth-angular-v2/node_modules/@angular/cli/lib/config/schema.json.


Situação #2. Falta da configuração Tsconfig

Cenário:
- Não conseguimos encontrar os arquivos de configuração: tsconfig e tsconfig.app;
- Esses arquivos são importantes para interpretar e copilar os códigos presentes em TypeScript;

Situação #3. Recursos não instalados