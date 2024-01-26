const express = require("express");
const PORT = 3000;
const app = express();
app.use(express.json());

const UserModel = require("../src/models/user.model");

app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);
  next();
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    res.status(200).send(user);
  } catch (error) {
    res
      .status(404)
      .send(`Não foi possivel encontrar o usuario! `, error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userDelete = await UserModel.findByIdAndDelete(id);

    res.status(200).send(userDelete);
  } catch (error) {
    res.status(500).send(`Não foi possivel deletar o usuario `, error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).send(user);
  } catch {
    res
      .status(500)
      .send(`Não foi possivel atualizar o usuario! `, error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const users = await UserModel.create(req.body);

    res.status(201).json(users);
  } catch (error) {
    res
      .status(500)
      .send(`Não foi possivel criar um novo usuario! `, error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Rodando na porta http://localhost:${PORT}/`);
});
