const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejsdicas.ln8uvhd.mongodb.net/?retryWrites=true&w=majority`,
    );
    console.log("Conectado ao banco de dados!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados: ", error.message);
  }
};

module.exports = connectToDatabase;
