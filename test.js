/*
    DO NOT MODIFY THIS FILE

	This file is for testing purposes only.
	Don't worry if you don't understand it yet, you can come back later and check it again.
*/

import {toExport as movies} from "./corrections.js";

let error = false;

console.log("\nChecking for empty plot data...");
error = movies.reduce((p,{plot, title}) => !plot && title ? console.log(`The plot of ${title} is empty. Please fill the data from IMDB.`) : p , false) === undefined ? true : false;

console.log("\nChecking for strange release years...");
error = movies.reduce((p,{year, title}) => year < 1900 || year > 2022 && title ? console.log(`The year of ${title} looks strange. Please check the release year from IMDB`) : p , false) === undefined ? true : false;

console.log("\nChecking for missing actor names...");
error =  movies.reduce((p,{actors, title}) => actors.filter(e => e === "").length && title ? console.log(`The name of an actor in ${title} is empty. Please fill the data from IMDB.`) : p, false) === undefined ? true : false;

console.log("\nChecking for missing director names...");
error = movies.reduce((p,{director, title}) => !director && title ? console.log(`The director of ${title} is missing or empty. Please fill the data from IMDB`) : p , false) === undefined ? true : false;

console.log("\nChecking for missing genres...");
error = movies.reduce((p,{genres, title}) => !genres && title ? console.log(`The genres of ${title} is missing or empty. Please fill the data from IMDB`) : p , false) === undefined ? true : false;

console.log("\nChecking for missing movies...");
error = movies.reduce((p,{title},i) => !title ? console.log(`The movie's data between the ${movies[i-1].title} and ${movies[i+1].title} is empty. Please fill the data from IMDB.`) : p , false) === undefined ? true : false;

console.log(error ? `\nThere are errors in your code.` : `\bYour solution seems fine, but don't forget to check the tasks' acceptance criteria.`);
