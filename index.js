
var request = require('request');

var url = 'https://www.yr.no/api/v0/locations/2-3083828/forecast';

var options = {json: true};

request(url, options, (error, res, body) => {
    if (error) {return  console.log(error)};

    if (!error && res.statusCode == 200) {
        console.log(typeof body);
		for (var o in body){
			console.log(o);
		}
		for (var o in body.dayIntervals){
			console.log(o,body.dayIntervals[o]);
		}
		
    };
});
