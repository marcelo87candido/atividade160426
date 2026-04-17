const mongoose = require('mongoose'); // Importa o Mongoose para conectar ao MongoDB

const MONGO_URI = 'mongodb+srv://marcelo87candido_db_user:JzyKree7VhcKrV80@cluster0.yht2czm.mongodb.net/Projeto?appName=Cluster0'; // URL de conexão com o MongoDB Atlas

async function connectToDatabase() {
    await mongoose.connect(MONGO_URI);
    console.log('Conectou o banco com sucesso!');
}
// Exporta a função assíncrona de conexão para ser usada em outros arquivos
module.exports = connectToDatabase; // Exporta a função de conexão para ser usada em outros arquivos