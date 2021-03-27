const output = document.querySelector('.output');

function createMovie(name, linkToPoster, year){
    const title = document.createElement('h2');
    const titleText = document.createTextNode(name);
    
    title.appendChild(titleText);

    const poster = document.createElement('img');
    poster.src = linkToPoster;
    poster.alt = name;

    const yearText = document.createTextNode(year);
    const yearP = document.createElement('p');
    yearP.appendChild(yearText);

    const HR = document.createElement('hr');

    const movieSection =  document.createElement('section');

    movieSection.appendChild(title);
    movieSection.appendChild(poster);
    movieSection.appendChild(yearP);
    movieSection.appendChild(HR);

    return movieSection;
}

  
function sendDataToAPI(title, year){
    const url = `http://www.omdbapi.com/?s=${title}&y=${year}&apikey=1cbe0d07`;
    
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        result.Search.forEach((movie) => {
            const movieLayOut = createMovie(movie.Title, movie.Poster, movie.Year);
            output.appendChild(movieLayOut);
        })
    });
    
    // .catch((error) => {
    //     console.log(error);
}

$('.user-form').on('submit', (event) => {
    event.preventDefault();
    const title = $('#title').val();
    const year = $('#year').val();
    sendDataToAPI(title, year);
    console.log(title, year); 
});

