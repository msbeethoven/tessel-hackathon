// // Any copyright is dedicated to the Public Domain.
// // http://creativecommons.org/publicdomain/zero/1.0/

// /*********************************************
// Create a server that responds to every request by taking a picture and piping it directly to the browser.
// *********************************************/

// var av = require('tessel-av');
// var os = require('os');
// var http = require('http');
// var port = 8000;
// var camera = new av.Camera();

// http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'image/jpg' });

//   //  camera.capture().pipe(response);

//   setTimeout(function(){camera.capture().pipe(response)}, 3000);

// }).listen(port, () => console.log(`http://${os.hostname()}.local:${port}`));

'use strict';
const express = require('express');
const app = express();
const server = require('http').Server(app);
const os = require('os');
const path = require('path');
const port = 8888;
const fs = require('fs');


const av = require('tessel-av');
const camera = new av.Camera();
const capture = camera.capture();

server.listen(port, function () {
  console.log(`http://${os.hostname()}.local:${port}`);
});


app.use(express.static(path.join(__dirname, '/public')));
app.get('/stream', (request, response) => {
  response.redirect(camera.url);
});

// // Any copyright is dedicated to the Public Domain.
// // http://creativecommons.org/publicdomain/zero/1.0/

// /*********************************************
// Create a server that responds to every request by taking a picture and piping it directly to the browser.
// *********************************************/

// var av = require('tessel-av');
// var os = require('os');
// var http = require('http');
// var port = 8000;
// var camera = new av.Camera();

// http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'image/jpg' });

//   //  camera.capture().pipe(response);

//   setTimeout(function(){camera.capture().pipe(response)}, 3000);

// }).listen(port, () => console.log(`http://${os.hostname()}.local:${port}`));

// 'use strict';
// const express = require('express');
// const app = express();
// const http = require('http');
// const server = require('http').Server(app);
// const os = require('os');
// const path = require('path');
// const port = 8888;
// const fs = require('fs');


// const av = require('tessel-av');
// const camera = new av.Camera();
// const capture = camera.capture();

// http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'image/jpg' });
//   console.log("RES", response)

//   //  camera.capture().pipe(response);

//   setInterval(function(){camera.capture().pipe(response)}, 3000);
// })

// server.listen(port, function () {
//   console.log(`http://${os.hostname()}.local:${port}`);
// });

// capture.on('data', async function(data){
//  await fs.writeFile(path.join(__dirname, 'captured-via-data-event.jpg'), data);
// })


// // app.use(express.static(path.join(__dirname, '/public')));
// // app.get('/stream', (request, response) => {
// //   response.redirect(camera.url);
// // });