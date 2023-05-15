console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
//click listeners
    $('#add-Joke').on('click', submitJoke)
   
}

// Function That gets jokes from the server

function getJokes(event) {
    // $.ajax({

    // })
  
}