console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
//click listeners
    $('#add-Joke').on('click', ShowJoke)
   
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
    ShowJoke();
}

//click Handler 

function ShowJoke(event) {
// Don't refresh the page when I click submit!
event.preventDefault();

// grab a data from the inputs
const joke = $('#whoseJokeIn').val();
const question = $('#whoseJokeIn').val();
const punchLine = $('#whoseJokeIn').val();

 // Make a POST request to the server, sending the user input 
    // data along
    $.ajax({
        method: 'POST',
        url: '/server/server.js',
        data: {
            whoseJoke: "Luke",
            jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
            punchLine: "Do you know how to drive this thing?"

        }
    }).then(function(response) {
        console.log('success!');
        ShowJoke();
    }).catch(function(error) {
        alert('Error with joke post!');
        console.log('Error with post: ', error);
    })
}



function renderToDom(jokes) {
    $('#jokes').empty();
    // use jQuery to append jokes to DOM
    for (let joke of jokes ) {
        $('#jokes').append(`
            <li>${joke.whoseJoke}  ${joke.jokeQuestion} ${joke.punchLine}</li>
        `);
    }
}
