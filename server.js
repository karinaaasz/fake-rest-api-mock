const http = require('http');
const data = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/api/users') return res.end(JSON.stringify(data));
  res.end(JSON.stringify({ status: 'ok' }));
});
server.listen(4000, () => console.log('Mock API on port 4000'));
