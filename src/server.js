const express = require('express'); // Importa o Express para criar o servidor web

const connectDatabase = require('./config/database'); // Importa a função de conexão com o banco de dados do arquivo de configuração
const Aluno = require('./models/Aluno'); // Importa o modelo de dados do Aluno para interagir com a coleção de alunos no MongoDB

const app = express(); // Cria uma instância do Express para configurar o servidor web
const PORT = 3000; // Define a porta em que o servidor irá escutar as requisições

app.use(express.json()); // Middleware para permitir que o servidor entenda requisições com corpo em formato JSON

app.get('/', (req, res) => {
  res.json({ mensagem: 'API REST em Node.js com Express.' });
}); // Rota raiz para verificar se a API está funcionando, respondendo com uma mensagem JSON

app.get('/alunos', async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({
      mensagem: 'Erro ao buscar alunos .',
      erro: error.message,
    }); // Rota para buscar todos os alunos, respondendo com um array (try) de alunos em formato JSON ou um erro (catch) caso a consulta falhe
  }
});

async function startServer() {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    }); // Inicia o servidor Express e faz com que ele escute na porta definida
  } catch (error) {
    console.error('Nao foi possivel iniciar a aplicacao.', error.message);
  }
}

startServer(); // Chama a função assíncrona para iniciar o servidor, garantindo que a conexão com o banco de dados seja estabelecida antes de começar a escutar as requisições