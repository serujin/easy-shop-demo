# easy-shop-demo

Simple full-stack application to showcase skills and learn more about the used tech stack.

## What does it include?
- [Backend]
- [Docker]
- [Frontend]
- [Development Environment]
- [Production Environment]

## Quick start
- Start [Docker daemon] in your system.
- Development:
    - Run ```docker compose -f .\docker-compose.dev.yml up```
- Production:
    - Run ```docker compose -f .\docker-compose.prod.yml up```
- Go to http://localhost:3000/ to visit the web app.
- Go to http://localhost:3001/graphql to visit the GraphQL interface.

[Backend]: ./backend/README.md
[Development Environment]: ./docker-compose.dev.yml
[Docker]: https://www.docker.com/
[Docker daemon]: https://docs.docker.com/config/daemon/start/
[Frontend]: ./frontend/README.md
[Production Environment]: ./docker-compose.prod.yml
