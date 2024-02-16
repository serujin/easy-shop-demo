# easy-shop-demo/backend
Simple ```npm``` package to run a mock backend server leveraging [json-graphql-server] to create a simple [GraphQL] API to run in [NodeJS].

## What does it include?
- [Concurrently]
- [Cors]
- [Docker]
- [Dotenv]
- [Development Environment]
- [Eslint]
- [Express.js]
- [Jest]
- [JSON] database with mock data.
- [Json-graphql-server]
- [NodeJS]
- [Nodemon]
- [Prettier]
- [Production Environment]
- [Supertest]
- [TS-Jest]
- [Tsup]
- [Typescript]


## Database 
The database is specified in the ```database.json``` file which has already mapped some data in [JSON] format.

## Quick start
- Start [Docker daemon] in your system.
- Create docker network ```docker network create easy-shop-demo-network``` in case it doesn't exist already
- Development:
  - Run `docker build --tag easy-shop-demo-backend:dev-latest . -f ./dev.Dockerfile`
  - Run `docker run -d -p "3001:3000" --name "easy-shop-demo-backend-development" --network "easy-shop-demo-network" easy-shop-demo-backend:dev-latest`
- Production:
  - Run `docker build --tag easy-shop-demo-backend:prod-latest . -f ./prod.Dockerfile`
  - Run `docker run -d -p "3001:3000" --name "easy-shop-demo-backend-production" --network "easy-shop-demo-network" easy-shop-demo-backend:prod-latest`
- Go to http://localhost:3001/graphql
- Use any query: e.g. ```{allProducts{id,name}}```

[Concurrently]: https://github.com/open-cli-tools/concurrently
[Cors]: https://github.com/expressjs/cors
[Docker]: https://www.docker.com/
[Docker daemon]: https://docs.docker.com/config/daemon/start/
[Dotenv]:https://github.com/motdotla/dotenv
[Development Environment]: ./dev.Dockerfile
[Eslint]: https://eslint.org/
[Express.js]: https://expressjs.com/
[GraphQL]: https://graphql.org/
[Jest]: https://jestjs.io/
[JSON]: https://es.wikipedia.org/wiki/JSON
[Json-graphql-server]: https://github.com/marmelab/json-graphql-server
[NodeJS]: https://nodejs.org/en
[Nodemon]: https://nodemon.io/
[Prettier]: https://prettier.io/
[Production Environment]: ./prod.Dockerfile
[Supertest]: https://github.com/ladjs/supertest
[TS-Jest]: https://kulshekhar.github.io/ts-jest/
[Tsup]: https://tsup.egoist.dev/
[Typescript]: https://www.typescriptlang.org/