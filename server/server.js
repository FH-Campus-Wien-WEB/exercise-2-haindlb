const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies = [
  {
    title: "Interstellar",
    released: "2014-11-07",
    runtime: 169,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    directors: ["Christopher Nolan"],
    writers: ["Jonathan Nolan", "Christopher Nolan"],
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    plot: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",
    metascore: 74,
    imdbRating: 8.7
  },
  {
    title: "Inception",
    released: "2010-07-16",
    runtime: 148,
    genres: ["Action", "Adventure", "Sci-Fi"],
    directors: ["Christopher Nolan"],
    writers: ["Christopher Nolan"],
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO, but his tragic past may doom the project and his team to disaster.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    metascore: 74,
    imdbRating: 8.8
  },
  {
    title: "The Conjuring",
    released: "2013-07-19",
    runtime: 112,
    genres: ["Horror", "Mystery", "Thriller"],
    directors: ["James Wan"],
    writers: ["Chad Hayes", "Carey W. Hayes"],
    actors: ["Patrick Wilson", "Vera Farmiga", "Ron Livingston"],
    plot: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
    metascore: 68,
    imdbRating: 7.5
  }
]
  res.json(movies)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

