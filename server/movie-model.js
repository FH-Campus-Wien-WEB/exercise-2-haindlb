/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

 const movies = {
  tt0816692: {
    imdbID: "tt0816692",
    Title: "Interstellar",
    Released: "2014-11-07",
    Runtime: 169,
    Genres: ["Adventure", "Drama", "Sci-Fi"],
    Directors: ["Christopher Nolan"],
    Writers: ["Jonathan Nolan", "Christopher Nolan"],
    Actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    Plot: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    Poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",
    Metascore: 74,
    imdbRating: 8.7,
  },

  tt1375666: {
    imdbID: "tt1375666",
    Title: "Inception",
    Released: "2010-07-16",
    Runtime: 148,
    Genres: ["Action", "Adventure", "Sci-Fi"],
    Directors: ["Christopher Nolan"],
    Writers: ["Christopher Nolan"],
    Actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    Plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO, but his tragic past may doom the project and his team to disaster.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: 74,
    imdbRating: 8.8,
  },

  tt1457767: {
    imdbID: "tt1457767",
    Title: "The Conjuring",
    Released: "2013-07-19",
    Runtime: 112,
    Genres: ["Horror", "Mystery", "Thriller"],
    Directors: ["James Wan"],
    Writers: ["Chad Hayes", "Carey W. Hayes"],
    Actors: ["Patrick Wilson", "Vera Farmiga", "Ron Livingston"],
    Plot: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
    Metascore: 68,
    imdbRating: 7.5,
  },
};

module.exports = movies;