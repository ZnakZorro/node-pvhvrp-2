// Run `node index.js` in the terminal


let u = 'https://www.yr.no/api/v0/locations/2-3083828/forecast';
fetch(u)
.then(r => {return r.json()})
.then(o => {
  console.log(o);
})
.catch(e => {console.log(e)})
