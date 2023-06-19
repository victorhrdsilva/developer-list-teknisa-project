# Lista de Programadores - CRUD TEKNISA

Este é um projeto de CRUD (Create, Read, Update, Delete) desenvolvido utilizando JavaScript, Node.js, Express, Joi, Sequelize e SQLite3, criado como parte do processo seletivo para estágio na empresa Teknisa.

## Descrição

O objetivo deste projeto é criar uma API para gerenciar programadores, permitindo a criação, leitura, atualização e exclusão de registros. Cada programador possui um nome e informações sobre suas habilidades em JavaScript, Python e Java.

## Funcionalidades

- Criar programador: O usuário pode adicionar um novo programador fornecendo seu nome (string) e suas habilidades em JavaScript, Python e Java (boolean).
- Ler programadores: O usuário pode obter uma lista de todos os programadores cadastrados ou buscar um programador específico pelo seu ID.
- Atualizar programador: O usuário pode atualizar as informações de um programador existente através do seu ID.
- Excluir programador: O usuário pode remover um programador do banco de dados pelo seu ID.

## Tecnologias utilizadas

- JavaScript: Utilizado para implementar a lógica do CRUD.
- Node.js: Ambiente de execução JavaScript server-side.
- Express: Framework web para construir a API.
- Joi: Biblioteca para validação de dados.
- Sequelize: ORM (Object-Relational Mapping) utilizado para interagir com o banco de dados.
- SQLite3: Banco de dados relacional utilizado para armazenar os registros de programadores.

## Endpoints da API

- `GET /retrieveProgrammers`: Retorna a lista de todos os programadores cadastrados.
- `GET /retrieveProgrammer/:id`: Retorna os dados do programador com o ID especificado.
- `POST /createProgrammer`: Cria um novo programador com base nos dados fornecidos.
- `PUT /updateProgrammer/:id`: Atualiza as informações do programador com o ID especificado.
- `DELETE /deleteProgrammer/:id`: Remove o programador com o ID especificado.
