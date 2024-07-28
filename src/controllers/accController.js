const Account = require("../models/accModel")

//POST METHOD /account/save
exports.createAcc = async (req, res) => {
  const { title, url, email, senha } = req.body

  try {
    const account = new Account({ title, url, email, senha })
    const savedAcc = await account.save()
    res.status(201).json(savedAcc) 
  } catch (error) {
    res.status(500).json({error: "Erro na requisição"})
  }
}

//GET METHOD /account/find
exports.findAllAcc = async (req, res) => {
  try {
    const accounts = await Account.find()
    res.json(accounts)
  } catch (error) {
    res.status(500).json({error: "Erro na requisição"})
  }
}

//DELETE METHOD /account/delete/:id
exports.deleteAcc = async (req, res) => {
  const accountId = req.params.id

  try {
    const deletedAcc = await Account.findByIdAndDelete(accountId)

    if (!deletedAcc) {
      return res.status(404).json({error: "Conta não encontrada"})
    }

    res.json(deletedAcc)
  } catch (error) {
    res.status(500).json({error: "Erro na requisição"})
  }
}