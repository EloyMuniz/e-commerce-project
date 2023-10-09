import dotenv from "dotenv"
import express from "express";
import cors from "cors";
import routes from "./routes.js";

const PORT = 8080;
const HOST = "0.0.0.0";
//Criação da inicialização do servidor
const app = express();

// Middleware para tratar como Buffer Bruto apenas em uma rota específica
app.use((req, res, next) => {
  if (req.path === "") {
    express.raw({ type: "application/json" })(req, res, next);
  } else {
    express.json({ limit: "10mb", extended: true })(req, res, next);
  }
});

app.use(cors());
app.use(routes);

app.listen(PORT, HOST);

app.get("/", function (req, res, next) {
  res.send("Olá!");
});
