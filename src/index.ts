import express from "express";

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('<h1>Node.ts Express API! 😃</h1>')
})

app.listen(PORT, () => console.log(`Server running at ${PORT}`))