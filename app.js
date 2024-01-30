const express = require('express')
const app = express()
const router = require('./routers')
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})