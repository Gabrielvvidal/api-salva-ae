const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const router = require("./router/router")

require("dotenv").config()
const URL = process.env.URL

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(router)

mongoose.connect(URL)
.then(() => console.log("db connected"))
.catch((err) => {throw new err})

app.listen(port, () => {
  console.log("Server iniciado")
})