import express from "express";
import cors from "cors";
// import stripeRouter from "../routes/stripe";
// import userRouter from "../routes/user";

const app = express();
const PORT = 8080;
const apiVersion = "v1";

const corsOptions = {
    origin: ["http://localhost:3333"]
};

// app.use(stripeRouter);
app.use(cors(corsOptions));

app.get(`/${apiVersion}`, function (req, res) {
    res.send('Hello World!');
});


app.use(express.json());
// app.use(`/${apiVersion}`, userRouter);

app.listen(PORT, () =>
    console.log(`✨ Server started on ${PORT}`)
);
