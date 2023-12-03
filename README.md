# Projeto Node.js com MongoDB - Documentação

Este projeto consiste em uma aplicação Node.js que utiliza o MongoDB para gerenciar categorias e tarefas. Foram implementados controladores para manipular as operações de CRUD (Create, Read, Update, Delete) para categorias e tarefas.

## Pré-requisitos

- Node.js instalado (v14.x ou superior)
- MongoDB instalado e em execução

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/iDimabR/kanban-crud.git

2. Instale as dependências

   ```bash
   cd seu-repositorio
   npm install

## Configuração

Certifique-se de configurar as variáveis de ambiente necessárias para a conexão com o MongoDB no arquivo `connection.js`.

## Utilização

Para iniciar a aplicação use:

```
  npm start
```

A aplicação iniciará um servidor Express na porta padrão.

## Endpoints

### Categorias

`GET /categories`
Retorna todas as categorias.

`GET /categories/:id`
Retorna uma categoria específica com base no ID.

`POST /categories/create`
Cria uma nova categoria.

`PUT /categories/:id`
Atualiza uma categoria existente com base no ID.

`DELETE /categories/:id`
Deleta uma categoria existente com base no ID, removendo também as tarefas associadas a ela.

### Tarefas

`GET /tasks`
Retorna todas as tarefas.

`GET /tasks/:id`
Retorna todas as tarefas de uma categoria específica com base no ID da categoria.

`POST /tasks/create`
Cria uma nova tarefa.

`PUT /tasks/:id`
Atualiza uma tarefa existente com base no ID.

`DELETE /tasks/:id`
Deleta uma tarefa existente com base no ID.

## Estrutura de Projeto

- `controllers/` Contém os controladores de categorias e tarefas.
- `models/` Contém os modelos de dados para categorias e tarefas.
- `connection.js` Arquivo para configuração da conexão do MongoDB.
- `index.js` Arquivo principal que inicia o servidor Express e define as rotas.


