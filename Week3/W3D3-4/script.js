const log = console.log;
const movieList = document.getElementById('movie-list')// returns <ul></ul>

getData().then(data => {
    const movieGenres = data.genres;
    movieGenres.forEach(movie => {
        let movieItem = document.createElement('li');
        movieList.appendChild(movieItem);
        console.log(movieList);
        movieItem.innerHTML = `Genre: ${movie.name}, id: ${movie.id}`;
    })
})

getLionKing().then(data => {
    const movieTitle = data.movie_results[0].title;
    const parent = document.getElementsByTagName('Body')[0];
    const movieItem = document.createElement('P');
    const movieHeader = document.createElement('h1');
    parent.appendChild(movieHeader);
    parent.appendChild(movieItem);
    movieItem.innerHTML = movieTitle;
    movieHeader.innerHTML = "My favorite Movie";
})

getTopRated().then(data => {
    const movieResults = data.results;
    const parent = document.getElementsByTagName('Body')[0];
    const movieHeader = document.createElement('h1');
    parent.appendChild(movieHeader);
    movieHeader.innerHTML = "Top Rated";
    const movieList = document.createElement('ul');
    parent.appendChild(movieList);
    movieResults.forEach(movie => {
        let movieItem = document.createElement('li');
        movieList.appendChild(movieItem);
        movieItem.innerHTML = movie.title;
    })
})

