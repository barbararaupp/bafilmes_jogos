import express from 'express';
const servidor = express();

// Middleware 
servidor.use(express.json());

// Arrays em memória
const filmes = [];
const jogos = [];

// Health Check
servidor.get('/', (req, res) => {
  res.send('Olá! A API do catálogo está a funcionar.');
});


servidor.post('/filmes', (req, res) => {
  const { titulo, genero } = req.body;
  if (!titulo || !genero) {
    return res.status(400).json({ mensagem: 'Título e género são obrigatórios.' });
  }
  const novoFilme = { id: filmes.length + 1, titulo, genero };
  filmes.push(novoFilme);
  return res.status(201).json({ mensagem: 'Filme cadastrado com sucesso!', filme: novoFilme });
});


servidor.get('/filmes', (req, res) => {
  res.json(filmes);
});

servidor.post('/jogos', (req, res) => {
  const { nome, plataforma } = req.body;
  if (!nome || !plataforma) {
    return res.status(400).json({ mensagem: 'Nome e plataforma são obrigatórios.' });
  }
  const novoJogo = { id: jogos.length + 1, nome, plataforma };
  jogos.push(novoJogo);
  return res.status(201).json({ mensagem: 'Jogo cadastrado com sucesso!', jogo: novoJogo });
});


servidor.get('/jogos', (req, res) => {
  res.json(jogos);
});

servidor.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!');
});