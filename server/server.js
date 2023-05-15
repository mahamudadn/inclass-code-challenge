const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];

// serve back static files
app.use(express.static('server/public'));

// Route to get jokes
app.get('/jokes', function(req, res) {
  console.log('Request for /jokes was made');

  // send back list of quotes to client
  res.send(jokes);
  
  // // If I want to send an error: 
  // res.sendStatus(500);
});


// Post route
app.post('/jokes', function(req, res) {
  // req.body is the data that the client has sent in the request
  // req.body is a thing we get from bodyParser
  console.log('POST some data!', req.body);

  // Add my new quote to the jokes
  jokes.push(req.body);


  // The server always needs to respond!
  // Status 201 = 'Created'
  res.sendStatus(201);

})




app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server
