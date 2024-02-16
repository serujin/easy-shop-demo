# easy-shop-demo/frontend

Simple `npm` package to run a website using [NextJS] and [NodeJS].

## What does it include?

- [Axios]
- [Development Environment]
- [Docker]
- [Eslint]
- [Jest]
- [NextJS]
- [Prettier]
- [Production Environment]
- [React]
- [Typescript]

## Quick start

- Start [Docker daemon] in your system.
- Create docker network `docker network create easy-shop-demo-network` in case it doesn't exist already
- Development:
  - Run `docker build --tag easy-shop-demo-frontend:dev-latest . -f ./dev.Dockerfile`
  - Run `docker run -d -p "3000:3000" --name "easy-shop-demo-frontend-development" --network "easy-shop-demo-network" easy-shop-demo-frontend:dev-latest`
- Production:
  - Run `docker build --tag easy-shop-demo-frontend:prod-latest . -f ./prod.Dockerfile`
  - Run `docker run -d -p "3000:3000" --name "easy-shop-demo-frontend-production" --network "easy-shop-demo-network" easy-shop-demo-frontend:prod-latest`
- Go to http://localhost:3000/

[Axios]: https://axios-http.com/
[Development Environment]: ./dev.Dockerfile
[Docker]: https://www.docker.com/
[Docker daemon]: https://docs.docker.com/config/daemon/start/
[Eslint]: https://eslint.org/
[Jest]: https://jestjs.io/
[NextJS]: https://nextjs.org/
[NodeJS]: https://nodejs.org/en
[Prettier]: https://prettier.io/
[Production Environment]: ./prod.Dockerfile
[React]: https://react.dev/
[Typescript]: https://www.typescriptlang.org/
