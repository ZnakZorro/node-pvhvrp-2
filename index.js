// Run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
for (let i=0; i<3; i++) console.log(`${i} Hello Node.js v${process.versions.node}!`);

//const fs = require('fs');
//const cheerio = require('cheerio');
const got = require('got');

let promiseYRNO = new Promise((resolve, reject) => {
  
	got('https://www.yr.no/api/v0/locations/2-3083828/forecast').then(async response => {
	  let ret = response.body;
    /*
  	let obj = JSON.parse(response.body);
		let teraz0 = obj.shortIntervals[0]
		let teraz1 = obj.shortIntervals[1]
		//console.log(teraz0);
		//console.log(teraz1);
		let symbol = teraz0.symbolCode.next1Hour+" &rarr; "+teraz0.symbolCode.next6Hours+" &rarr; "+teraz0.symbolCode.next12Hours;
		let ret = "<div>";
		let windAngle = ((teraz0.wind.direction +180)%360);
      ret += `
      <p>${(new Date(teraz0.start)).toLocaleString('pl-PL')} &Colon; ${symbol}</p>
      <p>T:<b>${teraz0.temperature.value}&#8451;</b>, F:${teraz0.feelsLike.value || teraz0.temperature.value}&#8451;, dP:${teraz0.dewPoint.value}&#8451;</p>
      <p>R:<b>${teraz0.precipitation.value}&sim;${teraz0.precipitation.max}mm</b>, W:${teraz0.wind.speed}&sim;${teraz0.wind.gust}m/s, <span class="arrow"  style="transform: rotate(${teraz0.wind.direction}deg);">&uarr;</span></p>
      <p>P:${teraz0.pressure.value}hPa, H:${teraz0.humidity.value}%  , UV:${teraz0.uvIndex.value}%  </p>
      `
		ret += "</div>";
    */
		resolve(ret);
	});
})




promiseYRNO.then((value) => {
	console.log(value);
	//console.log(JSON.stringify(value,null,"\t"));
});

