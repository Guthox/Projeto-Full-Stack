const express = require("express")
const path = require("path")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

// Base de dados filmes
let filmes = [
    {
    titulo: "Forrest Gump - O Contador de Histórias",
    sinopse: "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks),um rapaz com QI abaixo da média e boas intenções."
    },
    {
    titulo: "Um Sonho de Liberdade",
    sinopse: "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela"
    }
]

// Ponto de acesso para atender requisições get oi
app.get("/oi", (req, res) => {res.sendFile(path.join(__dirname, "/index.html"))})

app.get("/filmes", (req, res) => {res.json(filmes)})

// Ponto de acesso para inserir um novo filme (EM MEMÓRIA)

app.post('/filmes', (req, res) => {
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    const filme = {
        titulo: titulo,
        sinopse: sinopse
    }
    filmes.push(filme)
    res.json(filmes)
})

app.listen(3000, () => console.log("app up & running."))