// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  let newArray = moviesArray.map((element) => element.director)
  // console.log(newArray)

  return newArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielbergDramaMovies = moviesArray.filter(
    (movies) =>
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
  )
  //console.log(spielbergDramaMovies)
  return spielbergDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) {
    return 0
  }
  let avarageScore = moviesArray.reduce((acc, newScore) => {
    if (!newScore.score) {
      return acc
    } else return acc + newScore.score / moviesArray.length
  }, 0)
  //console.log(avarageScore)
  return Math.round(avarageScore * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const allDrama = moviesArray.filter((drama) => drama.genre.includes("Drama"))
  //console.log(scoresAverage(allDramaMovies))
  return scoresAverage(allDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let yearsArray = moviesArray
    .map((element) => element.year)
    .sort((a, b) => a - b)

  let mySet = new Set(yearsArray)
  let finalArray = Array.from(mySet)

  //console.log(finalArray)
  return finalArray // it does not pass the test 3 & 4 - not sure why
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let sortAlpha = moviesArray
    .map((element) => element.title)
    .sort()
    .splice(0, 20)

  console.log(sortAlpha)
  return sortAlpha
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
