// Run `node index.js` in the terminal

//const fs = require('fs');
//const cheerio = require('cheerio');
//import got from 'got';

let promiseYRNO = new Promise((resolve, reject) => {
  
	got('https://www.yr.no/api/v0/locations/2-3083828/forecast').then(async response => {
	  let ret = response.body;
		resolve(ret);
	});
})




promiseYRNO.then((value) => {
	console.log(value);

});

