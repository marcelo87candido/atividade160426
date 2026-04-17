const mongoose = require('mongoose'); // Importa o Mongoose para criar o modelo de dados do Aluno'

const alunosSchema = new mongoose.Schema(
    {
        nome: {
          type: String,
          required: true,
          trim: true,
        },
        curso: {
          type: String,
          required: true,
          trim: true,
        },
    },        // Configurações do esquema, como desabilitar a versão (__v) e definir o nome da coleção
    {
        versionKey: false, // Desabilita o campo __v que o Mongoose adiciona por padrão
        collection: 'alunos', // Define o nome da coleção no MongoDB
    }
)
module.exports = mongoose.model('Aluno', alunosSchema, 'alunos'); // Exporta o modelo de dados do Aluno para ser usado em outros arquivos