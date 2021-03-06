import http from 'http';
import path from 'path';
import fs from 'fs';

import serverConfig from 'config/server';
import jsonResponse from 'utils/jsonResponse';


// написал тут чтобы на диск не ходил, все равно данные не меняются
const data = fs.readFileSync(path.resolve(__dirname, '../fakeDB/tickets.json'), 'utf8');
const tickets = JSON.parse(data);


const server = http.createServer((request, response) => {
  // можно конечно сделать нормальную структуру роутов и тд, но тут просто отдать
  if(request.url !== '/tickets.list' || request.method !== 'GET'){
    return jsonResponse(response, { message: 'Method Not Allowed' }, 405);
  }

  // симулируем 3g
  setTimeout(() => {
    return jsonResponse(response, tickets);
  }, 500 + Math.random() * 2000);
});


server.listen(serverConfig.port, (error) => {
  if (error) {
    return console.log('Something bad happened', error);
  }

  console.log(`Server is listening on ${serverConfig.port}`);
});
