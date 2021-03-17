const url = `http://www.omdbapi.com/?s=${title}&y=${year}&apikey=1cbe0d07`;
  
function sendDataToAPI(title, year){
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((result) => console.log(result))

    .catch((error) => {
        console.log(error);
    })
 }

$('.user-form').on('submit', (event) => {
    event.preventDefault();
    const title = $('#title').val();
    const year = $('#year').val();
    sendDataToAPI(title, year);
    console.log(title, year); 
});
