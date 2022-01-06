# Backend E-commerce Adega
![GitHub top language](https://img.shields.io/github/languages/top/ramonpaolo/e-commerce-adega-backend)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ramonpaolo/e-commerce-adega-backend)
![GitHub](https://img.shields.io/github/license/ramonpaolo/e-commerce-adega-backend)

# 📑 Sobre o projeto

É uma aplicação web backend(API REST), para authenticação do usuário e requerimento de dados de bebidas.

### Como Funciona ?
A aplicação consiste em servir uma url para o frond-end, onde será utilizado para fazer login e cadastro de usuário, bem para pegar os dados das bebidas cadastradas, cadastrar bebidas e finalizar o pedido, tendo formas de pagamento coo criptomoedas ou cartão de crédito/débito

É utilizado a lib Express para o desenvolvimento Backend, junto com TypeScript.

Também foi utilizado o banco de dados MongoDB, para o cadastro de bebidas e usuários, sqlite para um pequeno sisteminha de cadastro de imagens temporariamente e o Firebase Storage para salvar as imagens na nuvem.

Para dar uma segurança maior, é utilizado a lib bcrypt para gerar um hash da senha do usuário, ao salvar no banco de dados.

Tanto no Login, como no Cadastro, é retornado um JWT que será salvo e lido no navegador do usuário.

---

### 🧪 Testes feitos utilizando Jest
Para rodas os testes, basta rodar o comando: <kbd>npm run test</kbd>
  
---

# 🚀 Tecnologias Utilizadas no Backend
- ExpressJs
- MongoDB
- Typescript
- Jest
- Sqlite
- Firebase(Storage)
- Multer
- JsonWebToken(JWT)

---

# 📁 Como executar o projeto?

Pré-requesitos: NodeJs 14.17 LTS

```bash
# clonar repositório
$ git clone https://github.com/ramonpaolo/e-commerce-adega-backend server

# entrar na pasta do projeto
$ cd server/

# crie o arquivo .env
$ touch .env

# abra o arquivo .env
$ nano .env

# insira a 'váriavel' jwt_key
JWT_KEY='ojn23459uasfdu'

# insira as variáveis para conexão do Firebase com seus dados
API_KEY=''
AUTH_DOMAIN=''
PROJECT_ID=''
STORAGE_BUCKET=''
MESSAGING_SENDER_ID=''
APP_ID=''
MEASUREMENT_ID=''

# insira a url de conexão para o MongoDB
MONGODB_URL=''
```

## Back End

```bash
# instalar as depêndencias:
$ npm install

# iniciar o server em modo de produção:
$ npm start

# iniciar o server em modo de desenvolvimento:
$ npm run serve
```