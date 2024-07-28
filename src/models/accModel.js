const mongoose = require("mongoose")

const accData = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    url: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    senha: {
      type: String,
      required: true
    }
})

const Account = mongoose.model("Account", accData)

module.exports = Account