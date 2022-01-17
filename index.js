



//Decaring variables
const api = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = 'ha1oO6AauzL0gxfLtOp10LDfZPY6lMuCW2txRlEL';
const photo_result = document.getElementById("apod");
const title_result = document.getElementById("title");
const date_result = document.getElementById("date");
const info_result = document.getElementById("info");
const likedImage = document.getElementById('like_image');
const likeButton = document.getElementById('like_btn');
const dislikeButton = document.getElementById('dislike');
const date1= new Date().toDateString()



//Fetching api
function getPhoto() {
    fetch(`${api}${api_key}`)
    .then(res => res.json())//converting to json
    .then(data  => {
        if (data.status !== 200){ 
            date_result.innerHTML = `<h3>Todays Date: ${date1}</h3>`;//Date
            title_result.innerHTML = `<h1 class = 'title'>${data.title}</h1>`;//Title
            photo_result.innerHTML = `<img src ="${data.url}" class = 'pto'>`;//image
            info_result.innerHTML = `<p class = 'lead'>${data.explanation}</p>`;//Info

        }
        
    })
    }

getPhoto();



//onClick event for like button
function likeClick(){
    if(likeButton.innerHTML == 'Like image'){
        likeButton.innerHTML = '❤️';}
    else{
        likeButton.innerHTML = 'Like image';
        }
}