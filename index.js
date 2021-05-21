// Run `node index.js` in the terminal


let url = 'https://www.yr.no/api/v0/locations/2-3083828/forecast';

import request from 'request';

//let url = "https://www.reddit.com/r/popular.json";

let options = {json: true};



request(url, options, (error, res, body) => {
    if (error) {
        return  console.log(error)
    };

    if (!error && res.statusCode == 200) {
        // do something with JSON, using the 'body' variable
    };
});