const express = require('express');
var fs = require('fs');
const app = express();


var pepe = "";
var pepa = "";

for (i = 0; i < 10; i++) {
  pepe += `oa me ${i} <br>`
  // console.log(pepe + "\n")
}

fs.readFile('atata.html', function(err, data) {
  pepa += "" + data;
  //console.log(pepa);
})

app.use(express.static('/'))

app.get('/pepa', (req, res) => {
  res.send(pepa)
});

app.get('/pepe', (req, res) => {
  res.send(pepe)
});

app.get('/', (req, res) => {

  res.sendFile(__dirname + '/ola.html')
});

app.listen(3000, () => {
  console.log('server started1');
});
