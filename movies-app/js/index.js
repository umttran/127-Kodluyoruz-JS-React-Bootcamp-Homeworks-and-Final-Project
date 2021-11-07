// Create Api Key and Endpoint
const apiKey = "52ceef4c013f0460da88cdcbac01fc7a";
const url = "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&sort_by=popularity.desc";
const imgUrl ="https://image.tmdb.org/t/p/w500";
const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey;

// Gettting Elements with DOM
const contentMovie = document.getElementsByClassName("content-movie")[0];
const searchMovie = document.getElementById("searchMovie");
const searchInput = document.getElementById("searchInput");

getMovies(url);

// Function to Get Movie Data
function getMovies(url) {
  fetch(url).then(res => res.json()).then(data => {
    console.log(data.results);
    showMovies(data.results);
  })

}

// Function to Show Movies 
function showMovies(data) {

  contentMovie.innerHTML = '';

  data.forEach(movie => {

    const {poster_path, original_title, vote_average, release_date} = movie;
    const movieCard = document.createElement("div");

    movieCard.classList.add("content-movie-card");

     movieCard.innerHTML = `
        <div class="content-movie-card-img">
          <img src="${imgUrl + poster_path}" alt="movie-image">
        </div>

        <div class="content-movie-card-info">
          <div class="card-info-top">
            <div class="movie-name">${original_title}</div>
            <span class="movie-rate-span ${movieRate(vote_average)}">${vote_average}</span>
          </div>
          <div class="card-info-bottom"><span class="movie-date">${release_date}</span></div>
        </div>
     `

    contentMovie.appendChild(movieCard);
  });
}


// Assing Rating color for Movies
function movieRate(rateValue) {
  if ( rateValue >= 8){
    return `green`
  }
  else if ( rateValue >= 5) {
    return `blue`
  }
  else {
    return `red`
  }
}


// Function to see the written movie on the screen
searchMovie.addEventListener("input", (e) => {
  e.preventDefault();

  const userInput = searchInput.value;
  
  if(userInput) {
    getMovies(searchUrl + "&query=" + userInput)
  }

  console.log(e.value);

})