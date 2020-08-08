import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// http://localhost:3333/users

// METODOS
// GET: Buscar ou listar uma informação
// POST: Criar nova informação
// PUT: Atualizar uma informação existente
// DELETE: deletar uma informação existente

// Corpo (Request body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recursos eu quero atualizar ou deletar 
// Query Params: Usado para paginação, filtros, ordenação (request.query)



// localhost:3333
app.listen(3333);