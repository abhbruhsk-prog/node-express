const express = require('express');
const { quotes } = require('./quotes.js');

const app = express();
app.use(express.json());

function getRandomQuote() {
    console.log(typeof(quotes['quotes']));
    const l = quotes.length;
    console.log(l);
    index = Math.floor(Math.random()*(l));
    console.log(index);
    console.log(quotes[index]);
    return quotes[index];
}

// Start the server
const PORT = 3000;

app.get('/', async (req, res) => {
    res.send("Express server is running");
});

/*
app.get('/quote', async (req, res) => {
    res.send(getRandomQuote());
})
*/



app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});


