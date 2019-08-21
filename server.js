console.log('Server-side code running');

const express = require('express');
let yelpAPI = require('yelp-api');
const bodyParser = require('body-parser');

const app = express();

// Create a new yelpAPI object with your API key
let apiKey = 'ybYdygH_UXVcr6KIU7NA6Hvnw_W7U48VoTk8G_HpL0Gty3DrAPGn-lex5in5RoacI30bhx6f9F1rEsad7g_Mg6R0aKneNZ9GmiJpzL82p837mzKMf0-Ms_4I09BWXXYx';
let yelp = new yelpAPI(apiKey);

// serve files from the public directory
// app.use(express.static('public'));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}));

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});

// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

var api_data;

app.post('/results', function(req, res) {
    var zip_code = req.body.search;

    // sending a response does not pause the function
    let params = [{ location: zip_code, sort_by: 'review_count'}];

    // Call the endpoint
    yelp.query('businesses/search', params)
    .then(data => {
        // Success
        res.sendFile(__dirname + '/results.html');
        api_data = data;
        // res.send(data);
    })
    .catch(err => {
        // Failure
        console.log(err);
    });
  });

app.get('/show_results', function(req, res) {
    console.log(api_data);
    res.json(api_data);
});
