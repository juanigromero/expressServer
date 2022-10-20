const express = require('express')
const  Contenedor  = require('../../Tarea-02/JuanRomero.js')
require("dotenv").config()

let prod1 = {
    title: "patineta",
    price: 500,
    thumbnail: "http://d2r9epyceweg5n.cloudfront.net/stores/001/049/128/products/whatsapp-image-2022-02-01-at-4-40-44-pm1-ce0d338862904ee96116437525309399-640-0.jpeg"
}
let prod2 = {
    title: "guitarra",
    price: 5800,
    thumbnail: "http://d2r9epyceweg5n.cloudfront.net/stores/001/049/128/products/whatsapp-image-2022-02-01-at-4-40-44-pm1-ce0d338862904ee96116437525309399-640-0.jpeg"
}
let prod3 = {
    title: "peluca",
    price: 800,
    thumbnail: "http://d2r9epyceweg5n.cloudfront.net/stores/001/049/128/products/whatsapp-image-2022-02-01-at-4-40-44-pm1-ce0d338862904ee96116437525309399-640-0.jpeg"
}
let productsContainer = new Contenedor("productos")
productsContainer.save(prod1)
productsContainer.save(prod2)
productsContainer.save(prod3)

const app = express()


app.get('/productos',async (_req,res) => {
    let productos = await productsContainer.getAll()
    let parseProds = JSON.stringify(productos)
    res.send(`${parseProds}`)
})

app.get('/ping', async (_req,res) => {
    let productos = await productsContainer.getAll()
    let randomProduct = productos[Math.floor(Math.random() * productos.length)]
    let parseProds = JSON.stringify(randomProduct)
    res.send(`${parseProds}`)
})

const port = process.env.PORT

const server = app.listen(port, () => {
    console.log(`servidor corriendo en el puerto${port}`)
})

