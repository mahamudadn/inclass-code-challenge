console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

//click listeners
    $('#addJokeButton').on('click', ShowJoke)
    getJokes();
}

// Function That gets jokes from the server

function getJokes(event) {
    $.ajax({
        method: 'GET',
        url:'/jokes',

    }).then(function(response){
        console.log('response success', response);

        renderToDom(response);

    }).catch(function(error){
        alert('request failed')
        console.log('request failed', error);
    })
    
}

//click Handler 

function ShowJoke(event) {
// Don't refresh the page when I click submit!
    event.preventDefault();

// grab a data from the inputs
const joke = $('#whoseJokeIn').val();
const question = $('#questionIn').val();
const punchLine = $('#punchlineIn').val();

    $('#whoseJokeIn').val('');
    $('#questionIn').val('');
    $('#punchlineIn').val('');


 // Make a POST request to the server, sending the user input 
    // data along
    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: {
            whoseJoke: joke,
            jokeQuestion: question,
            punchLine: punchLine

        }
    }).then(function(response) {
        console.log('success!');
        getJokes()
    }).catch(function(error) {
        alert('Error with joke post!');
        // console.log('Error with post: ', error);
    });
}



function renderToDom(jokes) {
    $('#outputDiv').empty();
    // use jQuery to append jokes to DOM
    for (let joke of jokes ) {
        $('#outputDiv').append(`
            <li>${joke.whoseJoke}  ${joke.jokeQuestion} ${joke.punchLine}</li>
        `);
    }
}
