const cors = require('cors');
const express = require('express');
const { parse } = require('csv/lib/sync');
const { readFileSync } = require('fs');

const server = express();

server.use(cors());

server.get('/download', (req, res) => {
  const file = '/speed.csv';

  res.download(file);
});

server.get('/', async (req, res) => {
  const data = await parse(readFileSync('/speed.csv').toString(), {
    columns: true,
    skip_empty_lines: true,
  });

  res.type('application/json').status(200).send(JSON.stringify(data));
});

server.listen(4000);
