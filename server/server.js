const express = require('express')
const path = require('path')
const movies = require('./movie-model')

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'files')))

app.get('/movies', function (req, res) {
  res.json(Object.values(movies))
})

app.get('/movies/:imdbID', function (req, res) {
  const imdbID = req.params.imdbID
  const movie = movies[imdbID]

  if (movie) {
    res.json(movie)
  } else {
    res.status(404).send("Movie not found")
  }
})

app.put('/movies/:imdbID', function (req, res) {
  const imdbID = req.params.imdbID

  if (movies[imdbID]) {
    movies[imdbID] = req.body
    res.sendStatus(200)
  } else {
    movies[imdbID] = req.body
    res.status(201).send(movies[imdbID])
  }
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")