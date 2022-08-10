import http from 'http'

const server = http.createServer((req, res) => {
  res.end('Hello from the server!')
})

server.listen(8080, 'localhost', () => {
  console.warn('Listening on port 8080')
})