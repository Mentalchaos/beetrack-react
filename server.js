const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Changed this, cuz React is using port 3000 to run
const PORT = 3001;

server.use(middlewares)
server.use('/api', router)
server.listen(PORT, () => {
  console.log(`JSON Server is running in port ${PORT}`);
})
