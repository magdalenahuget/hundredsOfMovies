import {toExport as movies} from "./data.js";

// You can use the `movies` array here
// Please write every correction and modification of the data to this file by updating the `movies` array
// using bracket and dot notation

// Add missing plots
console.log("--------------Add missing plots-----------\n")

movies[0].plot = "Beetlejuice is a very strange movie that explores life after death, turning into a ghost and having to accept that you died, now move on."
console.log(movies[0])

movies[21].plot = "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife."
console.log(movies[21])

movies[51].plot = "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
console.log(movies[51])

movies[52].plot = "Two friends on a summer holiday in Spain become enamored with the same painter, unaware that his ex-wife, with whom he has a tempestuous relationship, is about to re-enter the picture."
console.log(movies[52])

movies[104].plot = "American journalist Paul Kemp takes on a freelance job in Puerto Rico for a local newspaper during the 1960s and struggles to find a balance between island culture and the expatriates who live there."
console.log(movies[104])


// Correct wrong release years
console.log("--------------Correct wrong release years-----------\n")

movies[17].year = 2000
console.log(movies[17])

movies[26].year = 1999
console.log(movies[26])

movies[53].year = 2008
console.log(movies[53])

movies[80].year = 2008
console.log(movies[80])

movies[101].year = 2013
console.log(movies[101])

// Add missing actor names
console.log("--------------Add missing actor names-----------\n")

movies[2].actors[0] = "Tim Robbins"
console.log(movies[2])

movies[12].actors[3] = "Tommy Lee"
console.log(movies[12])

movies[34].actors[0] = "Leonardo DiCaprio"
console.log(movies[34])

movies[65].actors[1] = "Arien Brody"
console.log(movies[65])

movies[143].actors[2] = "Samuel L. Jackson"
console.log(movies[143])

// Add missing directors
console.log("--------------Add missing directors-----------\n")

movies[7].director = "Christopher Nolan"
console.log(movies[7])

movies[30].director = "director2"
console.log(movies[30])

movies[37].director = "director3"
console.log(movies[37])

movies[63].director = "director4"
console.log(movies[63])

movies[81].director = "director5"
console.log(movies[81])

// Add missing genres
console.log("--------------Add missing genres-----------\n")

movies[95].genres = "hip hop"
console.log(movies[95])

movies[145].genres = ["hip hop" , "rock"]
console.log(movies[145])

movies[145].genres.push("ballady")
console.log(movies[145])

// Add missing movie
console.log("--------------Add missing movie-----------\n")

movies[89]= {
    id: 90,
    title: "Vendetta",
    year: 2022,
    runtime: 106,
    genres: ["Action", "Thriller"],
    director: "Jared Cohn",
    actors: ["Bruce Willis", "Thomas Jane"],
    plot: "When his daughter is brutally murdered and legal justice looks unlikely, William Duncan takes the law into his own hands, setting out on a quest for retribution.",
  },
console.log(movies[89])

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

toExport = [...movies];

export {toExport}
