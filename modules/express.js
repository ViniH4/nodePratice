const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>COMENDO");
});

app.get("/users", (req, res) => {
  const users = [
    {
      Name: "John Doe",
      Email: "jhon@gmail.com",
    },
    {
      Name: "Jane Doe",
      Email: "jane@gmail.com",
    },
  ];

  res.status().json(users);
});

app.listen(PORT, () => {
  console.log(`Rodando na porta http://localhost:${PORT}/`);
});
