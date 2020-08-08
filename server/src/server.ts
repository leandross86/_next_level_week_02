import express, { json } from 'express';

const app = express();
app.use(express.json());

// http://localhost:3333/users

// METODOS
// GET: Buscar ou listar uma informação
// POST: Criar nova informação
// PUT: Atualizar uma informação existente
// DELETE: deletar uma informação existente

// Corpo (Request body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recursos eu quero atualizar ou deletar 
// Query Params: Usado para paginação, filtros, ordenação (request.query)

app.post('/', (request, response) => {
    return response.json({ mesage: "Hello world!"})
})

// localhost:3333
app.listen(3333);