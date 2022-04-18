### Usários disponíveis

Consultor
username: consultor@boaentrega.com.br
senha: consultor

Suporte
username: suporte@boaentrega.com.br
senha: suporte

Administrador
username: administrador@boaentrega.com.br
senha: administrador

### Para rodar o projeto

Nos diretórios:

- auth-service
- client-service
- dashboard-service
- delivery-service

Instale as dependências de cada microsserviço utilizando o comando `npm i`

Suba os containers Docker com o comando

```sh
./create-environment.sh
```

Rode a aplicação 'frontend-gsl'

```sh
cd frontend-gsl
npm i
npm run dev
```

### Restauração do banco de dados

Recomendamos restaurar o banco de dados utilizando o arquivo de backup disponíveis no respositório

```sh

```
