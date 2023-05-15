console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
//click listeners
    $('#add-Joke').on('click', submitJoke)
   
}

// Function That gets jokes from the server

function getJokes(event) {
    $.ajax({
        method: 'GET',
        url:'/server/server.js',

    }).then(function(response){
        console.log('response success', response);

        renderToDom(response);

    }).catch(function(error){
        alert('request failed')
        console.log('request failed', error);
    })
  
}