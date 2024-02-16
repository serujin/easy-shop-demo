# easy-shop-demo/backend
Simple ```npm``` package to run a mock backend server leveraging [json-graphql-server] to create a simple [GraphQL] API to run in [NodeJS].

## What does it include?
- [Express.js]
- [Docker]
- [JSON] database with mock data.
- [json-graphql-server]
- [NodeJS]

## Database 
The database is specified in the ```database.json``` file which has already mapped some data in [JSON] format.

## Quick start
1. Start [Docker daemon] in your system.
2. Create docker network ```docker network create easy-shop-demo-network``` in case it doesn't exist already
3. Run ```docker build --tag easy-shop-demo-backend:latest .```
4. Run ```docker run -d -p "3001:3000" --name "easy-shop-demo-backend" --network "easy-shop-demo-network" easy-shop-demo-backend:latest```
5. Go to http://localhost:3001/graphql
6. Use any query: e.g. ```{allProducts{id,name}}```

[Docker]: https://www.docker.com/
[Docker daemon]: https://docs.docker.com/config/daemon/start/
[Express.js]: https://expressjs.com/
[GraphQL]: https://graphql.org/
[JSON]: https://es.wikipedia.org/wiki/JSON
[json-graphql-server]: https://github.com/marmelab/json-graphql-server
[NodeJS]: https://nodejs.org/en