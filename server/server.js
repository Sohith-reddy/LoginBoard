const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/auth-router')
const cors=require('cors')
const connectDb = require('./utils/db')

const app = express();
dotenv.config();
const port = process.env.PORT

const corsoptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsoptions))


app.use(express.json());
//middleware which accepts json data
app.use('/',router)

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Listening at Port ${port}`)
    })
});