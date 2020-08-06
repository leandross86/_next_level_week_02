import express from 'express';

const app = express();

// http://localhost:3333/users

// METODOS
// GET: Buscar ou listar uma informação
// POST: Criar nova informação
// PUT: Atualizar uma informação existente
// DELETE: deletar uma informação existente


app.get('/users', (request, response) => {
  const users = [
    { Name: 'Diego', Age: 25 },
    { Name: 'Leandro', Age: 33 },
  ]
  return response.json(users)
})

// localhost:3333
app.listen(3333);