const express = require('express')
const path = require('path')
// logs the different requrests to our server
const logger = require('morgan')
// cross origin access
const cors = require('cors')

const app = express()

// access
app.use(cors({
    origin: "*"
}));

app.use(express.json())

app.use(express.static(path.join(__dirname, 'build')))

app.get("/test_route", (req, res) =>
{
    res.send("Good route!")
})





app.get('/*', (req, res) =>
{
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(5000, () =>
{
    console.log("Server is listening on 5000")
})